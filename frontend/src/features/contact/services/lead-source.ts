// Readable names for the pages that show the contact form; any other page is shown by its path.
const PAGE_NAMES: Record<string, string> = {
  '/': 'Home page',
  '/contact': 'Contact page',
  '/pricing': 'Pricing page',
  '/services': 'Services page',
  '/about': 'About page',
  '/faq': 'FAQ page',
  '/guides': 'Guides page',
};

/** The SOURCE value for a lead, e.g. "Website – Pricing page", from the path the browser reported. */
export function leadSource(page?: string): string {
  const path = (page ?? '').split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  // The path comes from the browser, so only accept plain site paths before writing it to the CRM.
  if (!/^\/[a-z0-9\-/]*$/i.test(path)) return 'Website contact form';
  return `Website – ${PAGE_NAMES[path] ?? path}`;
}
