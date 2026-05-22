const users = [
  { name: 'Platform Owner', email: 'owner@saas.studio', role: 'platform.owner', status: 'Active' },
  { name: 'Builder Agent', email: 'builder-agent@system', role: 'agent.operator', status: 'Active' }
];

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Identity</p>
            <h1 className="mt-4 text-5xl font-black">Users</h1>
          </div>
          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">Invite User</button>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5">
          {users.map((user) => (
            <div key={user.email} className="grid grid-cols-4 border-b border-white/5 p-6">
              <div className="font-semibold">{user.name}</div>
              <div className="text-slate-300">{user.email}</div>
              <div>{user.role}</div>
              <div className="text-emerald-300">{user.status}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
