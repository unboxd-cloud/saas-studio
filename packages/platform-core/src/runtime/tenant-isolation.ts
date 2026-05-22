export type TenantIsolationMode = 'shared-database' | 'schema-per-tenant' | 'database-per-tenant' | 'project-per-tenant';

export type ResolveTenantContextInput = {
  tenantId: string;
  isolation: TenantIsolationMode;
  appId: string;
  organizationId: string;
};

export function resolveTenantContext(input: ResolveTenantContextInput) {
  return {
    tenantId: input.tenantId,
    partitionKey: `${input.organizationId}:${input.appId}:${input.tenantId}`,
    databaseScope: input.isolation,
    headers: {
      'x-tenant-id': input.tenantId,
      'x-tenant-isolation': input.isolation
    }
  };
}
