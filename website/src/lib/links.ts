export const GITHUB_REPOSITORY = 'https://github.com/activitypods/shapes';
export const DOCS_URL = 'https://docs.activitypods.org';
export const DOCS_SHAPES_GUIDE = `${DOCS_URL}/guides/add-new-types-of-data-to-your-app/`;

export const shapePath = (id: string) => `/shapetrees/${id}`;
export const applicationPath = (slug: string) => `/applications/${slug}`;

export const githubShapeTreeFile = (id: string) =>
  `${GITHUB_REPOSITORY}/blob/master/packages/shape-definitions/source/shapetrees/${id}.ttl`;
