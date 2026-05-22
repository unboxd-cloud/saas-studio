export type ProviderOperation = {
  providerConnectionId: string;
  capability: string;
  action: string;
  input: Record<string, unknown>;
};

export type ProviderOperationResult = {
  ok: boolean;
  output?: Record<string, unknown>;
  error?: string;
};

export interface ProviderAdapter {
  id: string;
  capabilities: string[];
  execute(operation: ProviderOperation): Promise<ProviderOperationResult>;
}

export class ProviderOrchestrator {
  private readonly adapters = new Map<string, ProviderAdapter>();

  register(adapter: ProviderAdapter) {
    this.adapters.set(adapter.id, adapter);
  }

  async execute(providerId: string, operation: ProviderOperation) {
    const adapter = this.adapters.get(providerId);
    if (!adapter) return { ok: false, error: `Provider adapter not found: ${providerId}` };
    return adapter.execute(operation);
  }
}
