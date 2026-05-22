export type PromptToAppInput = {
  prompt: string;
  organizationId: string;
  workspaceId: string;
  stack?: Record<string, unknown>;
  dataSourceIds?: string[];
};

export function generateSaaSBlueprint(input: PromptToAppInput) {
  return {
    id: crypto.randomUUID(),
    organizationId: input.organizationId,
    workspaceId: input.workspaceId,
    prompt: input.prompt,
    stack: input.stack ?? {},
    dataSourceIds: input.dataSourceIds ?? [],
    modules: [
      'auth',
      'tenants',
      'rbac',
      'providers',
      'workflows',
      'agents',
      'deployments',
      'audit',
      'scorecards',
      'mcp'
    ],
    generatedAt: new Date().toISOString()
  };
}
