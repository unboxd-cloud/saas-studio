import { Hono } from 'hono';

export const providersRouter = new Hono();

providersRouter.get('/', (c) => c.json({ items: [] }));
providersRouter.post('/', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), status: 'connected' }, 201));
providersRouter.get('/:id', (c) => c.json({ id: c.req.param('id') }));
providersRouter.post('/:id/test', (c) => c.json({ id: c.req.param('id'), ok: true }));
providersRouter.delete('/:id', (c) => c.json({ id: c.req.param('id'), status: 'disconnected' }));
