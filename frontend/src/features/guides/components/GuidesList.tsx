import React from 'react';
import Link from 'next/link';
import { GUIDES } from '../content/guides';
import { guidePath } from '../content/paths';
import type { Guide } from '../types';
import './GuidesList.css';

/** Minutes to read at about 200 words a minute: the lead, every section and the FAQs. */
function readingMinutes(guide: Guide): number {
  const text = [
    guide.lead,
    ...guide.sections.flatMap((s) => [s.heading, ...(s.paragraphs ?? []), ...(s.list ?? [])]),
    ...guide.faqs.flatMap((f) => [f.q, f.a]),
  ].join(' ');
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}

/** Library of all guides, used on /guides: two columns on wider screens. */
export function GuidesList() {
  return (
    <section className="sol-section">
      <div className="container guides-wrap">
        <ul className="guides-list">
          {GUIDES.map((guide) => (
            <li key={guide.slug}>
              <Link href={guidePath(guide.slug)} className="guides-card">
                <h2>{guide.title}</h2>
                <p>{guide.meta.description}</p>
                <span className="guides-card-foot">
                  <span className="guides-card-time">{readingMinutes(guide)} min read</span>
                  <span className="guides-card-more">Read the guide</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default GuidesList;
