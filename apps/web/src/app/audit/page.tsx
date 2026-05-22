const events = [
  {
    action: 'deployment.create',
    actor: 'deployment-agent',
    resource: 'Agency CRM',
    risk: 'medium'
  },
  {
    action: 'tenant.create',
    actor: 'admin@acme.io',
    resource: 'Globex',
    risk: 'low'
  },
  {
    action: 'provider.connect',
    actor: 'builder-agent',
    resource: 'Appwrite',
    risk: 'high'
  }
];

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Governance</p>
            <h1 className="mt-4 text-5xl font-black">Audit Center</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Export Logs
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event, index) => (
            <div
              key={`${event.action}-${index}`}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div>
                <p className="text-sm text-slate-400">{event.actor}</p>
                <h2 className="mt-2 text-2xl font-bold">{event.action}</h2>
                <p className="mt-2 text-slate-400">{event.resource}</p>
              </div>

              <span className="rounded-full bg-red-400/20 px-4 py-2 text-sm text-red-200">
                {event.risk}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
