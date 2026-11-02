import React from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import { SOLUTIONS } from '../content/solutions';
import './SolutionsOverview.css';

/** Featured card for every solution page, used on /services. */
export function SolutionsOverview() {
  return (
    <section className="sol-section" aria-label="Our services">
      <div className="container">
        <ul className="sol-overview-list">
          {SOLUTIONS.map((s) => (
            <li key={s.path} className="sol-overview-card">
              <div className="sol-overview-main">
                <div className="sol-icon-badge" aria-hidden="true"><Icon name={s.icon} /></div>
                <p className="sol-overview-eyebrow">Core service</p>
                <h2 className="sol-overview-title">{s.h1}</h2>
                <p className="sol-overview-lead">{s.lead}</p>
                <div className="sol-overview-cta">
                  <Link href={s.path} className="btn-sol-primary">See how it works</Link>
                  <Link href="/contact" className="btn-sol-ghost">{s.primaryCta}</Link>
                </div>
              </div>
              <ul className="sol-overview-points">
                {s.highlights.map((h) => (
                  <li key={h.title}>
                    <span className="sol-overview-check" aria-hidden="true"><Icon name="check" /></span>
                    <span>
                      <strong>{h.title}</strong>
                      {h.text}
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SolutionsOverview;
