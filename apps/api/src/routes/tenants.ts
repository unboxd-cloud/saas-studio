import { Hono } from 'hono';

export const tenantsRouter = new Hono();

tenantsRouter.get('/', (c) => c.json({ items: [] }));
tenantsRouter.post('/', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), status: 'provisioning' }, 201));
tenantsRouter.get('/:id', (c) => c.json({ id: c.req.param('id') }));
tenantsRouter.post('/:id/provision', (c) => c.json({ id: crypto.randomUUID(), tenantId: c.req.param('id'), status: 'queued' }, 202));
