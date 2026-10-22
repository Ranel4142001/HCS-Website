/**
 * DOM and browser utility functions.
 * These are client-safe helpers — guard with typeof window checks where needed.
 */

/**
 * Smoothly scrolls the page to a given hash target element.
 */
export function scrollToHash(hash: string): void {
  const element = document.querySelector(hash);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Returns whether the current scroll position exceeds a given threshold.
 */
export function isScrolledPast(threshold: number): boolean {
  if (typeof window === 'undefined') return false;
  return window.scrollY > threshold;
}

/**
 * Copies a string to the clipboard. Returns true on success.
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

/**
 * Returns the current viewport width.
 */
export function getViewportWidth(): number {
  if (typeof window === 'undefined') return 1280;
  return window.innerWidth;
}

/**
 * Checks if the current viewport is a mobile breakpoint (<= 900px).
 */
export function isMobileViewport(): boolean {
  return getViewportWidth() <= 900;
}
