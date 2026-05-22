export type FeatureFlowPlan = {
  feature: string;
  domain: string;
  entities: Array<{ name: string; fields: string[] }>;
  screens: string[];
  apis: string[];
  workflows: string[];
  roles: string[];
  auditEvents: string[];
  notifications: string[];
  deploymentTargets: string[];
};

export function planFeatureFlow(input: { feature: string; domain?: string; dataSourceName?: string }): FeatureFlowPlan {
  const feature = input.feature.trim() || 'Custom Feature';
  const slug = feature.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'feature';
  const entity = slug.replace(/-/g, '_');

  return {
    feature,
    domain: input.domain || 'enterprise-saas',
    entities: [
      { name: entity, fields: ['id', 'tenantId', 'title', 'status', 'ownerId', 'metadata', 'createdAt', 'updatedAt'] },
      { name: `${entity}_events`, fields: ['id', 'tenantId', `${entity}Id`, 'actorId', 'action', 'before', 'after', 'createdAt'] }
    ],
    screens: [`/${slug}`, `/${slug}/new`, `/${slug}/[id]`, `/${slug}/[id]/edit`, `/${slug}/analytics`],
    apis: [`GET /v1/${slug}`, `POST /v1/${slug}`, `GET /v1/${slug}/:id`, `PATCH /v1/${slug}/:id`, `POST /v1/${slug}/:id/submit`],
    workflows: [`${slug}.created`, `${slug}.submitted`, `${slug}.approved`, `${slug}.rejected`],
    roles: [`${slug}.viewer`, `${slug}.editor`, `${slug}.approver`, `${slug}.admin`],
    auditEvents: [`${slug}.create`, `${slug}.update`, `${slug}.submit`, `${slug}.approve`, `${slug}.reject`],
    notifications: [`${slug}.assigned`, `${slug}.approved`, `${slug}.rejected`],
    deploymentTargets: ['nextjs-app-router', 'appwrite-database', 'appwrite-functions', 'appwrite-sites']
  };
}
