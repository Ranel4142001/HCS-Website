import React from 'react';
import { COMMITMENTS, SOURCES } from '../content/founding';

export const FoundingClientsSection: React.FC = () => {
  return (
    <section className="founding" id="why-us" aria-labelledby="founding-title">
      <div className="container founding-inner">
        <header className="founding-head">
          <h2 id="founding-title">We’re a new company. Here’s what that means for you.</h2>
          <p>
            HealthCredSTAT is taking on its first clients now. Instead of testimonials, here is what we commit to,
            so you know exactly what to hold us to.
          </p>
        </header>

        <ul className="founding-commitments">
          {COMMITMENTS.map((c) => (
            <li key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>

        <div className="founding-sources">
          <h3>Every credential is checked with the source that issued it</h3>
          <ul>
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        <a className="founding-cta" href="#contact">Ask about founding-client terms</a>
      </div>
    </section>
  );
};

export default FoundingClientsSection;
