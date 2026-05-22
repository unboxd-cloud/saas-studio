const entities = ['users','tenants','teams','apps','workflows','providers','audit_events'];
const fields = ['id','organizationId','tenantId','name','status','metadata','createdAt','updatedAt'];

export default function SchemaDesignerPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen grid-cols-[300px_1fr_360px]">
        <aside className="border-r border-white/10 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Data Model</p>
          <h1 className="mt-4 text-3xl font-black">Schema Designer</h1>
          <div className="mt-8 space-y-3">{entities.map((entity) => <div key={entity} className="rounded-xl border border-white/10 bg-white/5 p-4">{entity}</div>)}</div>
        </aside>
        <section className="p-8">
          <div className="h-full rounded-3xl border border-dashed border-white/10 bg-white/5 p-8">
            <h2 className="text-4xl font-black">Visual Entity Graph</h2>
            <p className="mt-4 text-slate-300">Design tables, relationships, indexes, permissions, and provider mappings.</p>
          </div>
        </section>
        <aside className="border-l border-white/10 p-6">
          <h2 className="text-2xl font-bold">Fields</h2>
          <div className="mt-6 space-y-3">{fields.map((field) => <div key={field} className="rounded-xl border border-white/10 bg-white/5 p-4">{field}</div>)}</div>
        </aside>
      </div>
    </main>
  );
}
