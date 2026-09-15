import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

// Mirrors the JSON returned by the Express server (see /api/shapes.ts and /api/applications.ts).

export type LangString = Record<string, string>;

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
  value?: ValueConstraint;
  or?: ValueConstraint[];
}

export interface Shape {
  id: string;
  namespace: string | null;
  name: string;
  uri: string;
  shapeUri: string | null;
  expectsType: string | null;
  describesInstance: string | null;
  label: LangString;
  definition: LangString;
  targetClass: string | null;
  properties: ShapeProperty[];
  turtle: { shapeTree: string; shape: string | null };
}

export interface AccessNeed {
  shapeTree: string;
  accessMode: string[];
  necessity: string | null;
}

export interface Application {
  id: string;
  slug: string;
  name: LangString;
  description: LangString;
  thumbnail: string | null;
  url: string | null;
  languages: string[];
  needs: AccessNeed[];
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response.json();
}

export const useShapes = () =>
  useQuery({
    queryKey: ['shapes'],
    queryFn: () => fetchJson<{ publicUrl: string; prefixes: Record<string, string>; shapes: Shape[] }>('/api/shapes'),
    staleTime: Infinity
  });

/** All trusted applications, whatever their language. Prefer `useVisibleApplications` for display. */
export const useAllApplications = () =>
  useQuery({
    queryKey: ['applications'],
    queryFn: () => fetchJson<{ fetchedAt: string; applications: Application[] }>('/api/applications'),
    staleTime: 5 * 60 * 1000
  });

/** Applications available in the current language (an application without `dc:language` is shown everywhere). */
export function useVisibleApplications() {
  const { i18n } = useTranslation();
  const query = useAllApplications();
  const all = query.data?.applications ?? [];
  const visible = all.filter((app) => app.languages.length === 0 || app.languages.includes(i18n.language));
  return { ...query, all, visible, hidden: all.length - visible.length };
}

export const usersOfShape = (shape: Shape, applications: Application[]) =>
  applications
    .map((app) => ({ app, need: app.needs.find((need) => need.shapeTree === shape.uri) }))
    .filter((entry): entry is { app: Application; need: AccessNeed } => !!entry.need);

// ---- Shape proposals (see /api/proposals.ts) ----

export const VALUE_KINDS = ['any', 'text', 'langText', 'dateTime', 'date', 'uri', 'integer', 'decimal', 'boolean', 'iri', 'resource'] as const;
export type ValueKind = (typeof VALUE_KINDS)[number];

export interface ProposedProperty {
  path: string;
  name?: string;
  description?: string;
  kind: ValueKind;
  class?: string;
  required?: boolean;
  multiple?: boolean;
}

export interface ShapeProposal {
  prefix: string;
  namespace?: string;
  name: string;
  targetClass: string;
  describesInstance?: string;
  label: { en: string; fr: string };
  definition: { en: string; fr: string };
  properties: ProposedProperty[];
  githubHandle: string;
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

export class ApiError extends Error {
  status: number;
  field?: string;

  constructor(status: number, message: string, field?: string) {
    super(message);
    this.status = status;
    this.field = field;
  }
}

async function postJson<T>(url: string, body: unknown): Promise<T> {
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new ApiError(response.status, data.error ?? response.statusText, data.field);
  return data;
}

export const useProposalsConfig = () =>
  useQuery({ queryKey: ['proposals-config'], queryFn: () => fetchJson<{ enabled: boolean }>('/api/proposals'), staleTime: Infinity });

export const previewProposal = (proposal: ShapeProposal) => postJson<ProposalPreview>('/api/proposals/preview', proposal);
export const submitProposal = (proposal: ShapeProposal) => postJson<{ url: string; number: number }>('/api/proposals', proposal);
