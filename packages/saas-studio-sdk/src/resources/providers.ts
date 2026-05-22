import type { SaaSStudioClient } from '../client';

export type ProviderCategory = 'auth' | 'database' | 'storage' | 'functions' | 'deployment' | 'ai' | 'messaging' | 'observability' | 'source-control' | 'billing';

export type ConnectProviderInput = {
  organizationId: string;
  workspaceId?: string;
  category: ProviderCategory;
  provider: string;
  name: string;
  endpoint?: string;
  scopes?: string[];
  credentials?: Record<string, string>;
  metadata?: Record<string, unknown>;
};

export class ProvidersResource {
  constructor(private readonly client: SaaSStudioClient) {}

  list(query?: { organizationId?: string; workspaceId?: string; category?: ProviderCategory }) {
    return this.client.request('/v1/providers', { method: 'GET', query });
  }

  connect(input: ConnectProviderInput) {
    return this.client.request('/v1/providers', { method: 'POST', body: JSON.stringify(input) });
  }

  get(providerConnectionId: string) {
    return this.client.request(`/v1/providers/${providerConnectionId}`, { method: 'GET' });
  }

  disconnect(providerConnectionId: string) {
    return this.client.request(`/v1/providers/${providerConnectionId}`, { method: 'DELETE' });
  }

  test(providerConnectionId: string) {
    return this.client.request(`/v1/providers/${providerConnectionId}/test`, { method: 'POST' });
  }
}
