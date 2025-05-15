import fs, { write } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { transform } from "rdf-transform";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const SOURCE_DIR = path.resolve(__dirname, "../source");
const JSONLD_DIR = path.resolve(__dirname, "../generated/jsonld");
const TTL_JS_DIR = path.resolve(__dirname, "../generated/ttl");

async function findTtlFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir);
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const entryStat = await stat(fullPath);
    if (entryStat.isDirectory()) {
      files.push(...(await findTtlFiles(fullPath)));
    } else if (entry.endsWith(".ttl")) {
      files.push(fullPath);
    }
  }
  return files;
}

async function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    await mkdir(dir, { recursive: true });
  }
}

async function convertTtlToJsonld(ttlPath: string, jsonldPath: string) {
  const ttlContent = await readFile(ttlPath, "utf8");

  const jsonldStream = transform(fs.createReadStream(ttlPath), {
    from: { contentType: "text/turtle" },
    to: { contentType: "application/ld+json" },
  });

  const writeStream = fs.createWriteStream(jsonldPath);

  // Return a promise that resolves when the piping is complete
  return new Promise((resolve, reject) => {
    jsonldStream.pipe(writeStream);
    jsonldStream.on("error", reject);
    writeStream.on("finish", () => resolve(true));
  });
}

async function exportTtlAsJs(ttlPath: string, jsPath: string) {
  const ttlContent = await readFile(ttlPath, "utf8");
  const jsExport = `const turtleShape = ${JSON.stringify(
    ttlContent
  )};\nexport default turtleShape;\n`;
  await writeFile(jsPath, jsExport, "utf8");
}

/**
 * Recursively generates index.js files with export statements for all subdirectories and files
 * with the specified extension in the base directory.
 *
 * The function walks through the directory tree and creates index.js files that:
 * - Export subdirectories as namespaces
 * - Export default exports from files with the specified extension
 *
 * All export names are sanitized to ensure they are valid JavaScript identifiers.
 *
 * @param baseDir - The base directory to start generating index files from
 * @param ext - The file extension to look for (e.g., '.json', '.js')
 *
 */
async function generateIndexFiles(baseDir: string, ext: string) {
  // Inner recursive function to walk through directories
  async function walk(dir: string) {
    // Read all entries in the current directory
    const entries = await readdir(dir);
    // Array to store export statements
    const exports: string[] = [];

    // Process each entry in the directory
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const entryStat = await stat(fullPath);

      if (entryStat.isDirectory()) {
        // Recursively process subdirectories first
        await walk(fullPath);
        // Add an export statement for the subdirectory as a namespace
        // Replace any non-alphanumeric characters with underscores for valid JS identifiers
        exports.push(
          `export * as ${entry.replace(
            /[^a-zA-Z0-9_]/g,
            "_"
          )} from './${entry}';`
        );
      } else if (entry.endsWith(ext)) {
        // For files with the matching extension, add an export statement
        // Create a valid JS identifier by removing the extension and replacing invalid chars
        const exportName = path
          .basename(entry, ext)
          .replace(/[^a-zA-Z0-9_]/g, "_");
        exports.push(`export { default as ${exportName} } from './${entry}';`);
      }
    }

    // If we have any exports, write them to an index.js file in the current directory
    if (exports.length > 0) {
      await writeFile(
        path.join(dir, "index.js"),
        exports.join("\n") + "\n",
        "utf8"
      );
    }
  }

  // Start the directory walking process from the base directory
  await walk(baseDir);
}

async function processFiles() {
  // Clean up existing files
  if (fs.existsSync(JSONLD_DIR)) {
    await fs.promises.rm(JSONLD_DIR, { recursive: true, force: true });
  }
  if (fs.existsSync(TTL_JS_DIR)) {
    await fs.promises.rm(TTL_JS_DIR, { recursive: true, force: true });
  }

  // Recreate empty directories
  await ensureDir(JSONLD_DIR);
  await ensureDir(TTL_JS_DIR);

  // Find all Turtle (.ttl) files in the source directory
  const ttlFiles = await findTtlFiles(SOURCE_DIR);

  // Process each Turtle file
  for (const ttlFile of ttlFiles) {
    // Get the file path relative to the source directory
    const relPath = path.relative(SOURCE_DIR, ttlFile);

    // Define output paths for JSON-LD and JS files
    const jsonldOut = path.join(JSONLD_DIR, relPath.replace(/\.ttl$/, ".json"));
    const ttlJsOut = path.join(TTL_JS_DIR, relPath.replace(/\.ttl$/, ".js"));

    // Create necessary directories if they don't exist
    await ensureDir(path.dirname(jsonldOut));
    await ensureDir(path.dirname(ttlJsOut));

    // Convert Turtle to JSON-LD format
    await convertTtlToJsonld(ttlFile, jsonldOut);

    // Export Turtle content as JavaScript module
    await exportTtlAsJs(ttlFile, ttlJsOut);
  }

  // Generate index.js files for the JSON-LD directory
  await generateIndexFiles(JSONLD_DIR, ".json");

  // Generate index.js files for the JS directory
  await generateIndexFiles(TTL_JS_DIR, ".js");
}

processFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
