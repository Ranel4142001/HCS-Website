import React from 'react';
import Link from 'next/link';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import ExpertiseSection from '@/features/home/components/ExpertiseSection';
import ContactWizard from '@/features/contact/components/ContactWizard';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

const PRINCIPLES = [
  {
    title: 'Own the outcome',
    text: 'We do not just submit applications. We follow every one until the provider is approved and billing — and tell you exactly where it stands along the way.',
  },
  {
    title: 'Get it right the first time',
    text: 'Most delays start with an incomplete file. Every application is checked by a specialist before it reaches a payer or committee.',
  },
  {
    title: 'Ask providers once',
    text: 'Clinicians should spend their time with patients. We collect information once, keep it current and reuse it everywhere it is needed.',
  },
  {
    title: 'Protect your data',
    text: 'Provider information is sensitive. We handle it with HIPAA-aligned safeguards, secure document collection and access only for the people who need it.',
  },
];

const AUDIENCES = [
  { label: 'Medical groups & MSOs', href: '/who-we-help/provider-groups' },
  { label: 'Health plans', href: '/who-we-help/health-plans' },
  { label: 'Health systems & hospitals', href: '/who-we-help/health-systems' },
  { label: 'Telehealth & digital health', href: '/who-we-help/digital-health' },
];

export default function AboutPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main>
        <section className="container" style={{ padding: '80px 24px 40px', textAlign: 'center' }}>
          <Badge icon={<Icon name="shield" />}>About HealthCredSTAT</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            We get providers credentialed, enrolled and <em>billing sooner</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            HealthCredSTAT is a medical credentialing and payer enrollment company. We combine experienced credentialing
            specialists with automation to take the paperwork, the follow-up and the waiting off your team&apos;s plate.
          </p>
        </section>

        <section className="sol-section">
          <div className="container sol-narrow">
            <h2 className="sol-block-title">Why we exist</h2>
            <p className="sol-desc-text">
              Credentialing is one of the least visible parts of healthcare — and one of the most expensive when it goes
              wrong. A provider who is hired but not yet credentialed cannot bill most payers. A missed recredentialing
              date can take a provider out of network overnight. And the work usually falls on a small team juggling
              portals, spreadsheets and phone queues.
            </p>
            <p className="sol-desc-text">
              We started HealthCredSTAT to fix that: a dedicated team that owns the process end to end, supported by
              technology that keeps every application moving and every date tracked.
            </p>
          </div>
        </section>

        <section className="sol-section sol-section--tint">
          <div className="container">
            <h2 className="sol-block-title">How we work</h2>
            <ul className="sol-steps">
              {PRINCIPLES.map((p) => (
                <li key={p.title} className="sol-step">
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ExpertiseSection />

        <section className="sol-section">
          <div className="container sol-narrow">
            <h2 className="sol-block-title">Who we help</h2>
            <p className="sol-desc-text">
              From a single clinician starting a new assignment to health systems and health plans managing thousands
              of providers.
            </p>
            <ul className="sol-related" style={{ marginTop: 24 }}>
              {AUDIENCES.map((a) => (
                <li key={a.href}><Link href={a.href}>{a.label} →</Link></li>
              ))}
            </ul>
          </div>
        </section>

        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
