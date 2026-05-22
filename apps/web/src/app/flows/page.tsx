'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function FlowsPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Interactive Flows</p>
          <h1 className="mt-4 text-5xl font-black">Build SaaS End-to-End</h1>
          <p className="mt-4 text-slate-300">Create app, tenant, provider, workflow, deployment, graph query, agent run, and governance scorecard.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <FlowForm title="Create App" description="Create a multi-tenant SaaS app." submitLabel="Create App" fields={[{name:'name',label:'Name',defaultValue:'Agency CRM'},{name:'framework',label:'Framework',defaultValue:'nextjs'},{name:'provider',label:'Provider',defaultValue:'appwrite'}]} onSubmit={(values) => api.createApp(values)} />
          <FlowForm title="Create Tenant" description="Provision a tenant for an app." submitLabel="Create Tenant" fields={[{name:'name',label:'Tenant',defaultValue:'Acme Inc'},{name:'appId',label:'App ID',defaultValue:'app_demo'},{name:'isolation',label:'Isolation',defaultValue:'shared-database'}]} onSubmit={(values) => api.createTenant(values)} />
          <FlowForm title="Connect Provider" description="Connect Appwrite or other providers." submitLabel="Connect Provider" fields={[{name:'provider',label:'Provider',defaultValue:'appwrite'},{name:'category',label:'Category',defaultValue:'backend'},{name:'endpoint',label:'Endpoint',defaultValue:'https://cloud.appwrite.io/v1'}]} onSubmit={(values) => api.connectProvider(values)} />
          <FlowForm title="Run Workflow" description="Run an agentic workflow." submitLabel="Run Workflow" fields={[{name:'workflowId',label:'Workflow ID',defaultValue:'workflow_demo'},{name:'input',label:'Input JSON',type:'textarea',defaultValue:'{"action":"build"}'}]} onSubmit={(values) => api.runWorkflow(values.workflowId, { input: values.input })} />
          <FlowForm title="Deploy App" description="Create a deployment." submitLabel="Deploy" fields={[{name:'appId',label:'App ID',defaultValue:'app_demo'},{name:'environment',label:'Environment',defaultValue:'production'},{name:'target',label:'Target',defaultValue:'appwrite-sites'}]} onSubmit={(values) => api.createDeployment(values)} />
          <FlowForm title="Query Graph" description="Ask the platform graph." submitLabel="Query" fields={[{name:'query',label:'Query',type:'textarea',defaultValue:'MATCH product -> modules -> features'}]} onSubmit={(values) => api.queryGraph(values)} />
          <FlowForm title="Run Agent" description="Execute an AI agent." submitLabel="Run Agent" fields={[{name:'agentId',label:'Agent ID',defaultValue:'builder-agent'},{name:'prompt',label:'Prompt',type:'textarea',defaultValue:'Generate a SaaS blueprint'}]} onSubmit={(values) => api.runAgent(values.agentId, { prompt: values.prompt })} />
          <FlowForm title="Run Scorecard" description="Evaluate governance." submitLabel="Run Scorecard" fields={[{name:'scorecardId',label:'Scorecard ID',defaultValue:'enterprise-readiness'},{name:'targetType',label:'Target Type',defaultValue:'app'},{name:'targetId',label:'Target ID',defaultValue:'app_demo'}]} onSubmit={(values) => api.runScorecard(values.scorecardId, values)} />
        </div>
      </div>
    </main>
  );
}
