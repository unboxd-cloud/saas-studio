const nodes = [
  { type: 'Product', label: 'SaaS Studio' },
  { type: 'Module', label: 'Auth' },
  { type: 'Feature', label: 'MFA' },
  { type: 'Provider', label: 'Appwrite' },
  { type: 'SDK', label: 'Next.js SDK' },
  { type: 'API', label: '/auth/login' },
  { type: 'Database', label: 'Users Table' },
  { type: 'Agent', label: 'Builder Agent' }
];

export default function GraphPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Knowledge Graph</p>
            <h1 className="mt-4 text-5xl font-black">Universal Platform Graph</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Query Graph
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {nodes.map((node) => (
            <div
              key={node.label}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs text-cyan-200">
                  {node.type}
                </span>
                <span className="text-xs text-slate-500">Node</span>
              </div>

              <h2 className="mt-6 text-2xl font-bold">{node.label}</h2>

              <div className="mt-8 rounded-2xl border border-dashed border-white/10 p-6 text-sm text-slate-400">
                Relationships, embeddings, providers, APIs, workflows, permissions.
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
