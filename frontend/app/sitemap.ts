import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/shared/lib/seo';
import { SOLUTIONS, AUDIENCES } from '@/features/solutions';
import { GUIDES, guidePath } from '@/features/guides';

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

// Every page on the site is listed here.
const CORE_PAGES: { path: string; priority: number; changeFrequency: ChangeFrequency }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/guides', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();
  const pages = [
    ...CORE_PAGES,
    ...SOLUTIONS.map((s) => ({ path: s.path, priority: 0.9, changeFrequency: 'weekly' as const })),
    ...AUDIENCES.map((a) => ({ path: a.path, priority: 0.85, changeFrequency: 'monthly' as const })),
    ...GUIDES.map((g) => ({ path: guidePath(g.slug), priority: 0.7, changeFrequency: 'monthly' as const })),
  ];
  return pages.map((page) => ({
    url: `${SITE_URL}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
