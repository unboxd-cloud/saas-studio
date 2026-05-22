'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function NewTenantPage() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Create Tenant" description="Provision a tenant for an enterprise SaaS app." submitLabel="Create Tenant" fields={[{name:'name',label:'Tenant Name',defaultValue:'Acme Inc'},{name:'slug',label:'Slug',defaultValue:'acme'},{name:'appId',label:'App ID',defaultValue:'app_demo'},{name:'tier',label:'Tier',defaultValue:'enterprise'},{name:'isolation',label:'Isolation',defaultValue:'shared-database'}]} onSubmit={(values) => api.createTenant(values)} /></div></main>;
}
