'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function NewAppPage() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Create App" description="Create a governed Next.js SaaS app." submitLabel="Create App" fields={[{name:'name',label:'App Name',defaultValue:'Agency CRM'},{name:'framework',label:'Framework',defaultValue:'nextjs'},{name:'runtime',label:'Runtime',defaultValue:'node'},{name:'provider',label:'Provider',defaultValue:'appwrite'},{name:'mode',label:'Builder Mode',defaultValue:'vibe-code'}]} onSubmit={(values) => api.createApp(values)} /></div></main>;
}
