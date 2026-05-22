import { Hono } from 'hono';

export const mcpRouter = new Hono();

mcpRouter.get('/servers', (c) => c.json({ items: [] }));
mcpRouter.post('/servers', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), status: 'pending' }, 201));
mcpRouter.get('/tools', (c) => c.json({ items: [] }));
mcpRouter.post('/tools/:id/calls', async (c) => c.json({ id: crypto.randomUUID(), toolId: c.req.param('id'), input: await c.req.json(), status: 'queued' }, 202));
