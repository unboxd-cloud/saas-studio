import { Hono } from 'hono';

export const scorecardsRouter = new Hono();

scorecardsRouter.get('/', (c) => c.json({ items: [] }));
scorecardsRouter.post('/:id/runs', async (c) => c.json({ id: crypto.randomUUID(), scorecardId: c.req.param('id'), ...(await c.req.json()), score: 0, status: 'unknown' }, 202));
