import type { SaaSStudioClient } from '../client';

export class ScorecardsResource {
  constructor(private readonly client: SaaSStudioClient) {}
  list(query?: { targetType?: string }) { return this.client.request('/v1/scorecards', { method: 'GET', query }); }
  run(scorecardId: string, input: { targetType: string; targetId: string }) { return this.client.request(`/v1/scorecards/${scorecardId}/runs`, { method: 'POST', body: JSON.stringify(input) }); }
}
