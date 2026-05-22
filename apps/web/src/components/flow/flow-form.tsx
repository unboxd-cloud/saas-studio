'use client';

import { useState } from 'react';

type Field = {
  name: string;
  label: string;
  placeholder?: string;
  defaultValue?: string;
  type?: 'text' | 'password' | 'email' | 'textarea';
};

type FlowFormProps = {
  title: string;
  description: string;
  submitLabel: string;
  fields: Field[];
  onSubmit: (values: Record<string, string>) => Promise<unknown>;
};

export function FlowForm({ title, description, submitLabel, fields, onSubmit }: FlowFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() => Object.fromEntries(fields.map((field) => [field.name, field.defaultValue || ''])));
  const [status, setStatus] = useState('Ready');
  const [busy, setBusy] = useState(false);

  async function submit() {
    setBusy(true);
    setStatus('Running...');
    try {
      const result = await onSubmit(values);
      setStatus(JSON.stringify(result, null, 2));
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm text-slate-400">{description}</p>
      </div>
      <div className="space-y-4">
        {fields.map((field) => field.type === 'textarea' ? (
          <textarea key={field.name} value={values[field.name] || ''} onChange={(event) => setValues({ ...values, [field.name]: event.target.value })} placeholder={field.placeholder} className="min-h-32 w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" />
        ) : (
          <input key={field.name} value={values[field.name] || ''} onChange={(event) => setValues({ ...values, [field.name]: event.target.value })} type={field.type || 'text'} placeholder={field.placeholder || field.label} className="w-full rounded-xl border border-white/10 bg-black/30 p-4 outline-none focus:ring-2 focus:ring-cyan-300" />
        ))}
        <button onClick={submit} disabled={busy} className="w-full rounded-xl bg-cyan-300 px-5 py-4 font-semibold text-slate-950 disabled:opacity-50">{busy ? 'Running...' : submitLabel}</button>
        <pre className="max-h-80 overflow-auto rounded-xl border border-white/10 bg-black/40 p-4 text-xs text-slate-300">{status}</pre>
      </div>
    </section>
  );
}
