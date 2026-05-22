import { z } from 'zod';

export const BuilderModeSchema = z.enum(['no-code','low-code','vibe-code','full-code']);
export const SaaSAppStatusSchema = z.enum(['draft','blueprint','building','review','staging','production','archived']);
export const TenantIsolationSchema = z.enum(['shared-database','schema-per-tenant','database-per-tenant','project-per-tenant']);

export const StackSelectionSchema = z.object({
  language: z.string().min(1),
  framework: z.string().min(1),
  ide: z.string().optional(),
  vibeCoder: z.string().optional(),
  agenticCoder: z.string().optional(),
  runtime: z.string().optional(),
  deploymentTarget: z.string().optional()
});

export const TenancyModelSchema = z.object({
  model: z.enum(['single-tenant','organization','workspace','customer-account']),
  isolation: TenantIsolationSchema,
  customDomainPerTenant: z.boolean().default(false),
  tenantAdminEnabled: z.boolean().default(true)
});

export const SaaSAppSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().min(1),
  projectId: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().min(1),
  description: z.string().optional(),
  mode: BuilderModeSchema,
  status: SaaSAppStatusSchema,
  stack: StackSelectionSchema,
  tenancy: TenancyModelSchema,
  providerConnectionIds: z.array(z.string()).default([]),
  metadata: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const SaaSBlueprintSchema = z.object({
  id: z.string().min(1),
  appId: z.string().min(1),
  prompt: z.string().min(1),
  summary: z.string().optional(),
  roles: z.array(z.string()).default([]),
  pages: z.array(z.string()).default([]),
  entities: z.array(z.string()).default([]),
  workflows: z.array(z.string()).default([]),
  integrations: z.array(z.string()).default([]),
  policies: z.array(z.string()).default([]),
  generatedAt: z.string().datetime()
});

export type BuilderMode = z.infer<typeof BuilderModeSchema>;
export type SaaSAppStatus = z.infer<typeof SaaSAppStatusSchema>;
export type TenantIsolation = z.infer<typeof TenantIsolationSchema>;
export type StackSelection = z.infer<typeof StackSelectionSchema>;
export type TenancyModel = z.infer<typeof TenancyModelSchema>;
export type SaaSApp = z.infer<typeof SaaSAppSchema>;
export type SaaSBlueprint = z.infer<typeof SaaSBlueprintSchema>;
