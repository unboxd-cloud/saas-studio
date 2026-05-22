import { DataUploadFlow } from '@/components/builder/data-upload-flow';
import { FeatureFlowBuilder } from '@/components/builder/feature-flow-builder';

export default function BuilderPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-10">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">App Builder</p>
          <h1 className="mt-4 text-5xl font-black">Feature-Specific Flow Builder</h1>
          <p className="mt-4 max-w-3xl text-slate-300">Generate schema, screens, APIs, workflows, roles, audit events, notifications, and deployment targets from a business feature.</p>
        </div>
        <FeatureFlowBuilder />
        <DataUploadFlow />
      </div>
    </main>
  );
}
