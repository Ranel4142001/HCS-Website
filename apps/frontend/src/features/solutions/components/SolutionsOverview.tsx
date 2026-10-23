import React from 'react';
import Link from 'next/link';
import { SOLUTIONS } from '../content/solutions';
import './SolutionsOverview.css';

/** Grid linking to every solution page, used on /services. */
export function SolutionsOverview() {
  return (
    <section className="sol-section">
      <div className="container">
        <ul className="sol-steps">
          {SOLUTIONS.map((s) => (
            <li key={s.path} className="sol-step">
              <h2 className="sol-overview-title">
                <Link href={s.path}>{s.h1} →</Link>
              </h2>
              <p>{s.meta.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SolutionsOverview;
