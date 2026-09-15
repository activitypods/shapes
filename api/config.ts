import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";

// Loaded here, not in index.ts: ES module imports are hoisted, so every module reading process.env
// at import time would otherwise run before dotenv. `.env.local` (gitignored) holds secrets such as
// GITHUB_TOKEN and overrides the committed `.env`.
dotenv.config({ path: [".env.local", ".env"] });

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const ROOT_DIR = path.resolve(__dirname, "..");
export const SOURCE_DIR = path.join(ROOT_DIR, "packages/shape-definitions/source");
export const WEBSITE_DIST_DIR = path.join(ROOT_DIR, "website/dist");

/** Public base URL of this shape repository, used to build absolute shape (tree) URIs. */
export const PUBLIC_URL = (process.env.PUBLIC_URL || "https://shapes.activitypods.org").replace(/\/+$/, "");

/** LDP container listing the applications trusted by ActivityPods. */
export const TRUSTED_APPS_URL = process.env.TRUSTED_APPS_URL || "https://activitypods.org/data/trusted-apps";

/** How long (ms) the crawled applications are served before being refreshed in the background. */
export const APPLICATIONS_CACHE_TTL = Number(process.env.APPLICATIONS_CACHE_TTL || 60 * 60 * 1000);

/** Fine-grained GitHub token (contents + pull requests on the shape repository) used to open proposal pull requests. */
export const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";
export const GITHUB_REPOSITORY = process.env.GITHUB_REPOSITORY || "activitypods/shapes";
export const GITHUB_BASE_BRANCH = process.env.GITHUB_BASE_BRANCH || "master";
