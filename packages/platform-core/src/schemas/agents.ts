import { z } from 'zod';

export const AgentTypeSchema = z.enum(['builder','reviewer','deployment','governance','support','custom']);
export const AgentExecutionModeSchema = z.enum(['manual','event-driven','scheduled','interactive']);

export const AgentSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().min(1),
  name: z.string().min(1),
  type: AgentTypeSchema,
  modelProvider: z.string().min(1),
  model: z.string().min(1),
  mcpServerIds: z.array(z.string()).default([]),
  allowedToolIds: z.array(z.string()).default([]),
  executionMode: AgentExecutionModeSchema,
  enabled: z.boolean().default(true),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const MCPToolSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  inputSchema: z.record(z.unknown()).default({}),
  outputSchema: z.record(z.unknown()).default({}),
  riskLevel: z.enum(['low','medium','high','critical']).default('medium')
});

export type AgentType = z.infer<typeof AgentTypeSchema>;
export type AgentExecutionMode = z.infer<typeof AgentExecutionModeSchema>;
export type Agent = z.infer<typeof AgentSchema>;
export type MCPTool = z.infer<typeof MCPToolSchema>;
