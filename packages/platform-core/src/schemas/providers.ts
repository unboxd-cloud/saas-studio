import { z } from 'zod';

export const ProviderCategorySchema = z.enum([
  'auth',
  'database',
  'storage',
  'functions',
  'deployment',
  'ai',
  'messaging',
  'observability',
  'source-control',
  'billing'
]);

export const ProviderConnectionSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  category: ProviderCategorySchema,
  provider: z.string().min(1),
  name: z.string().min(1),
  endpoint: z.string().url().optional(),
  scopes: z.array(z.string()).default([]),
  encryptedSecretRef: z.string().min(1),
  metadata: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const AppwriteProviderConfigSchema = z.object({
  endpoint: z.string().url(),
  projectId: z.string().min(1),
  apiKey: z.string().min(1),
  region: z.string().optional(),
  selfHosted: z.boolean().default(false)
});

export type ProviderCategory = z.infer<typeof ProviderCategorySchema>;
export type ProviderConnection = z.infer<typeof ProviderConnectionSchema>;
export type AppwriteProviderConfig = z.infer<typeof AppwriteProviderConfigSchema>;
