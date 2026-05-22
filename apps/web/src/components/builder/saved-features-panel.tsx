'use client';

import { useState } from 'react';
import { api } from '@/lib/api-client';

export function SavedFeaturesPanel() {
  const [appId, setAppId] = useState('default-app');
  const [items, setItems] = useState<any[]>([]);
  const [status, setStatus] = useState('Ready');

  async function load() {
    const result = await api.listAppFeatures(appId);
    setItems((result.data as any)?.items || []);
    setStatus(JSON.stringify(result, null, 2));
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="flex items-end gap-3">
        <label className="flex-1"><span className="text-sm text-slate-400">App ID</span><input value={appId} onChange={(event) => setAppId(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4" /></label>
        <button onClick={load} className="rounded-xl bg-cyan-300 px-5 py-4 font-semibold text-slate-950">Load Saved Features</button>
      </div>
      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {items.map((item) => <div key={item.id} className="rounded-xl border border-white/10 bg-black/30 p-4"><p className="font-semibold">{item.blueprint?.feature || item.id}</p><p className="mt-2 text-sm text-slate-400">{item.status} · {item.blueprintId}</p></div>)}
      </div>
      <pre className="mt-4 max-h-40 overflow-auto rounded-xl border border-white/10 bg-black/30 p-4 text-xs text-slate-300">{status}</pre>
    </section>
  );
}
