import fs from "node:fs";
import path from "node:path";
import { Parser } from "n3";
import { Octokit } from "@octokit/rest";
import { GITHUB_BASE_BRANCH, GITHUB_REPOSITORY, GITHUB_TOKEN, PUBLIC_URL, SOURCE_DIR } from "./config.ts";
import { DEFAULT_PREFIXES } from "./prefixes.ts";
import { collectPrefixes, parseShape } from "./shapes.ts";
import type { ShapeProperty } from "./shapes.ts";

/** What a property's value may be, as offered by the form; translated to SHACL by `propertyConstraint`. */
export const VALUE_KINDS = ["any", "text", "langText", "dateTime", "date", "uri", "integer", "decimal", "boolean", "iri", "resource"] as const;
export type ValueKind = (typeof VALUE_KINDS)[number];

export interface ProposedProperty {
  /** Compact (`as:name`) or full (`<https://…>`) IRI of the property. */
  path: string;
  name?: string;
  description?: string;
  kind: ValueKind;
  /** Class of the linked resource, only for `kind: "resource"`. */
  class?: string;
  required?: boolean;
  multiple?: boolean;
}

export interface ShapeProposal {
  /** Namespace prefix, also the folder of the files: `foaf`. */
  prefix: string;
  /** Namespace IRI, only needed when the prefix is not declared in the repository yet. */
  namespace?: string;
  /** Local name of the shape, PascalCase: `Project`. */
  name: string;
  targetClass: string;
  describesInstance?: string;
  label: { en: string; fr: string };
  definition: { en: string; fr: string };
  properties: ProposedProperty[];
  /** GitHub handle of the person proposing, mentioned in the pull request. */
  githubHandle: string;
  /** Free text added to the pull request. */
  motivation?: string;
}

export interface ProposalPreview {
  id: string;
  uri: string;
  shapeUri: string;
  files: { shapeTree: { path: string; content: string }; shape: { path: string; content: string } };
  targetClass: string | null;
  properties: ShapeProperty[];
}

export class ProposalError extends Error {
  field?: string;

  constructor(message: string, field?: string) {
    super(message);
    this.field = field;
  }
}

const PREFIX_RE = /^[a-z][a-z0-9-]*$/;
const NAME_RE = /^[A-Z][A-Za-z0-9]*$/;
const COMPACT_IRI_RE = /^([a-z][a-z0-9-]*):([A-Za-z_][\w.-]*)$/i;
const FULL_IRI_RE = /^<?(https?:\/\/[^\s<>"]+)>?$/;

const literal = (value: string) => `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;

/** Validates an IRI written by the user and returns it in Turtle syntax, recording the prefix it uses. */
function iri(value: string | undefined, field: string, known: Record<string, string>, used: Set<string>): string {
  const trimmed = (value ?? "").trim();
  if (!trimmed) throw new ProposalError("Missing IRI", field);
  const full = FULL_IRI_RE.exec(trimmed);
  if (full) return `<${full[1]}>`;
  const compact = COMPACT_IRI_RE.exec(trimmed);
  if (!compact) throw new ProposalError(`"${trimmed}" is neither a prefixed name (as:Event) nor a full IRI`, field);
  if (!known[compact[1]]) throw new ProposalError(`Unknown prefix "${compact[1]}:" — use a full IRI or declare the namespace`, field);
  used.add(compact[1]);
  return trimmed;
}

function propertyConstraint(property: ProposedProperty, index: number, known: Record<string, string>, used: Set<string>): string[] {
  used.add("xsd");
  switch (property.kind) {
    case "any":
      return [];
    case "text":
      return ["sh:datatype xsd:string"];
    case "langText":
      used.add("rdf");
      return ["sh:or ( [ sh:datatype xsd:string ] [ sh:datatype rdf:langString ] )"];
    case "dateTime":
      return ["sh:datatype xsd:dateTime"];
    case "date":
      return ["sh:datatype xsd:date"];
    case "uri":
      return ["sh:datatype xsd:anyURI"];
    case "integer":
      return ["sh:datatype xsd:integer"];
    case "decimal":
      return ["sh:datatype xsd:decimal"];
    case "boolean":
      return ["sh:datatype xsd:boolean"];
    case "iri":
      return ["sh:nodeKind sh:IRI"];
    case "resource":
      return [`sh:class ${iri(property.class, `properties.${index}.class`, known, used)}`];
    default:
      throw new ProposalError(`Unknown value kind "${property.kind}"`, `properties.${index}.kind`);
  }
}

function prefixDeclarations(used: Set<string>, known: Record<string, string>): string {
  return [...used]
    .sort()
    .map((prefix) => `PREFIX ${prefix}: <${known[prefix]}>`)
    .join("\n");
}

function requireText(value: string | undefined, field: string, max = 500): string {
  const trimmed = (value ?? "").trim();
  if (!trimmed) throw new ProposalError("Required", field);
  if (trimmed.length > max) throw new ProposalError(`At most ${max} characters`, field);
  return trimmed;
}

/** Validates a proposal and generates its two Turtle files, exactly as they would land in the repository. */
export function buildProposal(proposal: ShapeProposal): ProposalPreview {
  const prefix = requireText(proposal.prefix, "prefix", 30);
  if (!PREFIX_RE.test(prefix)) throw new ProposalError("Lowercase letters, digits and dashes only", "prefix");
  const name = requireText(proposal.name, "name", 60);
  if (!NAME_RE.test(name)) throw new ProposalError("PascalCase, letters and digits only (e.g. Project)", "name");

  const known = collectPrefixes();
  if (!known[prefix]) {
    const namespace = requireText(proposal.namespace, "namespace", 200);
    if (!/^https?:\/\/\S+[#/]$/.test(namespace)) throw new ProposalError("Must be an http(s) IRI ending with # or /", "namespace");
    known[prefix] = namespace;
  }
  if (Object.values(DEFAULT_PREFIXES).includes(known[prefix]) && !DEFAULT_PREFIXES[prefix]) {
    throw new ProposalError("This namespace is already declared under another prefix", "prefix");
  }

  const id = `${prefix}/${name}`;
  for (const dir of ["shapetrees", "shapes"]) {
    if (fs.existsSync(path.join(SOURCE_DIR, dir, prefix, `${name}.ttl`))) {
      throw new ProposalError("A shape with this name already exists: shapes are immutable, pick another name", "name");
    }
  }

  const label = { en: requireText(proposal.label?.en, "label.en", 100), fr: requireText(proposal.label?.fr, "label.fr", 100) };
  const definition = { en: requireText(proposal.definition?.en, "definition.en"), fr: requireText(proposal.definition?.fr, "definition.fr") };

  // ---- Shape tree ----
  const treeUsed = new Set(["st", "skos"]);
  const describesInstance = proposal.describesInstance?.trim() ? iri(proposal.describesInstance, "describesInstance", known, treeUsed) : null;
  const shapeTree = `PREFIX : <>
${prefixDeclarations(treeUsed, known)}

:${name}
  a st:ShapeTree ;
  st:expectsType st:Resource ;
  st:shape <../../shapes/${id}> ;
${describesInstance ? `  st:describesInstance ${describesInstance} ;\n` : ""}  skos:prefLabel ${literal(label.en)}@en, ${literal(label.fr)}@fr ;
  skos:definition ${literal(definition.en)}@en, ${literal(definition.fr)}@fr .
`;

  // ---- SHACL shape ----
  const shapeUsed = new Set(["sh"]);
  const targetClass = iri(proposal.targetClass, "targetClass", known, shapeUsed);
  const properties = (proposal.properties ?? []).map((property, index) => {
    const pathIri = iri(property.path, `properties.${index}.path`, known, shapeUsed);
    const lines = [`sh:path ${pathIri}`];
    if (property.name?.trim()) lines.push(`sh:name ${literal(property.name.trim())}`);
    if (property.description?.trim()) lines.push(`sh:description ${literal(property.description.trim())}`);
    lines.push(...propertyConstraint(property, index, known, shapeUsed));
    if (property.required) lines.push("sh:minCount 1");
    if (!property.multiple) lines.push("sh:maxCount 1");
    return `  sh:property [\n${lines.map((line) => `    ${line} ;`).join("\n")}\n  ]`;
  });
  const shape = `PREFIX : <>
${prefixDeclarations(shapeUsed, known)}

:${name}
  a sh:NodeShape ;
  sh:targetClass ${targetClass}${properties.length ? " ;\n" + properties.join(" ;\n") : ""} .
`;

  // The generated Turtle must parse: a typo in a user-provided IRI would otherwise break the repository.
  const shapeUri = `${PUBLIC_URL}/shapes/${id}`;
  try {
    new Parser({ baseIRI: `${PUBLIC_URL}/shapetrees/${id}` }).parse(shapeTree);
    new Parser({ baseIRI: shapeUri }).parse(shape);
  } catch (error) {
    throw new ProposalError(`Generated Turtle is invalid: ${(error as Error).message}`);
  }

  const parsed = parseShape(shape, shapeUri, known);
  return {
    id,
    uri: `${PUBLIC_URL}/shapetrees/${id}`,
    shapeUri,
    files: {
      shapeTree: { path: `packages/shape-definitions/source/shapetrees/${id}.ttl`, content: shapeTree },
      shape: { path: `packages/shape-definitions/source/shapes/${id}.ttl`, content: shape },
    },
    targetClass: parsed.targetClass,
    properties: parsed.properties,
  };
}

export const proposalsEnabled = () => Boolean(GITHUB_TOKEN);

/** Opens a draft pull request with the two generated files, on a dedicated branch of the shape repository. */
export async function submitProposal(proposal: ShapeProposal): Promise<{ url: string; number: number }> {
  if (!GITHUB_TOKEN) throw new ProposalError("Proposals are not enabled on this server");
  const handle = requireText(proposal.githubHandle, "githubHandle", 39).replace(/^@/, "");
  if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?$/.test(handle)) throw new ProposalError("Invalid GitHub username", "githubHandle");
  const motivation = (proposal.motivation ?? "").trim().slice(0, 2000);

  const preview = buildProposal(proposal);
  const [owner, repo] = GITHUB_REPOSITORY.split("/");
  const octokit = new Octokit({ auth: GITHUB_TOKEN });

  const { data: base } = await octokit.git.getRef({ owner, repo, ref: `heads/${GITHUB_BASE_BRANCH}` });
  const { data: baseCommit } = await octokit.git.getCommit({ owner, repo, commit_sha: base.object.sha });

  const { data: tree } = await octokit.git.createTree({
    owner,
    repo,
    base_tree: baseCommit.tree.sha,
    tree: Object.values(preview.files).map((file) => ({ path: file.path, mode: "100644" as const, type: "blob" as const, content: file.content })),
  });
  const { data: commit } = await octokit.git.createCommit({
    owner,
    repo,
    message: `Add ${preview.id} shape\n\nProposed by @${handle} from ${PUBLIC_URL}/propose`,
    tree: tree.sha,
    parents: [base.object.sha],
  });

  const branch = `propose/${preview.id.replace("/", "-")}-${commit.sha.slice(0, 7)}`;
  await octokit.git.createRef({ owner, repo, ref: `refs/heads/${branch}`, sha: commit.sha });

  const body = [
    `Shape proposed by @${handle} from [the shape repository website](${PUBLIC_URL}/propose).`,
    "",
    `- **Label**: ${proposal.label.en} / ${proposal.label.fr}`,
    `- **Definition**: ${proposal.definition.en} / ${proposal.definition.fr}`,
    `- **Target class**: \`${proposal.targetClass}\``,
    `- **Shape tree URI once merged**: \`${preview.uri}\``,
    ...(motivation ? ["", "### Motivation", "", motivation] : []),
    "",
    "---",
    "_Draft opened automatically. Maintainers: review the Turtle, then mark the pull request as ready and merge. Shapes are immutable once published._",
  ].join("\n");

  const { data: pull } = await octokit.pulls.create({
    owner,
    repo,
    title: `Add ${preview.id} shape`,
    head: branch,
    base: GITHUB_BASE_BRANCH,
    body,
    draft: true,
  });
  return { url: pull.html_url, number: pull.number };
}

// ---- Rate limiting: a handful of proposals per hour and per client, the GitHub token is shared ----

const WINDOW = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const attempts = new Map<string, number[]>();

export function checkRateLimit(client: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(client) ?? []).filter((time) => now - time < WINDOW);
  if (recent.length >= MAX_PER_WINDOW) return false;
  attempts.set(client, [...recent, now]);
  return true;
}
