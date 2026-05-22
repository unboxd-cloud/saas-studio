'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function GraphQueryPage() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Query Knowledge Graph" description="Query products, modules, features, APIs, SDKs, DB tables, and governance relationships." submitLabel="Query Graph" fields={[{name:'query',label:'Query',type:'textarea',defaultValue:'MATCH product:SaaSStudio -> modules -> features'}]} onSubmit={(values) => api.queryGraph(values)} /></div></main>;
}
