'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import FaqSection from '@/features/landing/components/FaqSection';
import ContactWizard from '@/features/contact/components/ContactWizard';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function FaqPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 20px', textAlign: 'center' }}>
          <Badge icon={<Icon name="shield" />}>Knowledge Base &amp; Regulatory Guides</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Healthcare Credentialing &amp; <em>CVO Knowledge Base</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Understand the regulations, turnaround timelines, NCQA standards, and technology powering modern automated provider credentialing.
          </p>
        </section>

        <FaqSection />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
