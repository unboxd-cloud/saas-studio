import { Hono } from 'hono';

export const deploymentsRouter = new Hono();

deploymentsRouter.get('/', (c) => c.json({ items: [] }));
deploymentsRouter.post('/', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), status: 'queued' }, 202));
deploymentsRouter.get('/:id', (c) => c.json({ id: c.req.param('id') }));
deploymentsRouter.post('/:id/rollback', (c) => c.json({ id: c.req.param('id'), rollback: 'queued' }, 202));
