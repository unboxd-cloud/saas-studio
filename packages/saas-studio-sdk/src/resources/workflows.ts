import type { SaaSStudioClient } from '../client';

export class WorkflowsResource {
  constructor(private readonly client: SaaSStudioClient) {}

  list(query?: { organizationId?: string; appId?: string; tenantId?: string }) {
    return this.client.request('/v1/workflows', { method: 'GET', query });
  }

  create(input: Record<string, unknown>) {
    return this.client.request('/v1/workflows', { method: 'POST', body: JSON.stringify(input) });
  }

  get(workflowId: string) {
    return this.client.request(`/v1/workflows/${workflowId}`, { method: 'GET' });
  }

  run(workflowId: string, input?: Record<string, unknown>) {
    return this.client.request(`/v1/workflows/${workflowId}/runs`, { method: 'POST', body: JSON.stringify(input ?? {}) });
  }
}
