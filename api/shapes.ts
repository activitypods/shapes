import fs from "node:fs";
import path from "node:path";
import { Parser, Store, DataFactory } from "n3";
import type { Quad_Subject, Term } from "n3";
import { PUBLIC_URL, SOURCE_DIR } from "./config.ts";
import { DEFAULT_PREFIXES, compactIri, extractPrefixes } from "./prefixes.ts";

const { namedNode } = DataFactory;

const RDF_TYPE = namedNode(DEFAULT_PREFIXES.rdf + "type");
const st = (local: string) => namedNode(DEFAULT_PREFIXES.st + local);
const sh = (local: string) => namedNode(DEFAULT_PREFIXES.sh + local);
const skos = (local: string) => namedNode(DEFAULT_PREFIXES.skos + local);
const rdfs = (local: string) => namedNode(DEFAULT_PREFIXES.rdfs + local);

/** A language-tagged text: `{ en: "Events", fr: "Évènements" }`. Untagged literals go under `und`. */
export type LangString = Record<string, string>;

/** One SHACL constraint on a value: at most one of these is set per alternative. */
export interface ValueConstraint {
  datatype?: string;
  class?: string;
  nodeKind?: string;
  hasValue?: string;
}

export interface ShapeProperty {
  path: string;
  name?: string;
  description?: string;
  minCount?: number;
  maxCount?: number;
  /** Direct constraint on the value, if any. */
  value?: ValueConstraint;
  /** Alternatives declared with `sh:or`. */
  or?: ValueConstraint[];
}

export interface ShapeIndexEntry {
  /** Path relative to the shape trees root, e.g. `as/Event` or `File`. */
  id: string;
  namespace: string | null;
  name: string;
  /** Absolute shape tree URI, the one to put in an application's `accessNeeds`. */
  uri: string;
  /** Absolute SHACL shape URI, absent for non-RDF resources such as files. */
  shapeUri: string | null;
  expectsType: string | null;
  describesInstance: string | null;
  label: LangString;
  definition: LangString;
  targetClass: string | null;
  properties: ShapeProperty[];
  turtle: { shapeTree: string; shape: string | null };
}

function walkTurtleFiles(dir: string, base = dir): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkTurtleFiles(full, base);
    return entry.name.endsWith(".ttl") ? [path.relative(base, full)] : [];
  });
}

function parseTurtle(turtle: string, baseIRI: string): Store {
  const store = new Store();
  store.addQuads(new Parser({ baseIRI }).parse(turtle));
  return store;
}

function firstObject(store: Store, subject: Quad_Subject, predicate: Term): Term | undefined {
  return store.getObjects(subject, predicate as any, null)[0];
}

function langString(store: Store, subject: Quad_Subject, predicate: Term): LangString {
  const result: LangString = {};
  for (const object of store.getObjects(subject, predicate as any, null)) {
    if (object.termType === "Literal") result[object.language || "und"] = object.value;
  }
  return result;
}

function literalNumber(store: Store, subject: Quad_Subject, predicate: Term): number | undefined {
  const object = firstObject(store, subject, predicate);
  return object?.termType === "Literal" ? Number(object.value) : undefined;
}

function valueConstraint(store: Store, node: Quad_Subject, prefixes: Record<string, string>): ValueConstraint | undefined {
  const datatype = firstObject(store, node, sh("datatype"));
  const cls = firstObject(store, node, sh("class"));
  const nodeKind = firstObject(store, node, sh("nodeKind"));
  const hasValue = firstObject(store, node, sh("hasValue"));
  if (!datatype && !cls && !nodeKind && !hasValue) return undefined;
  return {
    ...(datatype && { datatype: compactIri(datatype.value, prefixes) }),
    ...(cls && { class: compactIri(cls.value, prefixes) }),
    ...(nodeKind && { nodeKind: compactIri(nodeKind.value, prefixes) }),
    ...(hasValue && { hasValue: compactIri(hasValue.value, prefixes) }),
  };
}

/** Collects the property shapes of a node shape, following `sh:node` references inside the same document. */
function collectProperties(store: Store, nodeShape: Quad_Subject, prefixes: Record<string, string>, seen = new Set<string>()): ShapeProperty[] {
  if (seen.has(nodeShape.value)) return [];
  seen.add(nodeShape.value);

  const lists = store.extractLists();
  const properties: ShapeProperty[] = [];

  for (const propertyNode of store.getObjects(nodeShape, sh("property"), null)) {
    const node = propertyNode as Quad_Subject;
    const pathTerm = firstObject(store, node, sh("path"));
    if (!pathTerm) continue;
    const name = firstObject(store, node, sh("name"));
    const description = firstObject(store, node, sh("description"));
    const orHead = firstObject(store, node, sh("or"));
    const or = orHead && lists[orHead.value]
      ? lists[orHead.value].map((alt) => valueConstraint(store, alt as Quad_Subject, prefixes)).filter((c): c is ValueConstraint => !!c)
      : undefined;
    const value = valueConstraint(store, node, prefixes);
    const minCount = literalNumber(store, node, sh("minCount"));
    const maxCount = literalNumber(store, node, sh("maxCount"));
    properties.push({
      path: compactIri(pathTerm.value, prefixes),
      ...(name && { name: name.value }),
      ...(description && { description: description.value }),
      ...(minCount !== undefined && { minCount }),
      ...(maxCount !== undefined && { maxCount }),
      ...(value && { value }),
      ...(or && or.length && { or }),
    });
  }

  for (const referenced of store.getObjects(nodeShape, sh("node"), null)) {
    properties.push(...collectProperties(store, referenced as Quad_Subject, prefixes, seen));
  }

  return properties;
}

/** Parses a SHACL document and describes its main node shape (the one named after the document, else the first). */
export function parseShape(turtle: string, shapeUri: string, prefixes: Record<string, string> = DEFAULT_PREFIXES) {
  const store = parseTurtle(turtle, shapeUri);
  const allPrefixes = { ...prefixes, ...extractPrefixes(turtle) };

  const nodeShapes = store.getSubjects(RDF_TYPE, sh("NodeShape"), null);
  const expectedName = shapeUri.slice(shapeUri.lastIndexOf("/") + 1);
  const main = nodeShapes.find((s) => s.value.endsWith(expectedName)) ?? nodeShapes[0];
  if (!main) return { targetClass: null, properties: [] as ShapeProperty[] };

  const targetClass = firstObject(store, main, sh("targetClass"));
  return {
    targetClass: targetClass ? compactIri(targetClass.value, allPrefixes) : null,
    properties: collectProperties(store, main, allPrefixes),
  };
}

export function readShape(shapeUri: string, prefixes: Record<string, string>) {
  const relative = shapeUri.slice(`${PUBLIC_URL}/`.length);
  const file = path.join(SOURCE_DIR, `${relative}.ttl`);
  if (!relative || !fs.existsSync(file)) return { turtle: null, targetClass: null, properties: [] as ShapeProperty[] };

  const turtle = fs.readFileSync(file, "utf8");
  return { turtle, ...parseShape(turtle, shapeUri, prefixes) };
}

function readShapeTree(relativePath: string): ShapeIndexEntry {
  const id = relativePath.replace(/\.ttl$/, "").split(path.sep).join("/");
  const uri = `${PUBLIC_URL}/shapetrees/${id}`;
  const turtle = fs.readFileSync(path.join(SOURCE_DIR, "shapetrees", relativePath), "utf8");
  const store = parseTurtle(turtle, uri);
  const prefixes = { ...DEFAULT_PREFIXES, ...extractPrefixes(turtle) };

  const subject = store.getSubjects(RDF_TYPE, st("ShapeTree"), null)[0];
  if (!subject) throw new Error(`No st:ShapeTree found in shapetrees/${relativePath}`);

  const shapeTerm = firstObject(store, subject, st("shape"));
  const expectsType = firstObject(store, subject, st("expectsType"));
  const describesInstance = firstObject(store, subject, st("describesInstance"));
  const shape = shapeTerm ? readShape(shapeTerm.value, prefixes) : { turtle: null, targetClass: null, properties: [] };

  const slash = id.lastIndexOf("/");
  return {
    id,
    namespace: slash === -1 ? null : id.slice(0, slash),
    name: slash === -1 ? id : id.slice(slash + 1),
    uri,
    shapeUri: shapeTerm?.value ?? null,
    expectsType: expectsType ? compactIri(expectsType.value, prefixes) : null,
    describesInstance: describesInstance ? compactIri(describesInstance.value, prefixes) : null,
    label: langString(store, subject, skos("prefLabel")),
    definition: { ...langString(store, subject, rdfs("comment")), ...langString(store, subject, skos("definition")) },
    targetClass: shape.targetClass,
    properties: shape.properties,
    turtle: { shapeTree: turtle, shape: shape.turtle },
  };
}

/** Every prefix declared in the repository's Turtle files, on top of the well-known ones. */
export function collectPrefixes(): Record<string, string> {
  const prefixes = { ...DEFAULT_PREFIXES };
  for (const dir of ["shapetrees", "shapes"]) {
    for (const relative of walkTurtleFiles(path.join(SOURCE_DIR, dir))) {
      Object.assign(prefixes, extractPrefixes(fs.readFileSync(path.join(SOURCE_DIR, dir, relative), "utf8")));
    }
  }
  return prefixes;
}

/** Reads every shape tree of the repository, with its SHACL shape, into a JSON-friendly index. */
export function buildShapesIndex(): ShapeIndexEntry[] {
  return walkTurtleFiles(path.join(SOURCE_DIR, "shapetrees"))
    .sort()
    .map(readShapeTree);
}
