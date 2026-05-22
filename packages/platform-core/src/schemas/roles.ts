import { z } from 'zod';

export const RoleScopeSchema = z.enum([
  'platform',
  'organization',
  'workspace',
  'project',
  'app',
  'tenant',
  'environment',
  'provider',
  'agent'
]);

export const PrincipalTypeSchema = z.enum(['user', 'team', 'service_account', 'agent']);

export const BuiltInRoleSchema = z.enum([
  'platform.owner',
  'platform.admin',
  'platform.security_admin',
  'platform.billing_admin',
  'platform.auditor',
  'organization.owner',
  'organization.admin',
  'organization.member',
  'organization.viewer',
  'workspace.owner',
  'workspace.admin',
  'workspace.builder',
  'workspace.viewer',
  'project.owner',
  'project.admin',
  'project.developer',
  'project.viewer',
  'app.owner',
  'app.builder',
  'app.operator',
  'app.viewer',
  'tenant.owner',
  'tenant.admin',
  'tenant.member',
  'tenant.viewer',
  'agent.owner',
  'agent.operator',
  'agent.viewer'
]);

export const PermissionActionSchema = z.enum([
  'create',
  'read',
  'update',
  'delete',
  'list',
  'execute',
  'deploy',
  'promote',
  'approve',
  'reject',
  'invite',
  'assign_role',
  'manage_secrets',
  'manage_providers',
  'manage_policies',
  'view_audit_logs',
  'export_code',
  'call_mcp_tool',
  'run_agent'
]);

export const ResourceTypeSchema = z.enum([
  'organization',
  'workspace',
  'project',
  'app',
  'tenant',
  'environment',
  'provider_connection',
  'data_source',
  'secret',
  'workflow',
  'deployment',
  'agent',
  'skill',
  'policy',
  'audit_log',
  'mcp_tool'
]);

export const PermissionSchema = z.object({
  id: z.string().min(1),
  action: PermissionActionSchema,
  resourceType: ResourceTypeSchema,
  resourceId: z.string().optional(),
  conditions: z.record(z.unknown()).default({})
});

export const RoleSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  scope: RoleScopeSchema,
  builtIn: BuiltInRoleSchema.optional(),
  permissions: z.array(PermissionSchema).default([]),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const RoleBindingSchema = z.object({
  id: z.string().min(1),
  roleId: z.string().min(1),
  principalType: PrincipalTypeSchema,
  principalId: z.string().min(1),
  scope: RoleScopeSchema,
  scopeId: z.string().min(1),
  expiresAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  createdBy: z.string().min(1)
});

export type RoleScope = z.infer<typeof RoleScopeSchema>;
export type PrincipalType = z.infer<typeof PrincipalTypeSchema>;
export type BuiltInRole = z.infer<typeof BuiltInRoleSchema>;
export type PermissionAction = z.infer<typeof PermissionActionSchema>;
export type ResourceType = z.infer<typeof ResourceTypeSchema>;
export type Permission = z.infer<typeof PermissionSchema>;
export type Role = z.infer<typeof RoleSchema>;
export type RoleBinding = z.infer<typeof RoleBindingSchema>;
