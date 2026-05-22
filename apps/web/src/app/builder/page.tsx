const steps = [
  'Choose language',
  'Choose framework',
  'Choose IDE',
  'Choose vibe coder',
  'Choose agentic coder',
  'Connect providers',
  'Upload data',
  'Describe your SaaS',
  'Generate blueprint',
  'Start building'
];

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid min-h-screen grid-cols-[320px_1fr_340px]">
        <aside className="border-r border-white/10 bg-slate-950 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Builder Flow</p>
          <h1 className="mt-4 text-3xl font-black">SaaS in 60 Mins</h1>

          <div className="mt-10 space-y-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300 font-bold text-slate-950">
                  {index + 1}
                </div>
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </aside>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-slate-900 p-8">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.2),transparent_60%)]" />
          </div>

          <div className="relative z-10 flex h-full flex-col">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-5xl font-black">Agentic Enterprise Builder</h2>
                <p className="mt-4 max-w-2xl text-slate-300">
                  No-code, low-code, vibe-code, and full-code platform.
                </p>
              </div>

              <button className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950">
                Generate App
              </button>
            </div>

            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-white/10">
                <div className="text-center">
                  <h3 className="text-3xl font-bold">Builder Canvas</h3>
                  <p className="mt-4 text-slate-400">
                    AI-generated SaaS architecture, pages, workflows, APIs, tenants, roles, and providers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <aside className="border-l border-white/10 bg-slate-950 p-6">
          <h2 className="text-2xl font-bold">Properties</h2>

          <div className="mt-6 space-y-4">
            {['Next.js','Appwrite','TypeScript','Bolt','OpenCode'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span>{item}</span>
                  <span className="text-xs text-emerald-300">Selected</span>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
