import { Hono } from 'hono';

export const templatesRouter = new Hono();

templatesRouter.get('/', (c) => c.json({ items: [] }));
templatesRouter.post('/:id/install', async (c) => c.json({ id: crypto.randomUUID(), templateId: c.req.param('id'), input: await c.req.json(), status: 'queued' }, 202));
