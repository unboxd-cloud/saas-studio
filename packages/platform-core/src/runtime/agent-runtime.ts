export type AgentRunInput = { agentId: string; prompt: string; tools?: string[]; context?: Record<string, unknown> };
export type AgentRunResult = { agentId: string; status: 'completed' | 'failed'; output?: string; toolCalls?: unknown[]; error?: string };

export async function runAgent(input: AgentRunInput): Promise<AgentRunResult> {
  return { agentId: input.agentId, status: 'completed', output: `Planned: ${input.prompt}`, toolCalls: [] };
}
