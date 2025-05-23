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

// Export Turtle content as ES module (.mjs)
async function exportTtlAsMjs(ttlPath: string, mjsPath: string) {
  // Read the Turtle file content
  const ttlContent = await readFile(ttlPath, "utf8");
  // Wrap the content as a default export in an ES module
  const mjsExport = `const turtleShape = ${JSON.stringify(ttlContent)};\nexport default turtleShape;\n`;
  await writeFile(mjsPath, mjsExport, "utf8");
}

// Export Turtle content as CommonJS module (.cjs)
async function exportTtlAsCjs(ttlPath: string, cjsPath: string) {
  // Read the Turtle file content
  const ttlContent = await readFile(ttlPath, "utf8");
  // Wrap the content as a module.exports in a CommonJS module
  const cjsExport = `const turtleShape = ${JSON.stringify(ttlContent)};\nmodule.exports = turtleShape;\n`;
  await writeFile(cjsPath, cjsExport, "utf8");
}

/**
 * Recursively generates index.mjs and index.cjs files with export statements for all subdirectories and files
 * with the specified extension in the base directory.
 *
 * The function walks through the directory tree and creates index files that:
 * - Export subdirectories as namespaces
 * - Export default exports from files with the specified extension
 *
 * All export names are sanitized to ensure they are valid JavaScript identifiers.
 *
 * @param baseDir - The base directory to start generating index files from
 * @param ext - The file extension to look for (e.g., '.json', '.mjs')
 */
async function generateIndexFiles(baseDir: string, ext: string) {
  // Inner recursive function to walk through directories
  async function walk(dir: string) {
    // Read all entries in the current directory
    const entries = await readdir(dir);
    // Arrays to store export statements
    const exports: string[] = [];
    const exportsStar: string[] = [];

    // Process each entry in the directory
    for (const entry of entries) {
      const fullPath = path.join(dir, entry);
      const entryStat = await stat(fullPath);

      if (entryStat.isDirectory()) {
        // Recursively process subdirectories first
        await walk(fullPath);
        // Add export statements for the subdirectory as a namespace and as a star export
        const ns = entry.replace(/[^a-zA-Z0-9_]/g, "_");
        exports.push(`export * as ${ns} from './${entry}';`);
        exportsStar.push(`export * from './${entry}';`);
      } else if (entry.endsWith(ext)) {
        // For files with the matching extension, add export statements
        const exportName = path
          .basename(entry, ext)
          .replace(/[^a-zA-Z0-9_]/g, "_");
        exports.push(`export { default as ${exportName} } from './${entry}';`);
        exportsStar.push(`export * from './${entry}';`);
      }
    }

    // If we have any exports, write them to index.mjs and index.cjs files in the current directory
    if (exports.length > 0) {
      const content = exports.concat(exportsStar).join("\n") + "\n";
      // Write ES module index (index.mjs)
      await writeFile(path.join(dir, "index.mjs"), content, "utf8");
      // Write CommonJS index (index.cjs) using object spread and named property pattern
      const cjsRequires = entries
        .filter((entry) => {
          const fullPath = path.join(dir, entry);
          return fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
        })
        .map((entry) => {
          const ns = entry.replace(/[^a-zA-Z0-9_]/g, "_");
          return `const ${ns} = require('./${entry}');`;
        });
      const cjsExports = entries
        .filter((entry) => {
          const fullPath = path.join(dir, entry);
          return fs.existsSync(fullPath) && fs.statSync(fullPath).isDirectory();
        })
        .map((entry) => {
          const ns = entry.replace(/[^a-zA-Z0-9_]/g, "_");
          return `...${ns}, ${ns}`;
        });
      const cjsFiles = entries
        .filter((entry) => entry.endsWith(ext))
        .map((entry) => {
          const exportName = path
            .basename(entry, ext)
            .replace(/[^a-zA-Z0-9_]/g, "_");
          return `const ${exportName} = require('./${entry}');`;
        });
      const cjsFileExports = entries
        .filter((entry) => entry.endsWith(ext))
        .map((entry) => {
          const exportName = path
            .basename(entry, ext)
            .replace(/[^a-zA-Z0-9_]/g, "_");
          return `...${exportName}, ${exportName}`;
        });
      const cjsContent =
        [
          ...cjsRequires,
          ...cjsFiles,
          `module.exports = { ${[...cjsExports, ...cjsFileExports].join(", ")} };`,
        ].join("\n") + "\n";
      await writeFile(path.join(dir, "index.cjs"), cjsContent, "utf8");
    }
  }
  // Start the directory walking process from the base directory
  await walk(baseDir);
}

async function processFiles() {
  // Clean up existing files in the output directories
  if (fs.existsSync(JSONLD_DIR)) {
    await fs.promises.rm(JSONLD_DIR, { recursive: true, force: true });
  }
  if (fs.existsSync(TTL_JS_DIR)) {
    await fs.promises.rm(TTL_JS_DIR, { recursive: true, force: true });
  }

  // Recreate empty output directories
  await ensureDir(JSONLD_DIR);
  await ensureDir(TTL_JS_DIR);

  // Find all Turtle (.ttl) files in the source directory
  const ttlFiles = await findTtlFiles(SOURCE_DIR);

  // Process each Turtle file found in the source directory
  for (const ttlFile of ttlFiles) {
    // Get the file path relative to the source directory
    const relPath = path.relative(SOURCE_DIR, ttlFile);

    // Define output paths for JSON-LD, .mjs, and .cjs files
    const jsonldOut = path.join(JSONLD_DIR, relPath.replace(/\.ttl$/, ".json"));
    const ttlMjsOut = path.join(TTL_JS_DIR, relPath.replace(/\.ttl$/, ".mjs"));
    const ttlCjsOut = path.join(TTL_JS_DIR, relPath.replace(/\.ttl$/, ".cjs"));

    // Create necessary directories if they don't exist
    await ensureDir(path.dirname(jsonldOut));
    await ensureDir(path.dirname(ttlMjsOut));
    await ensureDir(path.dirname(ttlCjsOut));

    // Convert Turtle to JSON-LD format and write to output
    await convertTtlToJsonld(ttlFile, jsonldOut);

    // Export Turtle content as ES module (.mjs) and CommonJS module (.cjs)
    await exportTtlAsMjs(ttlFile, ttlMjsOut);
    await exportTtlAsCjs(ttlFile, ttlCjsOut);
  }

  // Generate index.mjs and index.cjs files for the JSON-LD directory
  await generateIndexFiles(JSONLD_DIR, ".json");

  // Generate index.mjs and index.cjs files for the Turtle JS directory
  await generateIndexFiles(TTL_JS_DIR, ".mjs");
}

// Start the processing of files and handle errors
processFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
