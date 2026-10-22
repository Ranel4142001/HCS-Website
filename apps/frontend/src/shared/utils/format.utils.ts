/**
 * Pure formatting utility functions.
 * No framework dependencies — usable in any layer including Domain and Application.
 */

/**
 * Formats a number as USD currency string.
 * @example formatCurrency(599) → "$599.00"
 */
export function formatCurrency(amount: number, currency = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a Date as a human-readable string.
 * @example formatDate(new Date()) → "August 6, 2026"
 */
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Formats a Date as a short date string.
 * @example formatShortDate(new Date()) → "08/06/2026"
 */
export function formatShortDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}

/**
 * Returns "X days ago" / "just now" relative time string.
 */
export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Truncates a string to a max character length, appending ellipsis.
 * @example truncate("Hello World", 5) → "Hello..."
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
}

/**
 * Converts a camelCase or PascalCase string to Title Case with spaces.
 * @example toTitleCase("credentialingStatus") → "Credentialing Status"
 */
export function toTitleCase(str: string): string {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

/**
 * Formats a phone number to (XXX) XXX-XXXX format.
 * @example formatPhone("8005557828") → "(800) 555-7828"
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) return `(${match[1]}) ${match[2]}-${match[3]}`;
  return phone;
}

/**
 * Returns the current copyright year string.
 * @example getCopyrightYear() → "© 2026"
 */
export function getCopyrightYear(): string {
  return `© ${new Date().getFullYear()}`;
}
