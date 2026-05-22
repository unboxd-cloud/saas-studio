export type ApiResult<T> = { data?: T; error?: string };

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export async function apiRequest<T>(path: string, init: RequestInit = {}): Promise<ApiResult<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      headers: { 'content-type': 'application/json', ...(init.headers || {}) }
    });
    const text = await response.text();
    const data = text ? JSON.parse(text) : undefined;
    if (!response.ok) return { error: data?.message || data?.error || `Request failed: ${response.status}` };
    return { data };
  } catch (error) {
    return { error: error instanceof Error ? error.message : 'Unknown request error' };
  }
}

export const api = {
  createApp: (input: Record<string, unknown>) => apiRequest('/v1/apps', { method: 'POST', body: JSON.stringify(input) }),
  createTenant: (input: Record<string, unknown>) => apiRequest('/v1/tenants', { method: 'POST', body: JSON.stringify(input) }),
  connectProvider: (input: Record<string, unknown>) => apiRequest('/v1/providers', { method: 'POST', body: JSON.stringify(input) }),
  runWorkflow: (workflowId: string, input: Record<string, unknown>) => apiRequest(`/v1/workflows/${workflowId}/runs`, { method: 'POST', body: JSON.stringify(input) }),
  createDeployment: (input: Record<string, unknown>) => apiRequest('/v1/deployments', { method: 'POST', body: JSON.stringify(input) }),
  queryGraph: (input: Record<string, unknown>) => apiRequest('/v1/graph/query', { method: 'POST', body: JSON.stringify(input) }),
  runAgent: (agentId: string, input: Record<string, unknown>) => apiRequest(`/v1/agents/${agentId}/runs`, { method: 'POST', body: JSON.stringify(input) }),
  runScorecard: (scorecardId: string, input: Record<string, unknown>) => apiRequest(`/v1/scorecards/${scorecardId}/runs`, { method: 'POST', body: JSON.stringify(input) }),
  createOnboardingSession: (input: Record<string, unknown>) => apiRequest('/v1/onboarding/sessions', { method: 'POST', body: JSON.stringify(input) }),
  updateOnboardingSession: (sessionId: string, input: Record<string, unknown>) => apiRequest(`/v1/onboarding/sessions/${sessionId}`, { method: 'PATCH', body: JSON.stringify(input) }),
  runOnboarding: (sessionId: string, input: Record<string, unknown>) => apiRequest(`/v1/onboarding/sessions/${sessionId}/run`, { method: 'POST', body: JSON.stringify(input) })
};
