import { z } from 'zod';

export const TemplateTypeSchema = z.enum(['app','page','workflow','provider','agent','schema','deployment','policy']);
export const TemplateStatusSchema = z.enum(['draft','published','deprecated','archived']);

export const TemplateSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().optional(),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  type: TemplateTypeSchema,
  status: TemplateStatusSchema.default('draft'),
  version: z.string().default('0.1.0'),
  tags: z.array(z.string()).default([]),
  requiredProviders: z.array(z.string()).default([]),
  supportedFrameworks: z.array(z.string()).default([]),
  blueprint: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const TemplateInstallSchema = z.object({
  id: z.string().min(1),
  templateId: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().min(1),
  projectId: z.string().optional(),
  appId: z.string().optional(),
  status: z.enum(['queued','running','completed','failed','cancelled']),
  inputs: z.record(z.unknown()).default({}),
  outputs: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type Template = z.infer<typeof TemplateSchema>;
export type TemplateInstall = z.infer<typeof TemplateInstallSchema>;
