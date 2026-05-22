'use client';

import { useMemo, useState } from 'react';

export function DataUploadFlow() {
  const [sourceName, setSourceName] = useState('customers.csv');
  const plan = useMemo(() => ({
    sourceName,
    acceptedFormats: ['csv', 'xlsx', 'json'],
    detectionSteps: ['parse headers', 'detect column types', 'detect tenant fields', 'detect relationships'],
    mappingSteps: ['map columns to entities', 'map enum values', 'map owner fields', 'map timestamps'],
    validationRules: ['required fields', 'valid emails', 'tenantId present or derivable', 'duplicate detection'],
    generatedEntities: ['customer_records', 'customer_imports', 'customer_validation_errors']
  }), [sourceName]);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-2xl font-bold">Data Upload Flow</h2>
      <input value={sourceName} onChange={(event) => setSourceName(event.target.value)} className="mt-4 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" />
      <pre className="mt-4 max-h-96 overflow-auto rounded-xl bg-black/40 p-4 text-xs text-slate-300">{JSON.stringify(plan, null, 2)}</pre>
    </section>
  );
}
