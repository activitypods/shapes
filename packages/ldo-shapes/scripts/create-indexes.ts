// This script gererates index.ts files for all subdirectories and files with the specified extension
import fs from "node:fs";
import path from "node:path";
import { promisify } from "node:util";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const writeFile = promisify(fs.writeFile);
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TARGET_DIR = path.resolve(__dirname, "../objects-generated");

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
      if (entry === `index${ext}`) {
        fs.rmSync(fullPath);
        continue;
      }
      if (entryStat.isDirectory()) {
        // Recursively process subdirectories first
        await walk(fullPath);
        // Add an export statement for the subdirectory as a namespace
        // Replace any non-alphanumeric characters with underscores for valid JS identifiers
        const sanitizedEntry = entry.replace(/[^a-zA-Z0-9_]/g, "_");
        exports.push(
          `/** Nested shape-import */\nexport * as ${sanitizedEntry} from './${entry}/index.ts';\nexport * from './${entry}/index.ts';`
        );
      } else if (entry.endsWith(ext)) {
        // For files with the matching extension, add an export statement
        exports.push(`export * from './${entry}';`);
      }
    }

    // If we have any exports, write them to an index file in the current directory
    if (exports.length > 0) {
      await writeFile(
        path.join(dir, "index.ts"),
        exports.join("\n") + "\n",
        "utf8"
      );
    }
  }

  // Start the directory walking process from the base directory
  await walk(baseDir);
}

async function processFiles() {
  // Generate index.ts files for the ldo object directories.
  await generateIndexFiles(TARGET_DIR, ".ts");
}

processFiles().catch((err) => {
  console.error(err);
  process.exit(1);
});
