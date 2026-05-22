'use client';

import { useMemo, useState } from 'react';
import { api } from '@/lib/api-client';

type OnboardingState = {
  language: string;
  framework: string;
  ide: string;
  coder: string;
  provider: string;
  appName: string;
  tenantName: string;
  prompt: string;
};

const steps = ['Stack', 'Tools', 'Data', 'Prompt', 'Blueprint', 'Deploy'];

export default function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [state, setState] = useState<OnboardingState>({
    language: 'TypeScript',
    framework: 'Next.js',
    ide: 'VS Code',
    coder: 'Bolt + OpenCode',
    provider: 'Appwrite',
    appName: 'Agency CRM',
    tenantName: 'Acme Inc',
    prompt: 'Build a multi-tenant AI CRM with Appwrite auth, RBAC, audit logs, workflows, and deployment governance.'
  });
  const [events, setEvents] = useState<string[]>(['Ready']);
  const [busy, setBusy] = useState(false);

  const blueprint = useMemo(() => ({
    app: state.appName,
    tenant: state.tenantName,
    stack: [state.language, state.framework, state.provider],
    tools: [state.ide, state.coder],
    modules: ['auth', 'tenants', 'users', 'teams', 'providers', 'workflows', 'agents', 'deployments', 'audit', 'scorecards']
  }), [state]);

  function update(key: keyof OnboardingState, value: string) {
    setState((current) => ({ ...current, [key]: value }));
  }

  async function runEndToEnd() {
    setBusy(true);
    setEvents(['Creating app...']);
    const app = await api.createApp({ name: state.appName, framework: state.framework, language: state.language, provider: state.provider, prompt: state.prompt });
    setEvents((items) => [...items, JSON.stringify(app)]);

    setEvents((items) => [...items, 'Creating tenant...']);
    const tenant = await api.createTenant({ name: state.tenantName, appId: 'app_demo', isolation: 'shared-database', tier: 'enterprise' });
    setEvents((items) => [...items, JSON.stringify(tenant)]);

    setEvents((items) => [...items, 'Connecting provider...']);
    const provider = await api.connectProvider({ provider: state.provider.toLowerCase(), category: 'backend', name: `${state.provider} Production` });
    setEvents((items) => [...items, JSON.stringify(provider)]);

    setEvents((items) => [...items, 'Running builder agent...']);
    const agent = await api.runAgent('builder-agent', { prompt: state.prompt, blueprint });
    setEvents((items) => [...items, JSON.stringify(agent)]);

    setEvents((items) => [...items, 'Deploying app...']);
    const deployment = await api.createDeployment({ appId: 'app_demo', environment: 'production', target: 'appwrite-sites', blueprint });
    setEvents((items) => [...items, JSON.stringify(deployment), 'Done']);
    setBusy(false);
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Onboarding</p>
            <h1 className="mt-4 text-5xl font-black">SaaS in 60 Mins</h1>
            <p className="mt-4 text-slate-300">Choose stack, tools, data, prompt, blueprint, and deploy.</p>
          </div>
          <button onClick={runEndToEnd} disabled={busy} className="rounded-xl bg-cyan-300 px-6 py-4 font-semibold text-slate-950 disabled:opacity-50">
            {busy ? 'Running...' : 'Run End-to-End'}
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr_420px]">
          <aside className="space-y-3">
            {steps.map((item, index) => (
              <button key={item} onClick={() => setStep(index)} className={`w-full rounded-2xl border p-4 text-left ${step === index ? 'border-cyan-300 bg-cyan-300/10' : 'border-white/10 bg-white/5'}`}>
                <span className="text-sm text-slate-400">Step {index + 1}</span>
                <p className="mt-1 text-lg font-bold">{item}</p>
              </button>
            ))}
          </aside>

          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            {step === 0 && <div className="space-y-4"><Input label="Language" value={state.language} onChange={(value) => update('language', value)} /><Input label="Framework" value={state.framework} onChange={(value) => update('framework', value)} /><Input label="Provider" value={state.provider} onChange={(value) => update('provider', value)} /></div>}
            {step === 1 && <div className="space-y-4"><Input label="IDE" value={state.ide} onChange={(value) => update('ide', value)} /><Input label="Coder" value={state.coder} onChange={(value) => update('coder', value)} /></div>}
            {step === 2 && <div className="space-y-4"><Input label="App Name" value={state.appName} onChange={(value) => update('appName', value)} /><Input label="Tenant Name" value={state.tenantName} onChange={(value) => update('tenantName', value)} /></div>}
            {step === 3 && <textarea value={state.prompt} onChange={(event) => update('prompt', event.target.value)} className="min-h-80 w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" />}
            {step === 4 && <pre className="overflow-auto rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-slate-300">{JSON.stringify(blueprint, null, 2)}</pre>}
            {step === 5 && <div className="space-y-4"><p className="text-slate-300">Deploy target: Appwrite Sites</p><button onClick={runEndToEnd} disabled={busy} className="rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 disabled:opacity-50">Deploy End-to-End</button></div>}
          </section>

          <aside className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <h2 className="text-2xl font-bold">Run Log</h2>
            <div className="mt-6 space-y-3 text-xs text-slate-300">
              {events.map((event, index) => <pre key={index} className="whitespace-pre-wrap rounded-xl border border-white/10 bg-white/5 p-3">{event}</pre>)}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block"><span className="text-sm text-slate-400">{label}</span><input value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" /></label>;
}
