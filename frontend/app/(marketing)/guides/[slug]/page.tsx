import { notFound } from 'next/navigation';
import { GUIDES, GuidePage, guidePath } from '@/features/guides';
import { buildMetadata } from '@/shared/lib/seo';

type Props = { params: Promise<{ slug: string }> };

// Every guide is prebuilt as static HTML; unknown slugs return 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  return guide ? buildMetadata({ ...guide.meta, path: guidePath(guide.slug) }) : {};
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const guide = GUIDES.find((g) => g.slug === slug);
  if (!guide) notFound();
  return <GuidePage guide={guide} />;
}
