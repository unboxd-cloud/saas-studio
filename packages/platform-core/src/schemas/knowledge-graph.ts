import { z } from 'zod';

export const KnowledgeNodeTypeSchema = z.enum([
  'doc_page',
  'doc_section',
  'sdk',
  'sdk_version',
  'language',
  'framework',
  'platform',
  'service',
  'capability',
  'api',
  'api_endpoint',
  'api_operation',
  'http_method',
  'sdk_class',
  'sdk_method',
  'sdk_parameter',
  'sdk_return_type',
  'request_model',
  'response_model',
  'error_model',
  'database',
  'table',
  'collection',
  'column',
  'attribute',
  'index',
  'relationship',
  'permission',
  'role',
  'policy',
  'example',
  'code_snippet',
  'concept',
  'provider',
  'integration'
]);

export const KnowledgeEdgeTypeSchema = z.enum([
  'contains',
  'documents',
  'mentions',
  'supports',
  'requires',
  'implements',
  'extends',
  'maps_to',
  'calls',
  'wraps',
  'returns',
  'accepts',
  'has_parameter',
  'has_request_model',
  'has_response_model',
  'has_error_model',
  'reads_from',
  'writes_to',
  'creates',
  'updates',
  'deletes',
  'queries',
  'has_table',
  'has_column',
  'has_index',
  'has_relationship',
  'protected_by',
  'grants',
  'example_of',
  'compatible_with',
  'same_as',
  'related_to',
  'replaces'
]);

export const KnowledgeSourceTypeSchema = z.enum([
  'appwrite_docs',
  'appwrite_sdk_docs',
  'appwrite_api_reference',
  'appwrite_database_schema',
  'github_repo',
  'markdown',
  'openapi',
  'database_introspection',
  'manual_upload',
  'web_page'
]);

export const KnowledgeSourceSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  type: KnowledgeSourceTypeSchema,
  title: z.string().min(1),
  url: z.string().url().optional(),
  version: z.string().optional(),
  checksum: z.string().optional(),
  metadata: z.record(z.unknown()).default({}),
  indexedAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const KnowledgeNodeSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  sourceId: z.string().min(1),
  type: KnowledgeNodeTypeSchema,
  key: z.string().min(1),
  label: z.string().min(1),
  description: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  externalId: z.string().optional(),
  properties: z.record(z.unknown()).default({}),
  tags: z.array(z.string()).default([]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const KnowledgeEdgeSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  sourceId: z.string().optional(),
  fromNodeId: z.string().min(1),
  toNodeId: z.string().min(1),
  type: KnowledgeEdgeTypeSchema,
  weight: z.number().min(0).max(1).default(1),
  confidence: z.number().min(0).max(1).default(1),
  properties: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const KnowledgeChunkSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  sourceId: z.string().min(1),
  nodeId: z.string().optional(),
  path: z.string().optional(),
  title: z.string().optional(),
  content: z.string().min(1),
  contentHash: z.string().min(1),
  tokenCount: z.number().int().nonnegative().optional(),
  ordinal: z.number().int().nonnegative().default(0),
  metadata: z.record(z.unknown()).default({}),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const KnowledgeEmbeddingSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  chunkId: z.string().min(1),
  provider: z.string().min(1),
  model: z.string().min(1),
  dimensions: z.number().int().positive(),
  vectorRef: z.string().min(1),
  createdAt: z.string().datetime()
});

export const SDKGraphNodePropertiesSchema = z.object({
  packageName: z.string().optional(),
  repository: z.string().optional(),
  version: z.string().optional(),
  language: z.string().optional(),
  importPath: z.string().optional(),
  className: z.string().optional(),
  methodName: z.string().optional(),
  signature: z.string().optional()
}).passthrough();

export const APIGraphNodePropertiesSchema = z.object({
  method: z.enum(['GET','POST','PUT','PATCH','DELETE','OPTIONS','HEAD']).optional(),
  path: z.string().optional(),
  operationId: z.string().optional(),
  service: z.string().optional(),
  authRequired: z.boolean().optional(),
  scopes: z.array(z.string()).optional()
}).passthrough();

export const DatabaseGraphNodePropertiesSchema = z.object({
  databaseId: z.string().optional(),
  tableId: z.string().optional(),
  collectionId: z.string().optional(),
  columnType: z.string().optional(),
  required: z.boolean().optional(),
  array: z.boolean().optional(),
  indexed: z.boolean().optional(),
  unique: z.boolean().optional(),
  relationType: z.string().optional()
}).passthrough();

export const KnowledgeExtractionJobSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  sourceId: z.string().min(1),
  status: z.enum(['queued','running','completed','failed','cancelled']),
  extractor: z.enum(['docs','sdk','api','database','hybrid']),
  startedAt: z.string().datetime().optional(),
  finishedAt: z.string().datetime().optional(),
  error: z.string().optional(),
  stats: z.object({
    nodes: z.number().int().nonnegative().default(0),
    edges: z.number().int().nonnegative().default(0),
    chunks: z.number().int().nonnegative().default(0),
    embeddings: z.number().int().nonnegative().default(0)
  }).default({})
});

export type KnowledgeNodeType = z.infer<typeof KnowledgeNodeTypeSchema>;
export type KnowledgeEdgeType = z.infer<typeof KnowledgeEdgeTypeSchema>;
export type KnowledgeSourceType = z.infer<typeof KnowledgeSourceTypeSchema>;
export type KnowledgeSource = z.infer<typeof KnowledgeSourceSchema>;
export type KnowledgeNode = z.infer<typeof KnowledgeNodeSchema>;
export type KnowledgeEdge = z.infer<typeof KnowledgeEdgeSchema>;
export type KnowledgeChunk = z.infer<typeof KnowledgeChunkSchema>;
export type KnowledgeEmbedding = z.infer<typeof KnowledgeEmbeddingSchema>;
export type KnowledgeExtractionJob = z.infer<typeof KnowledgeExtractionJobSchema>;
