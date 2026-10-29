import React from 'react';
import Link from 'next/link';
import JsonLd from '@/shared/components/seo/JsonLd';
import Icon from '@/shared/components/ui/Icon';
import NextSteps from '@/shared/components/layout/NextSteps';
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/shared/lib/seo';
import type { SolutionContent } from '../types';
import './SolutionPage.css';

/**
 * Shared layout for solution and audience pages.
 * Content lives in ../content — this file only decides how it is presented.
 */
export function SolutionPage({ content }: { content: SolutionContent }) {
  const accent = { '--sol-color': content.color } as React.CSSProperties;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: content.name, description: content.meta.description, path: content.path, audience: content.audience }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: content.name, path: content.path },
          ]),
          faqSchema(content.faqs),
        ]}
      />
      <main>
        <section className="sol-hero" style={accent}>
          <div className="container sol-hero-inner sol-hero-inner--wide">
            <nav aria-label="Breadcrumb" className="sol-breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">›</span>
              <span>{content.section}</span>
              <span aria-hidden="true">›</span>
              <span aria-current="page">{content.name}</span>
            </nav>
            <div className="sol-icon-badge" aria-hidden="true"><Icon name={content.icon} /></div>
            <h1 className="sol-hero-title">{content.h1}</h1>
            <p className="sol-hero-tagline">{content.lead}</p>
            <div className="sol-hero-cta">
              <Link href="/contact" className="btn-sol-primary">{content.primaryCta}</Link>
              <Link href="/pricing" className="btn-sol-ghost">See pricing</Link>
            </div>
          </div>
          <div className="sol-hero-glow" style={{ background: content.color }} />
        </section>

        <section className="sol-stats-bar" aria-label="Highlights">
          <div className="container sol-stats-inner">
            {content.highlights.map((h) => (
              <div key={h.title} className="sol-stat">
                <strong>{h.title}</strong>
                <span>{h.text}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="sol-body">
          <div className="container sol-body-grid">
            <div className="sol-desc-col">
              <h2 className="sol-section-title">{content.problem.title}</h2>
              {content.problem.paragraphs.map((p, i) => (
                <p key={i} className="sol-desc-text">{p}</p>
              ))}
            </div>
            <div className="sol-benefits-col">
              <h2 className="sol-section-title">{content.included.title}</h2>
              <ul className="sol-benefits-list">
                {content.included.items.map((item) => (
                  <li key={item}><span className="sol-check" aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="sol-section sol-section--tint">
          <div className="container">
            <h2 className="sol-block-title">{content.process.title}</h2>
            <ol className="sol-steps">
              {content.process.steps.map((step, i) => (
                <li key={step.title} className="sol-step">
                  <span className="sol-step-num" aria-hidden="true">{i + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {content.checklist && (
          <section className="sol-section">
            <div className="container sol-split">
              <div className="sol-split-head">
                <h2 className="sol-block-title">{content.checklist.title}</h2>
                <p className="sol-desc-text">{content.checklist.intro}</p>
              </div>
              <ul className="sol-benefits-list sol-checklist">
                {content.checklist.items.map((item) => (
                  <li key={item}><span className="sol-check" aria-hidden="true">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section className="sol-section sol-section--tint">
          <div className="container sol-split">
            <div className="sol-split-head">
              <h2 className="sol-block-title">Frequently asked questions</h2>
            </div>
            <div className="sol-faq">
              {content.faqs.map((faq) => (
                <details key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <NextSteps links={content.related} band />

        <section className="sol-cta-banner" style={accent}>
          <div className="container sol-cta-inner">
            <h2>{content.cta.title}</h2>
            <p>{content.cta.text}</p>
            <Link href="/contact" className="btn-sol-primary">Get a free quote →</Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default SolutionPage;
