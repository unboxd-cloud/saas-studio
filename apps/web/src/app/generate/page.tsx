'use client';

import { useState } from 'react';

export default function GeneratePage() {
  const [prompt, setPrompt] = useState('Build a multi-tenant AI CRM with Appwrite auth, RBAC, audit logs, workflows, and OpenAI integration.');

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col p-8">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Prompt-to-App</p>
            <h1 className="mt-4 text-5xl font-black">Generate Enterprise SaaS</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Generate Blueprint
          </button>
        </div>

        <div className="grid flex-1 gap-8 lg:grid-cols-[1fr_420px]">
          <section className="rounded-3xl border border-white/10 bg-black/20 p-6">
            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              className="h-full min-h-[600px] w-full resize-none rounded-2xl border border-white/10 bg-slate-950 p-6 text-lg outline-none"
            />
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Detected Stack</h2>

              <div className="mt-6 flex flex-wrap gap-2">
                {['Next.js','Appwrite','OpenAI','RBAC','MCP','Audit Logs'].map((item) => (
                  <span key={item} className="rounded-full bg-cyan-300/20 px-3 py-2 text-sm text-cyan-200">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-2xl font-bold">Generated Modules</h2>

              <div className="mt-6 space-y-3">
                {['Auth','Tenants','Providers','Agents','Workflows','Deployments'].map((module) => (
                  <div key={module} className="rounded-xl border border-white/10 bg-black/20 p-4">
                    {module}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
