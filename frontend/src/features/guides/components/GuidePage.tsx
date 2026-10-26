import React from 'react';
import Link from 'next/link';
import JsonLd from '@/shared/components/seo/JsonLd';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/shared/lib/seo';
import type { Guide, GuideSection } from '../types';
import { guidePath } from '../content/paths';
import './GuidePage.css';

function Section({ section }: { section: GuideSection }) {
  const List = section.ordered ? 'ol' : 'ul';
  return (
    <section className="guide-section">
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
      {section.list && (
        <List className={section.ordered ? 'guide-steps' : 'guide-list'}>
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </List>
      )}
    </section>
  );
}

/** Layout for an educational guide. Content lives in ../content/guides.ts. */
export function GuidePage({ guide }: { guide: Guide }) {
  const path = guidePath(guide.slug);
  const updated = new Date(`${guide.updated}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ headline: guide.title, description: guide.meta.description, path, dateModified: guide.updated }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Guides', path: '/guides' },
            { name: guide.title, path },
          ]),
          faqSchema(guide.faqs),
        ]}
      />
      <main>
        <section className="sol-hero">
          <div className="container sol-hero-inner">
            <nav aria-label="Breadcrumb" className="sol-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <Link href="/guides">Guides</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{guide.title}</span>
            </nav>
            <h1 className="sol-hero-title">{guide.title}</h1>
            <p className="sol-hero-tagline">{guide.lead}</p>
            <p className="guide-updated">
              Last reviewed <time dateTime={guide.updated}>{updated}</time>
            </p>
          </div>
        </section>

        <article className="sol-section">
          <div className="container sol-narrow guide-body">
            {guide.sections.map((section) => <Section key={section.heading} section={section} />)}
          </div>
        </article>

        <section className="sol-section sol-section--tint">
          <div className="container sol-narrow">
            <h2 className="sol-block-title">Frequently asked questions</h2>
            <div className="guide-faq">
              {guide.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="sol-section">
          <div className="container sol-narrow">
            <h2 className="sol-block-title">Keep reading</h2>
            <ul className="sol-related">
              {guide.related.map((r) => (
                <li key={r.href}><Link href={r.href}>{r.label} →</Link></li>
              ))}
            </ul>
            <div className="guide-cta">
              <p>Would you rather have a specialist handle it? Tell us about your providers and we will send a quote and a realistic timeline.</p>
              <Link href="/contact" className="btn-sol-primary">Get a free quote</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default GuidePage;
