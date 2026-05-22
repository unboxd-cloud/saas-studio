const tenants = [
  {
    name: 'Acme Inc',
    tier: 'Enterprise',
    region: 'us-east',
    status: 'Active'
  },
  {
    name: 'Globex',
    tier: 'Business',
    region: 'eu-west',
    status: 'Provisioning'
  }
];

export default function TenantsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Tenancy</p>
            <h1 className="mt-4 text-5xl font-black">Tenant Control Plane</h1>
          </div>

          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">
            Create Tenant
          </button>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <table className="w-full border-collapse text-left">
            <thead className="border-b border-white/10 bg-black/20 text-sm text-slate-400">
              <tr>
                <th className="px-6 py-4">Tenant</th>
                <th className="px-6 py-4">Tier</th>
                <th className="px-6 py-4">Region</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tenants.map((tenant) => (
                <tr key={tenant.name} className="border-b border-white/5">
                  <td className="px-6 py-5 font-semibold">{tenant.name}</td>
                  <td className="px-6 py-5">{tenant.tier}</td>
                  <td className="px-6 py-5">{tenant.region}</td>
                  <td className="px-6 py-5">
                    <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-200">
                      {tenant.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <button className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm">
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
