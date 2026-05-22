import { z } from 'zod';

export const ScorecardStatusSchema = z.enum(['draft','active','disabled','archived']);
export const ScorecardCheckStatusSchema = z.enum(['passing','warning','failing','unknown']);

export const ScorecardCheckSchema = z.object({
  id: z.string().min(1),
  scorecardId: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  weight: z.number().min(0).max(100).default(10),
  expression: z.string().min(1),
  remediation: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const ScorecardSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  name: z.string().min(1),
  description: z.string().optional(),
  targetType: z.enum(['app','tenant','provider','agent','workflow','deployment','data_source']),
  status: ScorecardStatusSchema.default('draft'),
  checks: z.array(ScorecardCheckSchema).default([]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const ScorecardRunSchema = z.object({
  id: z.string().min(1),
  scorecardId: z.string().min(1),
  targetType: z.string().min(1),
  targetId: z.string().min(1),
  score: z.number().min(0).max(100),
  status: ScorecardCheckStatusSchema,
  results: z.array(z.object({
    checkId: z.string().min(1),
    status: ScorecardCheckStatusSchema,
    score: z.number().min(0).max(100),
    message: z.string().optional()
  })).default([]),
  createdAt: z.string().datetime()
});

export type Scorecard = z.infer<typeof ScorecardSchema>;
export type ScorecardCheck = z.infer<typeof ScorecardCheckSchema>;
export type ScorecardRun = z.infer<typeof ScorecardRunSchema>;
