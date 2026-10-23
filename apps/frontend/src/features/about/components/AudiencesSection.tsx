import React from 'react';
import Link from 'next/link';
import { AUDIENCES } from '../content/about';

export function AudiencesSection() {
  return (
    <section className="sol-section">
      <div className="container sol-narrow">
        <h2 className="sol-block-title">{AUDIENCES.title}</h2>
        <p className="sol-desc-text">{AUDIENCES.intro}</p>
        <ul className="sol-related sol-related--spaced">
          {AUDIENCES.links.map((a) => (
            <li key={a.href}><Link href={a.href}>{a.label} →</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AudiencesSection;
