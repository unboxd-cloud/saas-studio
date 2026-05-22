import Link from 'next/link';
import type { ReactNode } from 'react';

const nav = [
  ['Onboarding', '/onboarding'],
  ['Dashboard', '/dashboard'],
  ['Flows', '/flows'],
  ['Builder', '/builder'],
  ['Generate', '/generate'],
  ['Tenants', '/tenants'],
  ['Providers', '/providers'],
  ['Graph', '/graph'],
  ['Workflows', '/workflows'],
  ['Agents', '/agents'],
  ['Deployments', '/deployments'],
  ['Audit', '/audit'],
  ['Settings', '/settings']
];

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr] bg-slate-950 text-white">
      <aside className="border-r border-white/10 bg-black/30 p-6">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">SaaS Studio</p>
          <h1 className="mt-3 text-2xl font-black">Control Plane</h1>
        </div>
        <nav className="space-y-1 text-sm">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="block rounded-lg px-4 py-3 text-slate-300 transition hover:bg-white/10 hover:text-white">
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main>{children}</main>
    </div>
  );
}
