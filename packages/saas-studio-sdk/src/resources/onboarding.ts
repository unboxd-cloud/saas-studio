import type { SaaSStudioClient } from '../client';

export class OnboardingResource {
  constructor(private readonly client: SaaSStudioClient) {}

  createSession(input: Record<string, unknown>) {
    return this.client.request('/v1/onboarding/sessions', { method: 'POST', body: JSON.stringify(input) });
  }

  getSession(sessionId: string) {
    return this.client.request(`/v1/onboarding/sessions/${sessionId}`, { method: 'GET' });
  }

  updateSession(sessionId: string, input: Record<string, unknown>) {
    return this.client.request(`/v1/onboarding/sessions/${sessionId}`, { method: 'PATCH', body: JSON.stringify(input) });
  }

  run(sessionId: string, input: Record<string, unknown>) {
    return this.client.request(`/v1/onboarding/sessions/${sessionId}/run`, { method: 'POST', body: JSON.stringify(input) });
  }
}
