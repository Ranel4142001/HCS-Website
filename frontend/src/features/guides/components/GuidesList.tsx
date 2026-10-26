import React from 'react';
import Link from 'next/link';
import { GUIDES } from '../content/guides';
import { guidePath } from '../content/paths';
import './GuidesList.css';

/** Card list of all guides, used on /guides. */
export function GuidesList() {
  return (
    <section className="sol-section">
      <div className="container sol-narrow">
        <ul className="guides-list">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link href={guidePath(guide.slug)} className="guides-card">
                <h2>{guide.title}</h2>
                <p>{guide.meta.description}</p>
                <span className="guides-card-more">Read the guide →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GuidesList;
