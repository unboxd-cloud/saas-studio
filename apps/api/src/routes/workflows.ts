import { Hono } from 'hono';

export const workflowsRouter = new Hono();

workflowsRouter.get('/', (c) => c.json({ items: [] }));
workflowsRouter.post('/', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()) }, 201));
workflowsRouter.get('/:id', (c) => c.json({ id: c.req.param('id') }));
workflowsRouter.post('/:id/runs', async (c) => c.json({ id: crypto.randomUUID(), workflowId: c.req.param('id'), input: await c.req.json(), status: 'queued' }, 202));
