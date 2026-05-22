import { z } from 'zod';

export const UserStatusSchema = z.enum(['active','blocked','pending','deleted']);
export const UserTypeSchema = z.enum(['human','service_account','agent']);
export const IdentityProviderSchema = z.enum(['email','phone','oauth2','oidc','saml','jwt','anonymous','custom']);
export const SessionStatusSchema = z.enum(['active','expired','revoked']);
export const MFAFactorTypeSchema = z.enum(['totp','phone','email','recovery_code','webauthn']);

export const UserSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  tenantId: z.string().optional(),
  externalId: z.string().optional(),
  provider: z.string().default('appwrite'),
  providerUserId: z.string().optional(),
  type: UserTypeSchema.default('human'),
  status: UserStatusSchema.default('pending'),
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  emailVerified: z.boolean().default(false),
  phoneVerified: z.boolean().default(false),
  mfaEnabled: z.boolean().default(false),
  labels: z.array(z.string()).default([]),
  preferences: z.record(z.unknown()).default({}),
  metadata: z.record(z.unknown()).default({}),
  lastLoginAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const UserIdentitySchema = z.object({
  id: z.string().min(1),
  userId: z.string().min(1),
  organizationId: z.string().min(1),
  provider: IdentityProviderSchema,
  providerIdentityId: z.string().min(1),
  providerEmail: z.string().email().optional(),
  providerName: z.string().optional(),
  scopes: z.array(z.string()).default([]),
  accessTokenSecretRef: z.string().optional(),
  refreshTokenSecretRef: z.string().optional(),
  expiresAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const UserSessionSchema = z.object({
  id: z.string().min(1),
  userId: z.string().min(1),
  organizationId: z.string().min(1),
  tenantId: z.string().optional(),
  providerSessionId: z.string().optional(),
  status: SessionStatusSchema,
  ip: z.string().optional(),
  userAgent: z.string().optional(),
  countryCode: z.string().optional(),
  current: z.boolean().default(false),
  createdAt: z.string().datetime(),
  expiresAt: z.string().datetime().optional(),
  revokedAt: z.string().datetime().optional()
});

export const UserMFAFactorSchema = z.object({
  id: z.string().min(1),
  userId: z.string().min(1),
  organizationId: z.string().min(1),
  type: MFAFactorTypeSchema,
  verified: z.boolean().default(false),
  secretRef: z.string().optional(),
  lastUsedAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const UserLabelSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  key: z.string().min(1),
  name: z.string().min(1),
  description: z.string().optional(),
  color: z.string().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const UserMembershipSchema = z.object({
  id: z.string().min(1),
  organizationId: z.string().min(1),
  workspaceId: z.string().optional(),
  projectId: z.string().optional(),
  appId: z.string().optional(),
  tenantId: z.string().optional(),
  teamId: z.string().optional(),
  userId: z.string().min(1),
  roles: z.array(z.string()).default([]),
  invitedBy: z.string().optional(),
  invitedAt: z.string().datetime().optional(),
  joinedAt: z.string().datetime().optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type UserStatus = z.infer<typeof UserStatusSchema>;
export type UserType = z.infer<typeof UserTypeSchema>;
export type IdentityProvider = z.infer<typeof IdentityProviderSchema>;
export type SessionStatus = z.infer<typeof SessionStatusSchema>;
export type MFAFactorType = z.infer<typeof MFAFactorTypeSchema>;
export type User = z.infer<typeof UserSchema>;
export type UserIdentity = z.infer<typeof UserIdentitySchema>;
export type UserSession = z.infer<typeof UserSessionSchema>;
export type UserMFAFactor = z.infer<typeof UserMFAFactorSchema>;
export type UserLabel = z.infer<typeof UserLabelSchema>;
export type UserMembership = z.infer<typeof UserMembershipSchema>;
