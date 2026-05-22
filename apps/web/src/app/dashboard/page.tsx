import Link from 'next/link';

const metrics = ['Apps', 'Tenants', 'Providers', 'Saved Features'];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Start Here</p>
          <h1 className="mt-4 text-5xl font-black">Build your SaaS from features</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Use the app builder to generate feature-specific schema, UI, APIs, workflows, permissions, audit events, and exportable app blueprints.</p>
          <div className="mt-8 flex gap-3">
            <Link href="/builder" className="inline-flex rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950">Open Builder</Link>
            <Link href="/onboarding" className="inline-flex rounded-xl border border-white/10 px-6 py-4 font-semibold text-white">Start Onboarding</Link>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => <div key={metric} className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-sm text-slate-400">{metric}</p><p className="mt-4 text-4xl font-black">0</p></div>)}
        </section>
      </div>
    </main>
  );
}
