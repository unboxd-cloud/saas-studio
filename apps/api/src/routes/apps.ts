import { Hono } from 'hono';

export const appsRouter = new Hono();

appsRouter.get('/', (c) => {
  return c.json({ items: [] });
});

appsRouter.post('/', async (c) => {
  const body = await c.req.json();

  return c.json({
    id: crypto.randomUUID(),
    ...body,
    status: 'draft'
  }, 201);
});

appsRouter.get('/:id', (c) => {
  return c.json({
    id: c.req.param('id')
  });
});

appsRouter.post('/:id/builds', (c) => {
  return c.json({
    id: crypto.randomUUID(),
    appId: c.req.param('id'),
    status: 'queued'
  }, 202);
});
