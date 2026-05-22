import type { SaaSStudioClient } from '../client';

export type AuthMethod = 'email_password' | 'magic_url' | 'email_otp' | 'phone_sms' | 'oauth2' | 'anonymous' | 'jwt' | 'ssr' | 'custom_token';

export type CreateAuthMethodInput = {
  organizationId: string;
  appId?: string;
  tenantId?: string;
  method: AuthMethod;
  requireVerification?: boolean;
  requireMfa?: boolean;
  allowedDomains?: string[];
  blockedDomains?: string[];
  metadata?: Record<string, unknown>;
};

export class AuthResource {
  constructor(private readonly client: SaaSStudioClient) {}

  methods(query?: { organizationId?: string; appId?: string; tenantId?: string }) {
    return this.client.request('/v1/auth/methods', { method: 'GET', query });
  }

  createMethod(input: CreateAuthMethodInput) {
    return this.client.request('/v1/auth/methods', { method: 'POST', body: JSON.stringify(input) });
  }

  getStatus() {
    return this.client.request('/v1/auth/status', { method: 'GET' });
  }

  verifyUser(input: { userId: string; challengeId: string; secret: string }) {
    return this.client.request('/v1/auth/verify', { method: 'POST', body: JSON.stringify(input) });
  }

  inviteToTeam(input: { teamId: string; email: string; roles?: string[]; redirectUrl?: string }) {
    return this.client.request('/v1/auth/team-invites', { method: 'POST', body: JSON.stringify(input) });
  }
}
