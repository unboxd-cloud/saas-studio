'use client';

import { FlowForm } from '@/components/flow/flow-form';
import { api } from '@/lib/api-client';

export default function ScorecardRunPage() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-4xl"><FlowForm title="Run Governance Scorecard" description="Evaluate enterprise readiness, security, tenancy, provider, AI, and deployment governance." submitLabel="Run Scorecard" fields={[{name:'scorecardId',label:'Scorecard ID',defaultValue:'enterprise-readiness'},{name:'targetType',label:'Target Type',defaultValue:'app'},{name:'targetId',label:'Target ID',defaultValue:'app_demo'}]} onSubmit={(values) => api.runScorecard(values.scorecardId, values)} /></div></main>;
}
