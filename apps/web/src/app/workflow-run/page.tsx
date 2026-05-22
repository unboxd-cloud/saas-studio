'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function WorkflowRunPage() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Run Workflow" description="Execute an agentic workflow with inputs." submitLabel="Run Workflow" fields={[{name:'workflowId',label:'Workflow ID',defaultValue:'workflow_build_app'},{name:'input',label:'Input JSON',type:'textarea',defaultValue:'{"action":"generate","target":"nextjs-app"}'}]} onSubmit={(values) => api.runWorkflow(values.workflowId, { input: values.input })} /></div></main>;
}
