import type { SaaSStudioClient } from '../client';

export class TemplatesResource {
  constructor(private readonly client: SaaSStudioClient) {}
  list(query?: { type?: string; search?: string }) { return this.client.request('/v1/templates', { method: 'GET', query }); }
  install(templateId: string, input: Record<string, unknown>) { return this.client.request(`/v1/templates/${templateId}/install`, { method: 'POST', body: JSON.stringify(input) }); }
}
