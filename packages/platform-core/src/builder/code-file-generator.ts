export type CodegenBlueprint = {
  feature: string;
  slug: string;
  entities: string[];
  screens: string[];
  apis: string[];
  workflows: string[];
  roles: string[];
  auditEvents: string[];
  notifications: string[];
};

function componentName(slug: string) {
  return slug.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join('');
}

export function generateCodeFiles(blueprint: CodegenBlueprint) {
  const slug = blueprint.slug || 'feature';
  const entity = blueprint.entities?.[0] || slug.replace(/-/g, '_');
  const component = componentName(slug);
  return [
    { path: `apps/web/src/app/${slug}/page.tsx`, type: 'page', content: `export default function ${component}Page(){return <main><h1>${blueprint.feature}</h1><a href="/${slug}/new">New</a></main>}` },
    { path: `apps/web/src/app/${slug}/new/page.tsx`, type: 'page', content: `'use client';export default function New${component}Page(){return <main><h1>Create ${blueprint.feature}</h1><input placeholder="Title"/><button>Create</button></main>}` },
    { path: `apps/api/src/routes/generated/${slug}.ts`, type: 'api', content: `import { Hono } from 'hono';export const ${entity}Router=new Hono();${entity}Router.get('/',c=>c.json({items:[]}));${entity}Router.post('/',async c=>c.json({id:crypto.randomUUID(),...(await c.req.json())},201));` },
    { path: `packages/platform-core/src/generated/${entity}.schema.ts`, type: 'schema', content: `import { z } from 'zod';export const ${component}Schema=z.object({id:z.string().optional(),tenantId:z.string(),title:z.string(),status:z.string().default('draft')});` },
    { path: `packages/platform-core/src/generated/${entity}.workflow.ts`, type: 'workflow', content: `export const workflows=${JSON.stringify(blueprint.workflows || [])};` },
    { path: `packages/platform-core/src/generated/${entity}.policy.ts`, type: 'policy', content: `export const roles=${JSON.stringify(blueprint.roles || [])};export const auditEvents=${JSON.stringify(blueprint.auditEvents || [])};` }
  ];
}
