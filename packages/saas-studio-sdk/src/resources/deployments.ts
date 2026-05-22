import type { SaaSStudioClient } from '../client';

export class DeploymentsResource {
  constructor(private readonly client: SaaSStudioClient) {}

  list(query?: { organizationId?: string; appId?: string; environment?: string }) {
    return this.client.request('/v1/deployments', { method: 'GET', query });
  }

  create(input: Record<string, unknown>) {
    return this.client.request('/v1/deployments', { method: 'POST', body: JSON.stringify(input) });
  }

  get(deploymentId: string) {
    return this.client.request(`/v1/deployments/${deploymentId}`, { method: 'GET' });
  }

  rollback(deploymentId: string) {
    return this.client.request(`/v1/deployments/${deploymentId}/rollback`, { method: 'POST' });
  }
}
