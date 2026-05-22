export function createAppwriteProvisionPlan(blueprint: { slug: string; entities: string[]; roles: string[] }) {
  const databaseId = `${blueprint.slug}-db`;
  return {
    provider: 'appwrite',
    databaseId,
    collections: (blueprint.entities || []).map((entity) => ({
      collectionId: entity,
      name: entity,
      attributes: ['tenantId:string:required', 'title:string:required', 'status:string', 'metadata:string', 'createdAt:datetime', 'updatedAt:datetime'],
      indexes: ['tenantId', 'status', 'createdAt'],
      permissions: blueprint.roles || []
    })),
    functions: [`${blueprint.slug}-workflow-handler`],
    sites: [`${blueprint.slug}-site`]
  };
}
