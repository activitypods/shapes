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
 * Shared interface for processing directory entries and collecting exports
 */
interface DirectoryEntry {
  name: string;
  fullPath: string;
  isDirectory: boolean;
  exportName?: string;
  namespace?: string;
}

/**
 * Shared function to collect directory entries and export information
 */
async function collectDirectoryEntries(
  dir: string,
  ext: string
): Promise<DirectoryEntry[]> {
  const entries = await readdir(dir);
  const processedEntries: DirectoryEntry[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const entryStat = await stat(fullPath);

    if (entryStat.isDirectory()) {
      const namespace = entry.replace(/[^a-zA-Z0-9_]/g, "_");
      processedEntries.push({
        name: entry,
        fullPath,
        isDirectory: true,
        namespace,
      });
    } else if (entry.endsWith(ext)) {
      const exportName = path
        .basename(entry, ext)
        .replace(/[^a-zA-Z0-9_]/g, "_");
      processedEntries.push({
        name: entry,
        fullPath,
        isDirectory: false,
        exportName,
      });
    }
  }

  return processedEntries;
}

/**
 * Recursively generates index.mjs files with ES module export statements for all subdirectories and files
 * with the specified extension in the base directory.
 *
 * The function walks through the directory tree and creates index files that:
 * - Export subdirectories as namespaces
 * - Export default exports from files with the specified extension (except for shapetrees)
 * - For shapetrees directories: only export star exports, no default exports to avoid naming conflicts
 *
 * All export names are sanitized to ensure they are valid JavaScript identifiers.
 *
 * @param baseDir - The base directory to start generating index files from
 * @param ext - The file extension to look for (e.g., '.json', '.mjs')
 */
async function generateMjsIndexFiles(baseDir: string, ext: string) {
  async function walk(dir: string) {
    const entries = await collectDirectoryEntries(dir, ext);
    const exports: string[] = [];
    const exportsStar: string[] = [];

    // Check if we're directly in the shapetrees root directory (not subdirectories)
    const isInShapetreesRoot = path.basename(dir) === "shapetrees";

    // Process directories first (recursively)
    for (const entry of entries.filter((e) => e.isDirectory)) {
      await walk(entry.fullPath);
      exports.push(
        `export * as ${entry.namespace} from './${entry.name}/index.mjs';`
      );
      // Skip star exports for shapetrees directory to avoid naming conflicts with shapes
      if (entry.name !== "shapetrees") {
        exportsStar.push(`export * from './${entry.name}/index.mjs';`);
      }
    }

    // Process files
    for (const entry of entries.filter((e) => !e.isDirectory)) {
      // Only skip default exports for files directly in the shapetrees root directory
      if (!isInShapetreesRoot) {
        exports.push(
          `export { default as ${entry.exportName} } from './${entry.name}';`
        );
      }
      exportsStar.push(`export * from './${entry.name}';`);
    }

    // Write ES module index if we have exports
    if (exports.length > 0) {
      const content = exports.concat(exportsStar).join("\n") + "\n";
      await writeFile(path.join(dir, "index.mjs"), content, "utf8");
    }
  }

  await walk(baseDir);
}

/**
 * Recursively generates index.cjs files with CommonJS export statements for all subdirectories and files
 * with the specified extension in the base directory.
 *
 * The function walks through the directory tree and creates index files that:
 * - Export subdirectories as namespaces
 * - Export default exports from files with the specified extension (except for shapetrees)
 * - For shapetrees directories: only export star exports, no default exports to avoid naming conflicts
 *
 * All export names are sanitized to ensure they are valid JavaScript identifiers.
 *
 * @param baseDir - The base directory to start generating index files from
 * @param ext - The file extension to look for (e.g., '.json', '.mjs')
 */
async function generateCjsIndexFiles(baseDir: string, ext: string) {
  async function walk(dir: string) {
    const entries = await collectDirectoryEntries(dir, ext);
    const cjsRequires: string[] = [];
    const cjsExports: string[] = [];

    // Check if we're directly in the shapetrees root directory (not subdirectories)
    const isInShapetreesRoot = path.basename(dir) === "shapetrees";

    // Process directories first (recursively)
    for (const entry of entries.filter((e) => e.isDirectory)) {
      await walk(entry.fullPath);
      cjsRequires.push(
        `const ${entry.namespace} = require('./${entry.name}/index.cjs');`
      );
      // Skip star exports for shapetrees directory to avoid naming conflicts with shapes
      if (entry.name !== "shapetrees") {
        cjsExports.push(`...${entry.namespace}, ${entry.namespace}`);
      } else {
        // For shapetrees directory, only add the namespace export
        cjsExports.push(`${entry.namespace}`);
      }
    }

    // Process files
    for (const entry of entries.filter((e) => !e.isDirectory)) {
      cjsRequires.push(
        `const ${entry.exportName} = require('./${entry.name}');`
      );
      // Only skip named exports for files directly in the shapetrees root directory
      if (!isInShapetreesRoot) {
        cjsExports.push(`...${entry.exportName}, ${entry.exportName}`);
      } else {
        // For shapetrees root files, only add the spread without the named export
        cjsExports.push(`...${entry.exportName}`);
      }
    }

    // Write CommonJS index if we have exports
    if (cjsRequires.length > 0) {
      const cjsContent =
        [...cjsRequires, `module.exports = { ${cjsExports.join(", ")} };`].join(
          "\n"
        ) + "\n";
      await writeFile(path.join(dir, "index.cjs"), cjsContent, "utf8");
    }
  }

  await walk(baseDir);
}

/**
 * Recursively generates both index.mjs and index.cjs files with export statements for all subdirectories and files
 * with the specified extension in the base directory.
 *
 * @param baseDir - The base directory to start generating index files from
 * @param ext - The file extension to look for (e.g., '.json', '.mjs')
 */
async function generateIndexFiles(baseDir: string, ext: string) {
  await generateMjsIndexFiles(baseDir, ext);
  await generateCjsIndexFiles(baseDir, ext);
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

  // Generate only index.mjs files for the Turtle JS directory (since it contains .mjs files)
  await generateMjsIndexFiles(TTL_JS_DIR, ".mjs");
  await generateCjsIndexFiles(TTL_JS_DIR, ".cjs");

  // Log completion message
  console.log("Shape definitions built successfully.");
  console.log(`JSON-LD files generated in: ${JSONLD_DIR}`);
  console.log(`Turtle JS files generated in: ${TTL_JS_DIR}`);
}

// Start the processing of files and handle errors
processFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
