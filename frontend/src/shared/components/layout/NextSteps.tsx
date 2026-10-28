import React from 'react';
import Link from 'next/link';

export interface NextStepLink {
  label: string;
  href: string;
}

/** The core pages, so every page links to them with the same wording. */
export const PAGE_LINKS = {
  services: { label: 'Our credentialing services', href: '/services' },
  pricing: { label: 'Pricing', href: '/pricing' },
  faq: { label: 'Credentialing FAQ', href: '/faq' },
  guides: { label: 'Credentialing guides', href: '/guides' },
} satisfies Record<string, NextStepLink>;

interface NextStepsProps {
  links: NextStepLink[];
  tint?: boolean;
  /** Extra content under the links, such as a call to action. */
  children?: React.ReactNode;
}

/** The closing "Next steps" block on every page, so each page leads on to related credentialing content. */
export function NextSteps({ links, tint = false, children }: NextStepsProps) {
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
