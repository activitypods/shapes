/** Well-known prefixes, completed at runtime by the PREFIX declarations found in the shape files. */
export const DEFAULT_PREFIXES: Record<string, string> = {
  rdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
  rdfs: "http://www.w3.org/2000/01/rdf-schema#",
  xsd: "http://www.w3.org/2001/XMLSchema#",
  sh: "http://www.w3.org/ns/shacl#",
  st: "http://www.w3.org/ns/shapetrees#",
  skos: "http://www.w3.org/2004/02/skos/core#",
  as: "https://www.w3.org/ns/activitystreams#",
  vcard: "http://www.w3.org/2006/vcard/ns#",
  apods: "http://activitypods.org/ns/core#",
  interop: "http://www.w3.org/ns/solid/interop#",
  acl: "http://www.w3.org/ns/auth/acl#",
};

/** Extracts `PREFIX x: <...>` and `@prefix x: <...> .` declarations from a Turtle document. */
export function extractPrefixes(turtle: string): Record<string, string> {
  const prefixes: Record<string, string> = {};
  const re = /^\s*(?:@prefix|PREFIX)\s+([A-Za-z0-9_-]*):\s*<([^>]*)>/gim;
  let match: RegExpExecArray | null;
  while ((match = re.exec(turtle))) {
    // The empty prefix (`PREFIX : <>`) is document-local: it never helps compacting anything.
    if (match[1]) prefixes[match[1]] = match[2];
  }
  return prefixes;
}

/** Turns a full IRI into `prefix:local` when one of the prefixes matches, otherwise returns the IRI. */
export function compactIri(iri: string, prefixes: Record<string, string>): string {
  let best: [string, string] | undefined;
  for (const [prefix, ns] of Object.entries(prefixes)) {
    if (iri.startsWith(ns) && (!best || ns.length > best[1].length)) best = [prefix, ns];
  }
  return best ? `${best[0]}:${iri.slice(best[1].length)}` : iri;
}
