'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className="sol-hero">
        <div className="container sol-hero-inner">
          <h1 className="sol-hero-title">This page didn&apos;t load</h1>
          <p className="sol-hero-tagline">
            Something went wrong on our side. Try again, and if it keeps happening, let us know.
          </p>
          <div className="sol-hero-cta">
            <button type="button" onClick={reset} className="btn-sol-primary">Try again</button>
            <Link href="/contact" className="btn-sol-ghost">Contact us</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
