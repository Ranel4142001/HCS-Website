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

/**
 * The SOURCE value for a lead from the path the browser reported, e.g. "Website – Pricing page", or
 * "Website – Pricing page (chat)" when it came from the Quick Answers chat.
 */
export function leadSource(page?: string, origin?: 'form' | 'chat'): string {
  const suffix = origin === 'chat' ? ' (chat)' : '';
  const path = (page ?? '').split(/[?#]/)[0].replace(/\/+$/, '') || '/';
  // The path comes from the browser, so only accept plain site paths before writing it to the CRM.
  if (!/^\/[a-z0-9\-/]*$/i.test(path)) return `Website contact form${suffix}`;
  return `Website – ${PAGE_NAMES[path] ?? path}${suffix}`;
}
