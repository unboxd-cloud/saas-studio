const tables = ['users','teams','tenants','apps','providers','workflows','deployments','audit_events','knowledge_nodes','knowledge_edges'];

export default function DatabasePage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Database</p><h1 className="mt-4 text-5xl font-black">Database Explorer</h1></div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{tables.map((table) => <div key={table} className="rounded-3xl border border-white/10 bg-white/5 p-6"><h2 className="text-2xl font-bold">{table}</h2><p className="mt-3 text-sm text-slate-400">Graph-backed platform table.</p></div>)}</div>
      </div>
    </main>
  );
}
