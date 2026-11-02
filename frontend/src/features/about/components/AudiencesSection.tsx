import React from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import { AUDIENCES } from '../content/about';
import './AudiencesSection.css';

export function AudiencesSection() {
  return (
    <section className="sol-section" aria-labelledby="audiences-title">
      <div className="container">
        <div className="audience-head">
          <h2 id="audiences-title" className="sol-block-title">{AUDIENCES.title}</h2>
          <p className="sol-desc-text">{AUDIENCES.intro}</p>
        </div>
        <ul className="audience-links">
          {AUDIENCES.links.map((a) => (
            <li key={a.href}>
              <Link href={a.href} className="audience-card">
                <span className="audience-icon" aria-hidden="true"><Icon name={a.icon} /></span>
                <span className="audience-label">{a.label}</span>
                <span className="audience-desc">{a.description}</span>
                <span className="audience-more">
                  Learn more <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AudiencesSection;
