'use client';

import { useState, useEffect } from 'react';

/**
 * Returns true if the current viewport matches the given CSS media query.
 * SSR-safe: returns false during server rendering.
 *
 * @example
 * const isMobile = useMediaQuery('(max-width: 900px)');
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatch = () => setMatches(mediaQueryList.matches);
    updateMatch();

    mediaQueryList.addEventListener('change', updateMatch);
    return () => mediaQueryList.removeEventListener('change', updateMatch);
  }, [query]);

  return matches;
}

// Pre-configured breakpoint hooks for convenience
export const useIsMobile = () => useMediaQuery('(max-width: 900px)');
export const useIsTablet = () => useMediaQuery('(max-width: 1200px)');
export const useIsDesktop = () => useMediaQuery('(min-width: 1201px)');
