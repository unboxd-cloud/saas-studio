'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function ProviderConnectPage() {
  return <main className="min-h-screen bg-black p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Connect Provider" description="Connect Appwrite, GitHub, Vercel, AI, billing, storage, and database providers." submitLabel="Connect Provider" fields={[{name:'provider',label:'Provider',defaultValue:'appwrite'},{name:'category',label:'Category',defaultValue:'backend'},{name:'name',label:'Connection Name',defaultValue:'Production Appwrite'},{name:'endpoint',label:'Endpoint',defaultValue:'https://cloud.appwrite.io/v1'},{name:'projectId',label:'Project ID'},{name:'region',label:'Region',defaultValue:'fra'}]} onSubmit={(values) => api.connectProvider(values)} /></div></main>;
}
