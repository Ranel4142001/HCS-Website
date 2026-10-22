import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://healthcredstat.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const routes: Array<{ path: string; priority: number; changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' }> = [
    // Core pages
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },

    // Solutions (High commercial intent)
    { path: '/solutions/cvo-credentialing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions/provider-enrollment', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/solutions/roster-management', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/solutions/delegated-credentialing', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/solutions/privileging', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/solutions/cross-state-licensing', priority: 0.85, changeFrequency: 'weekly' },

    // Who We Help (Audience persona pages)
    { path: '/who-we-help/provider-groups', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/who-we-help/health-plans', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/who-we-help/health-systems', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/who-we-help/digital-health', priority: 0.85, changeFrequency: 'monthly' },

    // Resources & Company
    { path: '/resources/library', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/resources/blog', priority: 0.75, changeFrequency: 'daily' },
    { path: '/resources/case-studies', priority: 0.75, changeFrequency: 'weekly' },
    { path: '/company/experts', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/company/newsroom', priority: 0.7, changeFrequency: 'weekly' },
    { path: '/company/compliance', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/company/careers', priority: 0.65, changeFrequency: 'weekly' },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
