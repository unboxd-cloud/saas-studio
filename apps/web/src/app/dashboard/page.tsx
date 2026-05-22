import Link from 'next/link';

const metrics = ['Apps', 'Tenants', 'Providers', 'Agents'];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Start Here</p>
          <h1 className="mt-4 text-5xl font-black">Build your SaaS in 60 mins</h1>
          <p className="mt-4 max-w-2xl text-slate-300">Use the onboarding wizard to choose stack, tools, data, prompt, generate blueprint, and trigger deployment.</p>
          <Link href="/onboarding" className="mt-8 inline-flex rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950">Start Onboarding</Link>
        </section>
        <section className="grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => <div key={metric} className="rounded-3xl border border-white/10 bg-white/5 p-6"><p className="text-sm text-slate-400">{metric}</p><p className="mt-4 text-4xl font-black">0</p></div>)}
        </section>
      </div>
    </main>
  );
}
