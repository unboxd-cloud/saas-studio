import type { SaaSStudioClient } from '../client';

export class GraphResource {
  constructor(private readonly client: SaaSStudioClient) {}

  nodes(query?: { type?: string; search?: string; limit?: number }) {
    return this.client.request('/v1/graph/nodes', { method: 'GET', query });
  }

  edges(query?: { fromNodeId?: string; toNodeId?: string; type?: string }) {
    return this.client.request('/v1/graph/edges', { method: 'GET', query });
  }

  createNode(input: Record<string, unknown>) {
    return this.client.request('/v1/graph/nodes', { method: 'POST', body: JSON.stringify(input) });
  }

  createEdge(input: Record<string, unknown>) {
    return this.client.request('/v1/graph/edges', { method: 'POST', body: JSON.stringify(input) });
  }

  query(input: { query: string; variables?: Record<string, unknown> }) {
    return this.client.request('/v1/graph/query', { method: 'POST', body: JSON.stringify(input) });
  }
}
