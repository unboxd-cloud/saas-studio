const providers = [
  {
    category: 'Backend',
    items: ['Appwrite', 'Supabase', 'Firebase']
  },
  {
    category: 'Database',
    items: ['Postgres', 'Neon', 'PlanetScale']
  },
  {
    category: 'Deployment',
    items: ['Vercel', 'Netlify', 'Cloudflare']
  },
  {
    category: 'AI',
    items: ['OpenAI', 'Anthropic', 'Google Gemini']
  }
];

export default function ProvidersPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Provider Registry</p>
          <h1 className="mt-4 text-5xl font-black">Connect Infrastructure</h1>
          <p className="mt-4 max-w-3xl text-slate-300">
            Provider agnostic enterprise application platform.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {providers.map((group) => (
            <section
              key={group.category}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold">{group.category}</h2>
                <button className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
                  Add Provider
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/20 p-5"
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{item}</h3>
                      <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                        Ready
                      </span>
                    </div>

                    <p className="mt-3 text-sm text-slate-400">
                      Pluggable provider adapter.
                    </p>

                    <button className="mt-5 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium transition hover:bg-white/10">
                      Connect
                    </button>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
