import React from 'react';
import Link from 'next/link';
import JsonLd from '@/shared/components/seo/JsonLd';
import { breadcrumbSchema } from '@/shared/lib/seo';
import type { LegalDoc, LegalSection } from '../types';
import './LegalPage.css';

/** One numbered section; `crossLink` adds a link after the text (used to point Terms at the Privacy Policy). */
function Section({ section, crossLink }: { section: LegalSection; crossLink?: React.ReactNode }) {
  return (
    <section className="legal-section" id={section.id} aria-labelledby={`${section.id}-title`}>
      <h2 id={`${section.id}-title`}>{section.heading}</h2>
      {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
      {section.list && (
        <ul className="legal-list">
          {section.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}
      {section.after?.map((p) => <p key={p}>{p}</p>)}
      {crossLink}
    </section>
  );
}

/** Layout for the Privacy Policy and Terms of Service. Content lives in ../content/legal.ts. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  const updated = new Date(`${doc.updated}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  });
  const other = doc.path === '/privacy'
    ? { href: '/terms', label: 'Terms of Service' }
    : { href: '/privacy', label: 'Privacy Policy' };

  return (
    <>
      <JsonLd data={[breadcrumbSchema([{ name: 'Home', path: '/' }, { name: doc.title, path: doc.path }])]} />
      <main>
        <section className="sol-hero">
          <div className="container sol-hero-inner">
            <nav aria-label="Breadcrumb" className="sol-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{doc.title}</span>
            </nav>
            <h1 className="sol-hero-title">{doc.title}</h1>
            <p className="sol-hero-tagline">{doc.lead}</p>
            <p className="legal-updated">
              Last updated <time dateTime={doc.updated}>{updated}</time>
            </p>
          </div>
        </section>

        <article className="sol-section">
          <div className="container sol-narrow legal-layout">
            <nav className="legal-toc" aria-label="On this page">
              <p className="legal-toc-title">On this page</p>
              <ol>
                {doc.sections.map((s) => (
                  <li key={s.id}><a href={`#${s.id}`}>{s.heading}</a></li>
                ))}
              </ol>
            </nav>

            <div className="legal-body">
              {doc.sections.map((section) => (
                <Section
                  key={section.id}
                  section={section}
                  crossLink={
                    section.id === 'privacy' ? (
                      <p><Link href="/privacy">Read the Privacy Policy</Link></p>
                    ) : undefined
                  }
                />
              ))}

              <div className="legal-contact">
                <p>
                  Questions about this page? Reply to any email from us, or reach us through the contact page.
                </p>
                <div className="legal-contact-links">
                  <Link href="/contact" className="btn-sol-primary">Contact us</Link>
                  <Link href={other.href} className="legal-other">{other.label}</Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

export default LegalPage;
