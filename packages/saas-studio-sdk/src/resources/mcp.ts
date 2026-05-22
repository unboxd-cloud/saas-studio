import type { SaaSStudioClient } from '../client';

export class MCPResource {
  constructor(private readonly client: SaaSStudioClient) {}
  servers() { return this.client.request('/v1/mcp/servers', { method: 'GET' }); }
  createServer(input: Record<string, unknown>) { return this.client.request('/v1/mcp/servers', { method: 'POST', body: JSON.stringify(input) }); }
  tools() { return this.client.request('/v1/mcp/tools', { method: 'GET' }); }
  callTool(toolId: string, input: Record<string, unknown>) { return this.client.request(`/v1/mcp/tools/${toolId}/calls`, { method: 'POST', body: JSON.stringify(input) }); }
}
