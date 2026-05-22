'use client';

export function AppBlueprintPreview({ blueprint }: { blueprint: any }) {
  if (!blueprint) return <section className="rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-400">Generate a blueprint to preview files.</section>;
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">Generated App Blueprint</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {(blueprint.files || []).map((file: any) => (
          <div key={file.path} className="rounded-xl border border-white/10 bg-black/30 p-4">
            <p className="font-mono text-sm text-cyan-200">{file.path}</p>
            <p className="mt-2 text-sm text-slate-400">{file.type} · {file.purpose}</p>
          </div>
        ))}
      </div>
      <pre className="mt-6 max-h-96 overflow-auto rounded-xl bg-black/40 p-4 text-xs text-slate-300">{JSON.stringify(blueprint, null, 2)}</pre>
    </section>
  );
}
