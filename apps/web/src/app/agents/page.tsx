const agents = [
  { name: 'Builder Agent', model: 'gpt-4.1', tools: 12, status: 'Active' },
  { name: 'Governance Agent', model: 'claude-sonnet', tools: 8, status: 'Active' },
  { name: 'Deployment Agent', model: 'gemini-2.5', tools: 5, status: 'Training' }
];

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">AI Agents</p>
            <h1 className="mt-4 text-5xl font-black">Agent Registry</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Create Agent
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {agents.map((agent) => (
            <div key={agent.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs text-cyan-200">
                  {agent.model}
                </span>
                <span className="text-xs text-emerald-300">{agent.status}</span>
              </div>

              <h2 className="mt-6 text-3xl font-black">{agent.name}</h2>

              <div className="mt-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4">
                <div>
                  <p className="text-sm text-slate-400">Connected Tools</p>
                  <p className="mt-1 text-2xl font-bold">{agent.tools}</p>
                </div>

                <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
