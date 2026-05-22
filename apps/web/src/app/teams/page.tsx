const teams = [
  { name: 'Platform', type: 'organization', members: 4 },
  { name: 'Tenant Admins', type: 'tenant', members: 12 },
  { name: 'Agents', type: 'system', members: 3 }
];

export default function TeamsPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Teams</p>
            <h1 className="mt-4 text-5xl font-black">Team Management</h1>
          </div>
          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">Create Team</button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {teams.map((team) => (
            <div key={team.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-cyan-300">{team.type}</p>
              <h2 className="mt-4 text-3xl font-black">{team.name}</h2>
              <p className="mt-6 text-slate-300">{team.members} members</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
