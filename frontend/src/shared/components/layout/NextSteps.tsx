import React from 'react';
import Link from 'next/link';

export interface NextStepLink {
  label: string;
  href: string;
  /** One short line shown under the label in the band layout. */
  description?: string;
}

/** The core pages, so every page links to them with the same wording. */
export const PAGE_LINKS = {
  services: { label: 'Our credentialing services', href: '/services', description: 'What we handle, end to end' },
  pricing: { label: 'Pricing', href: '/pricing', description: 'Clear rates and plans' },
  faq: { label: 'Credentialing FAQ', href: '/faq', description: 'Timelines, documents and costs' },
  guides: { label: 'Credentialing guides', href: '/guides', description: 'Step-by-step how-tos' },
} satisfies Record<string, NextStepLink>;

interface NextStepsProps {
  links: NextStepLink[];
  tint?: boolean;
  /** A compact panel at full container width, for long pages such as the homepage. */
  band?: boolean;
  /** Extra content under the links, such as a call to action. */
  children?: React.ReactNode;
}

/** The closing "Next steps" block on every page, so each page leads on to related credentialing content. */
export function NextSteps({ links, tint = false, band = false, children }: NextStepsProps) {
  if (band) {
    return (
      <section className="next-steps-band" aria-labelledby="next-steps-title">
        <div className="container">
          <div className="next-steps-panel">
            <div className="next-steps-head">
              <h2 id="next-steps-title" className="sol-block-title">Next steps</h2>
              <p>Keep exploring how we can help.</p>
            </div>
            <ul className="next-steps-links">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="next-steps-text">
                      <span className="next-steps-label">{link.label}</span>
                      {link.description && <span className="next-steps-desc">{link.description}</span>}
                    </span>
                    <span className="next-steps-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`sol-section${tint ? ' sol-section--tint' : ''}`} aria-labelledby="next-steps-title">
      <div className="container sol-narrow">
        <h2 id="next-steps-title" className="sol-block-title">Next steps</h2>
        <ul className="sol-related">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label} →</Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}

export default NextSteps;
