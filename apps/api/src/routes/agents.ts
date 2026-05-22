import { Hono } from 'hono';

export const agentsRouter = new Hono();

agentsRouter.get('/', (c) => c.json({ items: [] }));
agentsRouter.post('/', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), enabled: true }, 201));
agentsRouter.post('/:id/runs', async (c) => c.json({ id: crypto.randomUUID(), agentId: c.req.param('id'), input: await c.req.json(), status: 'queued' }, 202));
