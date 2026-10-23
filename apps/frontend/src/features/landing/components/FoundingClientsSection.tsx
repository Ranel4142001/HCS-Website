import React from 'react';

// Shown instead of testimonials while HealthCredSTAT takes on its first clients.
// Each commitment must stay true in practice: confirm wording with the business before changing it.
const COMMITMENTS = [
  {
    title: 'Work directly with the founders',
    text: 'Your providers’ files are handled by the people who run the company. You get a direct line to them, not a ticket queue.',
  },
  {
    title: 'A written update on every application, every week',
    text: 'Until each payer approves, you get a weekly status for every application: what was submitted, what the payer asked for and what happens next.',
  },
  {
    title: 'Founding-client terms',
    text: 'Our first clients get founding-client pricing in exchange for honest feedback as we grow. Ask us what that looks like for your practice.',
  },
];

// Primary sources used in credentialing verification. Names only: no logos, which would imply a partnership.
const SOURCES = [
  'State licensing boards',
  'National Practitioner Data Bank (NPDB)',
  'OIG exclusion list (LEIE)',
  'SAM.gov',
  'DEA registrations',
  'Specialty certification boards',
  'CAQH / DataSpring',
  'NPPES (NPI registry)',
  'Medicare PECOS',
];

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
