import { Hono } from 'hono';
import { createAppBlueprint } from '@unboxd/platform-core/src/builder/app-blueprint';
import { planDataUploadFlow } from '@unboxd/platform-core/src/builder/data-upload-planner';
import { planFeatureFlow } from '@unboxd/platform-core/src/builder/feature-flow-planner';

export const builderRouter = new Hono();

const blueprints = new Map<string, Record<string, unknown>>();
const appFeatures = new Map<string, Record<string, unknown>[]>();
const exports = new Map<string, Record<string, unknown>>();

builderRouter.post('/feature-plan', async (c) => c.json(planFeatureFlow(await c.req.json())));
builderRouter.post('/data-upload-plan', async (c) => c.json(planDataUploadFlow(await c.req.json())));

builderRouter.post('/app-blueprint', async (c) => {
  const body = await c.req.json();
  const blueprint = createAppBlueprint(body);
  const record = { id: crypto.randomUUID(), status: 'draft', ...blueprint, appId: body.appId || 'default-app', createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
  blueprints.set(String(record.id), record);
  return c.json(record, 201);
});

builderRouter.get('/blueprints', (c) => c.json({ items: Array.from(blueprints.values()) }));

builderRouter.get('/blueprints/:id', (c) => {
  const record = blueprints.get(c.req.param('id'));
  if (!record) return c.json({ error: 'Blueprint not found' }, 404);
  return c.json(record);
});

builderRouter.post('/blueprints/:id/save-to-app', async (c) => {
  const id = c.req.param('id');
  const record = blueprints.get(id);
  if (!record) return c.json({ error: 'Blueprint not found' }, 404);
  const body = await c.req.json();
  const appId = String(body.appId || record.appId || 'default-app');
  const feature = { id: crypto.randomUUID(), appId, blueprintId: id, blueprint: record, status: 'saved', createdAt: new Date().toISOString() };
  appFeatures.set(appId, [...(appFeatures.get(appId) || []), feature]);
  blueprints.set(id, { ...record, status: 'saved', appId, updatedAt: new Date().toISOString() });
  return c.json(feature, 201);
});

builderRouter.get('/apps/:appId/features', (c) => c.json({ items: appFeatures.get(c.req.param('appId')) || [] }));

builderRouter.post('/blueprints/:id/export', (c) => {
  const id = c.req.param('id');
  const record = blueprints.get(id);
  if (!record) return c.json({ error: 'Blueprint not found' }, 404);
  const artifact = { id: crypto.randomUUID(), blueprintId: id, status: 'ready', artifactType: 'generated-app-bundle', files: record.files || [], createdAt: new Date().toISOString() };
  exports.set(String(artifact.id), artifact);
  return c.json(artifact, 201);
});

builderRouter.get('/exports/:id', (c) => {
  const artifact = exports.get(c.req.param('id'));
  if (!artifact) return c.json({ error: 'Export not found' }, 404);
  return c.json(artifact);
});
