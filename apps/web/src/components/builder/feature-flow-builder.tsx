'use client';

import { useMemo, useState } from 'react';

type Plan = {
  feature: string;
  domain: string;
  entities: Array<{ name: string; fields: string[] }>;
  screens: string[];
  apis: string[];
  workflows: string[];
  roles: string[];
  auditEvents: string[];
  notifications: string[];
  deploymentTargets: string[];
};

function makePlan(featureInput: string, domain: string): Plan {
  const feature = featureInput.trim() || 'Invoice Approvals';
  const slug = feature.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'feature';
  const entity = slug.replace(/-/g, '_');
  return {
    feature,
    domain,
    entities: [
      { name: entity, fields: ['id', 'tenantId', 'title', 'status', 'ownerId', 'metadata', 'createdAt', 'updatedAt'] },
      { name: `${entity}_events`, fields: ['id', 'tenantId', `${entity}Id`, 'actorId', 'action', 'before', 'after', 'createdAt'] }
    ],
    screens: [`/${slug}`, `/${slug}/new`, `/${slug}/[id]`, `/${slug}/[id]/edit`, `/${slug}/analytics`],
    apis: [`GET /v1/${slug}`, `POST /v1/${slug}`, `GET /v1/${slug}/:id`, `PATCH /v1/${slug}/:id`, `POST /v1/${slug}/:id/submit`],
    workflows: [`${slug}.created`, `${slug}.submitted`, `${slug}.approved`, `${slug}.rejected`],
    roles: [`${slug}.viewer`, `${slug}.editor`, `${slug}.approver`, `${slug}.admin`],
    auditEvents: [`${slug}.create`, `${slug}.update`, `${slug}.submit`, `${slug}.approve`, `${slug}.reject`],
    notifications: [`${slug}.assigned`, `${slug}.approved`, `${slug}.rejected`],
    deploymentTargets: ['Next.js App Router', 'Appwrite Database', 'Appwrite Functions', 'Appwrite Sites']
  };
}

export function FeatureFlowBuilder() {
  const [feature, setFeature] = useState('Invoice Approvals');
  const [domain, setDomain] = useState('finance');
  const plan = useMemo(() => makePlan(feature, domain), [feature, domain]);

  return (
    <section className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block"><span className="text-sm text-slate-400">Feature</span><input value={feature} onChange={(event) => setFeature(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" /></label>
        <label className="block"><span className="text-sm text-slate-400">Domain</span><input value={domain} onChange={(event) => setDomain(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" /></label>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel title="Entities" items={plan.entities.map((entity) => `${entity.name}: ${entity.fields.join(', ')}`)} />
        <Panel title="Screens" items={plan.screens} />
        <Panel title="APIs" items={plan.apis} />
        <Panel title="Workflows" items={plan.workflows} />
        <Panel title="Roles" items={plan.roles} />
        <Panel title="Audit Events" items={plan.auditEvents} />
        <Panel title="Notifications" items={plan.notifications} />
        <Panel title="Deploy Targets" items={plan.deploymentTargets} />
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">Blueprint JSON</h2><pre className="mt-4 max-h-96 overflow-auto rounded-xl bg-black/40 p-4 text-xs text-slate-300">{JSON.stringify(plan, null, 2)}</pre></section>
      </div>
    </section>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) {
  return <section className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">{title}</h2><div className="mt-4 space-y-2">{items.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-slate-300">{item}</div>)}</div></section>;
}
