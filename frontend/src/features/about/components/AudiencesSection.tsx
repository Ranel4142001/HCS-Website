import React from 'react';
import Link from 'next/link';
import { AUDIENCES } from '../content/about';
import './AudiencesSection.css';

export function AudiencesSection() {
  return (
    <section className="sol-section">
      <div className="container sol-split">
        <div className="sol-split-head">
          <h2 className="sol-block-title">{AUDIENCES.title}</h2>
          <p className="sol-desc-text">{AUDIENCES.intro}</p>
        </div>
        <ul className="audience-links">
          {AUDIENCES.links.map((a) => (
            <li key={a.href}>
              <Link href={a.href}>
                {a.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default AudiencesSection;
