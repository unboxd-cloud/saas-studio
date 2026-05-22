const templates = [
  {
    name: 'Multi-tenant CRM',
    type: 'Enterprise SaaS',
    framework: 'Next.js',
    providers: ['Appwrite', 'OpenAI']
  },
  {
    name: 'AI Support Desk',
    type: 'Agentic App',
    framework: 'React',
    providers: ['Appwrite', 'Anthropic']
  },
  {
    name: 'Vendor Portal',
    type: 'B2B Platform',
    framework: 'Next.js',
    providers: ['Appwrite', 'Stripe']
  }
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Marketplace</p>
            <h1 className="mt-4 text-5xl font-black">Template Marketplace</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Create Template
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {templates.map((template) => (
            <div key={template.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-cyan-300/20 px-3 py-1 text-xs text-cyan-200">
                  {template.type}
                </span>
                <span className="text-xs text-slate-500">{template.framework}</span>
              </div>

              <h2 className="mt-6 text-3xl font-black">{template.name}</h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {template.providers.map((provider) => (
                  <span key={provider} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-slate-300">
                    {provider}
                  </span>
                ))}
              </div>

              <button className="mt-8 w-full rounded-xl bg-white px-4 py-3 font-semibold text-slate-950">
                Use Template
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
