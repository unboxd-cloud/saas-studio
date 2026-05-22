import { Hono } from 'hono';
import { createAppBlueprint } from '@unboxd/platform-core/src/builder/app-blueprint';
import { planDataUploadFlow } from '@unboxd/platform-core/src/builder/data-upload-planner';
import { planFeatureFlow } from '@unboxd/platform-core/src/builder/feature-flow-planner';

export const builderRouter = new Hono();

builderRouter.post('/feature-plan', async (c) => c.json(planFeatureFlow(await c.req.json())));
builderRouter.post('/data-upload-plan', async (c) => c.json(planDataUploadFlow(await c.req.json())));
builderRouter.post('/app-blueprint', async (c) => c.json(createAppBlueprint(await c.req.json())));
