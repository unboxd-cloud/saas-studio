export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen grid-cols-[260px_1fr]">
        <aside className="border-r border-white/10 bg-black/30 p-6">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">SaaS Studio</p>
            <h1 className="mt-3 text-2xl font-bold">Control Plane</h1>
          </div>

          <nav className="space-y-2 text-sm">
            {[
              'Overview',
              'Apps',
              'Tenants',
              'Users',
              'Teams',
              'Providers',
              'Graph',
              'Agents',
              'Policies',
              'Audit Logs',
              'Deployments',
              'MCP Servers'
            ].map((item) => (
              <button
                key={item}
                className="flex w-full items-center rounded-lg px-4 py-3 text-left transition hover:bg-white/10"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <section className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black">Enterprise Builder</h2>
              <p className="mt-2 text-slate-300">
                Build agentic enterprise applications at scale.
              </p>
            </div>

            <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
              Create App
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
              'Apps',
              'Tenants',
              'Users',
              'Agents'
            ].map((metric) => (
              <div
                key={metric}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm text-slate-400">{metric}</p>
                <h3 className="mt-4 text-4xl font-black">0</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
