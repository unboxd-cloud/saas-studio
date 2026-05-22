import { z } from 'zod';

export const PolicyEffectSchema = z.enum(['allow','deny']);
export const PolicyStatusSchema = z.enum(['draft','active','disabled','archived']);

export const PolicyRuleSchema = z.object({
  id: z.string().min(1),
  resourceType: z.string().min(1),
  actions: z.array(z.string()).default([]),
  conditions: z.record(z.unknown()).default({}),
  effect: PolicyEffectSchema.default('allow')
});

export const PolicySchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  status: PolicyStatusSchema.default('draft'),
  priority: z.number().int().default(100),
  rules: z.array(PolicyRuleSchema).default([]),
  tags: z.array(z.string()).default([]),
  createdBy: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type PolicyEffect = z.infer<typeof PolicyEffectSchema>;
export type PolicyStatus = z.infer<typeof PolicyStatusSchema>;
export type PolicyRule = z.infer<typeof PolicyRuleSchema>;
export type Policy = z.infer<typeof PolicySchema>;
