import { APPLICATIONS_CACHE_TTL, TRUSTED_APPS_URL } from "./config.ts";
import type { LangString } from "./shapes.ts";

export interface AccessNeed {
  /** Absolute shape tree URI, as declared in the application's access need. */
  shapeTree: string;
  /** Compacted access modes, e.g. `["acl:Read", "acl:Write"]`. */
  accessMode: string[];
  necessity: string | null;
}

export interface Application {
  /** The application's actor URI. */
  id: string;
  /** Slug used in the website URLs: the hostname of the application. */
  slug: string;
  name: LangString;
  description: LangString;
  thumbnail: string | null;
  url: string | null;
  /** Languages declared with `dc:language`. */
  languages: string[];
  needs: AccessNeed[];
}

export interface ApplicationsIndex {
  fetchedAt: string;
  source: string;
  applications: Application[];
}

type JsonLd = Record<string, any>;

const asArray = <T>(value: T | T[] | undefined | null): T[] =>
  value === undefined || value === null ? [] : Array.isArray(value) ? value : [value];

/** The id of a JSON-LD node reference, whether it is a plain IRI string or an object with an `id`. */
const nodeId = (value: any): string | null =>
  typeof value === "string" ? value : value && typeof value === "object" ? value.id ?? value["@id"] ?? null : null;

/**
 * Normalizes a JSON-LD text value into a language map. Plain strings (no language tag) are filed under
 * the application's first declared language, so that a monolingual application stays filterable.
 */
function langString(value: any, defaultLang: string): LangString {
  const result: LangString = {};
  for (const item of asArray(value)) {
    if (typeof item === "string") result[defaultLang] = item;
    else if (item && typeof item === "object" && typeof item["@value"] === "string") result[item["@language"] || defaultLang] = item["@value"];
  }
  return result;
}

async function fetchJsonLd(url: string): Promise<JsonLd> {
  const response = await fetch(url, { headers: { Accept: "application/ld+json" }, signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response.json();
}

async function fetchAccessNeed(url: string): Promise<AccessNeed | null> {
  const need = await fetchJsonLd(url);
  const shapeTree = nodeId(need["interop:registeredShapeTree"]);
  if (!shapeTree) return null;
  return {
    shapeTree,
    accessMode: asArray(need["interop:accessMode"]).map(nodeId).filter((m): m is string => !!m),
    necessity: nodeId(need["interop:accessNecessity"]),
  };
}

async function fetchAccessNeedGroup(url: string): Promise<AccessNeed[]> {
  const group = await fetchJsonLd(url);
  const needUris = asArray(group["interop:hasAccessNeed"]).map(nodeId).filter((u): u is string => !!u);
  const needs = await Promise.all(needUris.map(fetchAccessNeed));
  return needs.filter((n): n is AccessNeed => !!n);
}

async function readApplication(app: JsonLd): Promise<Application | null> {
  const id = nodeId(app);
  if (!id) return null;
  const languages = asArray<string>(app["dc:language"]);
  const defaultLang = languages[0] || "und";
  const url = app["oidc:client_uri"] ?? null;

  const groupUris = asArray(app["interop:hasAccessNeedGroup"]).map(nodeId).filter((u): u is string => !!u);
  const needs = (await Promise.all(groupUris.map(fetchAccessNeedGroup))).flat();

  return {
    id,
    slug: new URL(url || id).hostname,
    name: langString(app["interop:applicationName"] ?? app.name, defaultLang),
    description: langString(app["interop:applicationDescription"], defaultLang),
    thumbnail: app["interop:applicationThumbnail"] ?? app["oidc:logo_uri"] ?? null,
    url,
    languages,
    needs,
  };
}

/** Crawls the trusted applications and their access needs down to the shape trees they use. */
export async function crawlApplications(): Promise<ApplicationsIndex> {
  const container = await fetchJsonLd(TRUSTED_APPS_URL);
  const apps = await Promise.all(
    asArray(container["ldp:contains"]).map(async (app) => {
      try {
        return await readApplication(app);
      } catch (error) {
        // One unreachable application must not hide the others.
        console.error(`Could not read application ${nodeId(app)}: ${(error as Error).message}`);
        return null;
      }
    })
  );
  return {
    fetchedAt: new Date().toISOString(),
    source: TRUSTED_APPS_URL,
    applications: apps.filter((a): a is Application => !!a),
  };
}

let cache: ApplicationsIndex | null = null;
let refreshing: Promise<ApplicationsIndex> | null = null;

function refresh(): Promise<ApplicationsIndex> {
  refreshing ??= crawlApplications()
    .then((index) => {
      cache = index;
      return index;
    })
    .finally(() => {
      refreshing = null;
    });
  return refreshing;
}

/**
 * Returns the cached applications, refreshing them in the background once they are older than the TTL.
 * The first call (or a call after a failed crawl) waits for the crawl.
 */
export async function getApplications(): Promise<ApplicationsIndex> {
  if (!cache) return refresh();
  if (Date.now() - Date.parse(cache.fetchedAt) > APPLICATIONS_CACHE_TTL) {
    refresh().catch((error) => console.error(`Could not refresh applications: ${error.message}`));
  }
  return cache;
}
