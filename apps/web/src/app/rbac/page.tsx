const roles = ['platform.owner','organization.admin','workspace.builder','app.operator','tenant.viewer'];
const permissions = ['create','read','update','delete','deploy','approve','manage_secrets','call_mcp_tool'];

export default function RBACPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Access Control</p>
            <h1 className="mt-4 text-5xl font-black">RBAC Editor</h1>
          </div>
          <button className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950">Create Role</button>
        </div>
        <div className="grid gap-6 lg:grid-cols-[360px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Roles</h2>
            <div className="mt-6 space-y-3">
              {roles.map((role) => <div key={role} className="rounded-xl border border-white/10 bg-black/20 p-4">{role}</div>)}
            </div>
          </aside>
          <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Permissions</h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {permissions.map((permission) => <label key={permission} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-4"><input type="checkbox" defaultChecked className="h-4 w-4" />{permission}</label>)}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
