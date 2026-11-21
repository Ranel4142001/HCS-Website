import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { COMMITMENTS, SOURCES } from '../content/founding';
import './FoundingClientsSection.css';

export const FoundingClientsSection: React.FC = () => {
  return (
    <section className="founding" id="why-us" aria-labelledby="founding-title">
      <div className="container founding-inner">
        <header className="founding-head reveal-stagger">
          <h2 id="founding-title">Our commitments to founding clients</h2>
          <p>
            HealthCredSTAT is now onboarding its first clients. These are the commitments every client can hold us to.
          </p>
        </header>

        <ul className="founding-commitments reveal-stagger">
          {COMMITMENTS.map((c) => (
            <li key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </li>
          ))}
        </ul>

        {/* Heading and action on the left, the nine sources as an even 3 x 3 grid on the right */}
        <div className="founding-footer reveal">
          <div className="founding-sources-intro">
            <h3>Every credential is checked with the source that issued it</h3>
            <a className="founding-cta" href="#contact">Ask about founding-client terms</a>
          </div>

          <ul className="founding-sources" aria-label="Sources we verify with">
            {SOURCES.map((s) => (
              <li key={s}>
                <Icon name="check-circle" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoundingClientsSection;
