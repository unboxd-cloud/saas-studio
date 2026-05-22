'use client';

import { useMemo, useState } from 'react';
import { apiRequest } from '@/lib/api-client';
import { AppBlueprintPreview } from './app-blueprint-preview';

function makePlan(featureInput: string, domain: string) {
  const feature = featureInput.trim() || 'Invoice Approvals';
  const slug = feature.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'feature';
  const entity = slug.replace(/-/g, '_');
  return {
    feature,
    domain,
    entities: [{ name: entity, fields: ['id', 'tenantId', 'title', 'status', 'ownerId', 'metadata', 'createdAt', 'updatedAt'] }],
    screens: [`/${slug}`, `/${slug}/new`, `/${slug}/detail`, `/${slug}/analytics`],
    apis: [`GET /v1/${slug}`, `POST /v1/${slug}`, `PATCH /v1/${slug}/:id`],
    workflows: [`${slug}.created`, `${slug}.submitted`, `${slug}.approved`],
    roles: [`${slug}.viewer`, `${slug}.editor`, `${slug}.admin`],
    auditEvents: [`${slug}.create`, `${slug}.update`]
  };
}

export function FeatureFlowBuilder() {
  const [feature, setFeature] = useState('Invoice Approvals');
  const [domain, setDomain] = useState('finance');
  const [blueprint, setBlueprint] = useState<any>(null);
  const [busy, setBusy] = useState(false);
  const plan = useMemo(() => makePlan(feature, domain), [feature, domain]);

  async function generateBlueprint() {
    setBusy(true);
    const result = await apiRequest('/v1/builder/app-blueprint', { method: 'POST', body: JSON.stringify({ feature, domain }) });
    setBlueprint(result.data || { error: result.error });
    setBusy(false);
  }

  return (
    <section className="space-y-8">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block"><span className="text-sm text-slate-400">Feature</span><input value={feature} onChange={(event) => setFeature(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" /></label>
        <label className="block"><span className="text-sm text-slate-400">Domain</span><input value={domain} onChange={(event) => setDomain(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" /></label>
      </div>
      <button onClick={generateBlueprint} disabled={busy} className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 disabled:opacity-50">{busy ? 'Generating...' : 'Generate Blueprint'}</button>
      <div className="grid gap-6 lg:grid-cols-3"><Panel title="Entities" items={plan.entities.map((entity) => `${entity.name}: ${entity.fields.join(', ')}`)} /><Panel title="Screens" items={plan.screens} /><Panel title="APIs" items={plan.apis} /><Panel title="Workflows" items={plan.workflows} /><Panel title="Roles" items={plan.roles} /><Panel title="Audit Events" items={plan.auditEvents} /></div>
      <AppBlueprintPreview blueprint={blueprint} />
    </section>
  );
}

function Panel({ title, items }: { title: string; items: string[] }) { return <section className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">{title}</h2><div className="mt-4 space-y-2">{items.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-slate-300">{item}</div>)}</div></section>; }
