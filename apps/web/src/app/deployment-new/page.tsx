'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function NewDeploymentPage() {
  return <main className="min-h-screen bg-black p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Create Deployment" description="Deploy a generated SaaS app to a target platform." submitLabel="Deploy App" fields={[{name:'appId',label:'App ID',defaultValue:'app_demo'},{name:'environment',label:'Environment',defaultValue:'production'},{name:'target',label:'Target',defaultValue:'appwrite-sites'},{name:'version',label:'Version',defaultValue:'0.1.0'}]} onSubmit={(values) => api.createDeployment(values)} /></div></main>;
}
