const deployments = [
  { app: 'Agency CRM', environment: 'production', target: 'Appwrite Sites', status: 'Ready', version: 'v0.1.0' },
  { app: 'Vendor Portal', environment: 'staging', target: 'Vercel', status: 'Building', version: 'v0.2.3' }
];

export default function DeploymentsPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Deployment Center</p>
            <h1 className="mt-4 text-5xl font-black">Ship Governed SaaS</h1>
          </div>
          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">New Deployment</button>
        </div>

        <div className="grid gap-5">
          {deployments.map((deployment) => (
            <div key={`${deployment.app}-${deployment.environment}`} className="grid grid-cols-5 items-center rounded-3xl border border-white/10 bg-white/5 p-6">
              <div>
                <p className="text-sm text-slate-400">App</p>
                <p className="mt-1 font-semibold">{deployment.app}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Environment</p>
                <p className="mt-1 font-semibold">{deployment.environment}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Target</p>
                <p className="mt-1 font-semibold">{deployment.target}</p>
              </div>
              <div>
                <p className="text-sm text-slate-400">Version</p>
                <p className="mt-1 font-semibold">{deployment.version}</p>
              </div>
              <div className="flex justify-end">
                <span className="rounded-full bg-emerald-400/20 px-4 py-2 text-sm text-emerald-200">{deployment.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
