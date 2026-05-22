import { Hono } from 'hono';

export const onboardingRouter = new Hono();

const sessions = new Map<string, Record<string, unknown>>();

onboardingRouter.post('/sessions', async (c) => {
  const body = await c.req.json();
  const id = crypto.randomUUID();
  const session = {
    id,
    step: 'stack',
    status: 'draft',
    ...body,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  sessions.set(id, session);
  return c.json(session, 201);
});

onboardingRouter.get('/sessions/:id', (c) => {
  const session = sessions.get(c.req.param('id'));
  if (!session) return c.json({ error: 'Onboarding session not found' }, 404);
  return c.json(session);
});

onboardingRouter.patch('/sessions/:id', async (c) => {
  const id = c.req.param('id');
  const previous = sessions.get(id) ?? { id, createdAt: new Date().toISOString() };
  const body = await c.req.json();
  const session = { ...previous, ...body, updatedAt: new Date().toISOString() };
  sessions.set(id, session);
  return c.json(session);
});

onboardingRouter.post('/sessions/:id/run', async (c) => {
  const id = c.req.param('id');
  const previous = sessions.get(id) ?? { id };
  const body = await c.req.json();
  const run = {
    id: crypto.randomUUID(),
    sessionId: id,
    status: 'completed',
    events: [
      'created app',
      'created tenant',
      'connected provider',
      'generated blueprint',
      'queued deployment'
    ],
    input: body,
    createdAt: new Date().toISOString()
  };
  sessions.set(id, { ...previous, status: 'completed', lastRun: run, updatedAt: new Date().toISOString() });
  return c.json(run, 202);
});
