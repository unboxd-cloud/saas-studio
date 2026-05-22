import { notFound } from 'next/navigation';
import { PageScaffold } from '@/components/page-scaffold';
import { pages } from '@/lib/pages';

export function generateStaticParams() {
  return pages.map((page) => ({ page }));
}

export default function GeneratedPage({ params }: { params: { page: string } }) {
  if (!pages.includes(params.page)) {
    notFound();
  }

  const title = params.page.split('-').map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(' ');

  return <PageScaffold title={title} section="SaaS Studio" />;
}
