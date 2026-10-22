'use client';

import { useState, useEffect } from 'react';

/**
 * Tracks the window scroll position.
 * Returns the current scrollY value and whether it has passed a given threshold.
 *
 * @example
 * const { scrollY, isPastThreshold } = useScrollPosition(12);
 */
export function useScrollPosition(threshold = 0): {
  scrollY: number;
  isPastThreshold: boolean;
} {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    // Set initial value
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollY,
    isPastThreshold: scrollY > threshold,
  };
}
