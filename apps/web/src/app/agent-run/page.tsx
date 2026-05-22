'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function AgentRunPage() {
  return <main className="min-h-screen bg-black p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Run Agent" description="Execute a builder, governance, deployment, or support agent." submitLabel="Run Agent" fields={[{name:'agentId',label:'Agent ID',defaultValue:'builder-agent'},{name:'prompt',label:'Prompt',type:'textarea',defaultValue:'Generate a multi-tenant Next.js SaaS blueprint with Appwrite auth and governance.'}]} onSubmit={(values) => api.runAgent(values.agentId, { prompt: values.prompt })} /></div></main>;
}
