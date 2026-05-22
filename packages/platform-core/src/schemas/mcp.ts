import { z } from 'zod';

export const MCPServerTypeSchema = z.enum(['remote_http','local_command','stdio','sse']);
export const MCPServerStatusSchema = z.enum(['enabled','disabled','error','pending']);
export const MCPToolRiskSchema = z.enum(['low','medium','high','critical']);

export const MCPServerSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  projectId: z.string().optional(),
  appId: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  type: MCPServerTypeSchema,
  status: MCPServerStatusSchema.default('pending'),
  url: z.string().url().optional(),
  command: z.string().optional(),
  args: z.array(z.string()).default([]),
  envSecretRefs: z.record(z.string()).default({}),
  providerConnectionId: z.string().optional(),
  metadata: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const MCPToolSchema = z.object({
  id: z.string().min(1),
  serverId: z.string().min(1),
  organizationId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  inputSchema: z.record(z.unknown()).default({}),
  outputSchema: z.record(z.unknown()).default({}),
  risk: MCPToolRiskSchema.default('medium'),
  requiresApproval: z.boolean().default(false),
  enabled: z.boolean().default(true),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const MCPToolCallSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  serverId: z.string().min(1),
  toolId: z.string().min(1),
  actorType: z.enum(['user','agent','service_account','system']),
  actorId: z.string().min(1),
  input: z.record(z.unknown()).default({}),
  output: z.record(z.unknown()).optional(),
  status: z.enum(['queued','running','succeeded','failed','cancelled']),
  error: z.string().optional(),
  approvalId: z.string().optional(),
  auditLogId: z.string().optional(),
  startedAt: z.string().datetime().optional(),
  finishedAt: z.string().datetime().optional(),
  createdAt: z.string().datetime()
});

export const AppwriteDocsMCPServerTemplateSchema = z.object({
  name: z.literal('appwrite-docs'),
  type: z.literal('remote_http'),
  url: z.literal('https://mcp-for-docs.appwrite.io')
});

export const AppwriteAPIMCPServerTemplateSchema = z.object({
  name: z.literal('appwrite-api'),
  type: z.literal('local_command'),
  command: z.literal('uvx'),
  args: z.array(z.string()).default(['mcp-server-appwrite']),
  requiredEnv: z.array(z.enum(['APPWRITE_PROJECT_ID','APPWRITE_API_KEY','APPWRITE_ENDPOINT'])).default([
    'APPWRITE_PROJECT_ID',
    'APPWRITE_API_KEY',
    'APPWRITE_ENDPOINT'
  ])
});

export type MCPServer = z.infer<typeof MCPServerSchema>;
export type MCPTool = z.infer<typeof MCPToolSchema>;
export type MCPToolCall = z.infer<typeof MCPToolCallSchema>;
