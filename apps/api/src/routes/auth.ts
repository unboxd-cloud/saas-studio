import { Hono } from 'hono';

export const authRouter = new Hono();

authRouter.get('/status', (c) => c.json({ authenticated: false }));
authRouter.get('/methods', (c) => c.json({ items: [] }));
authRouter.post('/methods', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()) }, 201));
authRouter.post('/verify', async (c) => c.json({ ...(await c.req.json()), verified: true }));
authRouter.post('/team-invites', async (c) => c.json({ id: crypto.randomUUID(), ...(await c.req.json()), status: 'pending' }, 201));
