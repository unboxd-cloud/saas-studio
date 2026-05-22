import { Hono } from 'hono';

export const graphRouter = new Hono();

graphRouter.get('/nodes', (c) => c.json({ items: [] }));
graphRouter.post('/nodes', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()) }, 201));
graphRouter.get('/edges', (c) => c.json({ items: [] }));
graphRouter.post('/edges', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()) }, 201));
graphRouter.post('/query', async (c) => c.json({ ...(await c.req.json()), nodes: [], edges: [] }));
