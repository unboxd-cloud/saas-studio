const endpoints = ['GET /v1/apps','POST /v1/apps','GET /v1/tenants','POST /v1/workflows/run','POST /v1/mcp/tools/call'];

export default function APIDesignerPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">API-first</p><h1 className="mt-4 text-5xl font-black">API Designer</h1></div>
          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">Create Endpoint</button>
        </div>
        <div className="grid gap-4">{endpoints.map((endpoint) => <div key={endpoint} className="rounded-2xl border border-white/10 bg-white/5 p-6 font-mono">{endpoint}</div>)}</div>
      </div>
    </main>
  );
}
