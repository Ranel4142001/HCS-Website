import React from 'react';
import Link from 'next/link';

interface ComingSoonPageProps {
  icon: string;
  title: string;
  intro: string;
  /** What the visitor can do right now instead. */
  meanwhile: { label: string; href: string }[];
}

/**
 * Honest placeholder for sections that do not have real content yet.
 * Pages using it should be noindexed and left out of the sitemap until filled.
 */
export function ComingSoonPage({ icon, title, intro, meanwhile }: ComingSoonPageProps) {
  return (
    <main>
      <section className="sol-hero">
        <div className="container sol-hero-inner">
          <nav aria-label="Breadcrumb" className="sol-breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span aria-current="page">{title}</span>
          </nav>
          <div className="sol-icon-badge" aria-hidden="true">{icon}</div>
          <h1 className="sol-hero-title">{title}</h1>
          <p className="sol-hero-tagline">{intro}</p>
          <div className="sol-hero-cta">
            <Link href="/contact" className="btn-sol-primary">Talk to a specialist</Link>
          </div>
        </div>
      </section>
      <section className="sol-section">
        <div className="container sol-narrow">
          <h2 className="sol-block-title">In the meantime</h2>
          <ul className="sol-related">
            {meanwhile.map((m) => (
              <li key={m.href}><Link href={m.href}>{m.label} →</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default ComingSoonPage;
