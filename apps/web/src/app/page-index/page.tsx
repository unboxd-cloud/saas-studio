import Link from 'next/link';
import { pageCount, pages } from '@/lib/pages';

export default function PageIndex() {
  return <main className="min-h-screen bg-slate-950 p-8 text-white"><div className="mx-auto max-w-7xl"><p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Generated Platform</p><h1 className="mt-4 text-5xl font-black">{pageCount} Pages</h1><div className="mt-8 grid gap-3 md:grid-cols-3 xl:grid-cols-5">{pages.map((page) => <Link key={page} href={`/${page}`} className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm hover:bg-white/10">{page}</Link>)}</div></div></main>;
}
