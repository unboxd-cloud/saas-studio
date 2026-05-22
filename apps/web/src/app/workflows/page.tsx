const workflowSteps = [
  'Trigger',
  'Validate Request',
  'Resolve Tenant',
  'Call Agent',
  'Run MCP Tool',
  'Persist Data',
  'Deploy App',
  'Notify User'
];

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="grid min-h-screen grid-cols-[300px_1fr]">
        <aside className="border-r border-white/10 bg-black/30 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Workflow Engine</p>
          <h1 className="mt-4 text-3xl font-black">Visual Workflow Builder</h1>

          <div className="mt-8 space-y-3">
            {workflowSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <span>{step}</span>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <section className="p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-5xl font-black">Agentic Workflow Canvas</h2>
              <p className="mt-4 text-slate-300">
                Enterprise orchestration with AI agents and MCP tools.
              </p>
            </div>

            <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
              Publish Workflow
            </button>
          </div>

          <div className="flex h-[70vh] items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/5">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Workflow Canvas</h3>
              <p className="mt-4 text-slate-400">
                Drag triggers, agents, APIs, providers, approvals, and deployments.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
