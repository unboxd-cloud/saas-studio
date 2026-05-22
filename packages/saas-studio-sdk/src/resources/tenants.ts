import type { SaaSStudioClient } from '../client';

export class TenantsResource {
  constructor(private readonly client: SaaSStudioClient) {}
  list(query?: { organizationId?: string; appId?: string }) { return this.client.request('/v1/tenants', { method: 'GET', query }); }
  create(input: Record<string, unknown>) { return this.client.request('/v1/tenants', { method: 'POST', body: JSON.stringify(input) }); }
  provision(tenantId: string) { return this.client.request(`/v1/tenants/${tenantId}/provision`, { method: 'POST' }); }
}
