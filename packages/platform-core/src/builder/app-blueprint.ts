export type AppBlueprintInput = {
  feature: string;
  domain?: string;
};

export type AppBlueprint = {
  feature: string;
  domain: string;
  slug: string;
  entities: string[];
  screens: string[];
  apis: string[];
  workflows: string[];
  roles: string[];
  auditEvents: string[];
  notifications: string[];
  files: Array<{ path: string; type: string; purpose: string }>;
};

export function createAppBlueprint(input: AppBlueprintInput): AppBlueprint {
  const feature = input.feature || 'Custom Feature';
  const domain = input.domain || 'enterprise';
  const slug = feature.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'feature';
  const entity = slug.replace(/-/g, '_');

  return {
    feature,
    domain,
    slug,
    entities: [entity, `${entity}_events`],
    screens: [`/${slug}`, `/${slug}/new`, `/${slug}/detail`, `/${slug}/settings`, `/${slug}/analytics`],
    apis: [`GET /v1/${slug}`, `POST /v1/${slug}`, `GET /v1/${slug}/:id`, `PATCH /v1/${slug}/:id`, `POST /v1/${slug}/:id/submit`],
    workflows: [`${slug}.created`, `${slug}.submitted`, `${slug}.approved`, `${slug}.rejected`],
    roles: [`${slug}.viewer`, `${slug}.editor`, `${slug}.approver`, `${slug}.admin`],
    auditEvents: [`${slug}.create`, `${slug}.update`, `${slug}.submit`, `${slug}.approve`, `${slug}.reject`],
    notifications: [`${slug}.assigned`, `${slug}.approved`, `${slug}.rejected`],
    files: [
      { path: `apps/web/src/app/${slug}/page.tsx`, type: 'page', purpose: 'List records' },
      { path: `apps/web/src/app/${slug}/new/page.tsx`, type: 'page', purpose: 'Create record' },
      { path: `apps/api/src/routes/generated/${slug}.ts`, type: 'api', purpose: 'CRUD routes' },
      { path: `packages/platform-core/src/generated/${entity}.schema.ts`, type: 'schema', purpose: 'Validation schema' },
      { path: `packages/platform-core/src/generated/${entity}.workflow.ts`, type: 'workflow', purpose: 'Workflow events' },
      { path: `packages/platform-core/src/generated/${entity}.policy.ts`, type: 'policy', purpose: 'RBAC permissions' }
    ]
  };
}
