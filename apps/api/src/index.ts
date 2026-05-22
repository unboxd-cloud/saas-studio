import { Hono } from 'hono';
import { appsRouter } from './routes/apps';
import { graphRouter } from './routes/graph';
import { providersRouter } from './routes/providers';
import { workflowsRouter } from './routes/workflows';

const app = new Hono();

app.get('/health', (c) => {
  return c.json({
    ok: true,
    service: 'saas-studio-api'
  });
});

app.route('/v1/apps', appsRouter);
app.route('/v1/graph', graphRouter);
app.route('/v1/providers', providersRouter);
app.route('/v1/workflows', workflowsRouter);

export default app;
