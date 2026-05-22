import { z } from 'zod';

export const AuditActorTypeSchema = z.enum(['user','agent','service_account','system']);
export const AuditRiskLevelSchema = z.enum(['low','medium','high','critical']);

export const AuditEventSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  projectId: z.string().optional(),
  appId: z.string().optional(),
  tenantId: z.string().optional(),
  actorType: AuditActorTypeSchema,
  actorId: z.string().min(1),
  action: z.string().min(1),
  resourceType: z.string().min(1),
  resourceId: z.string().optional(),
  before: z.record(z.unknown()).optional(),
  after: z.record(z.unknown()).optional(),
  ip: z.string().optional(),
  userAgent: z.string().optional(),
  requestId: z.string().optional(),
  sessionId: z.string().optional(),
  mcpToolId: z.string().optional(),
  agentRunId: z.string().optional(),
  riskLevel: AuditRiskLevelSchema.default('medium'),
  metadata: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime()
});

export type AuditActorType = z.infer<typeof AuditActorTypeSchema>;
export type AuditRiskLevel = z.infer<typeof AuditRiskLevelSchema>;
export type AuditEvent = z.infer<typeof AuditEventSchema>;
