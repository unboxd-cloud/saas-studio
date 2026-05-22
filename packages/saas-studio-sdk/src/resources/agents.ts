import type { SaaSStudioClient } from '../client';

export class AgentsResource {
  constructor(private readonly client: SaaSStudioClient) {}
  list(query?: { organizationId?: string }) { return this.client.request('/v1/agents', { method: 'GET', query }); }
  create(input: Record<string, unknown>) { return this.client.request('/v1/agents', { method: 'POST', body: JSON.stringify(input) }); }
  run(agentId: string, input: Record<string, unknown>) { return this.client.request(`/v1/agents/${agentId}/runs`, { method: 'POST', body: JSON.stringify(input) }); }
}
