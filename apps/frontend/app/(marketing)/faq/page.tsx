'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import { FaqSection } from '@/features/faq';
import { ContactWizard } from '@/features/contact';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function FaqPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 20px', textAlign: 'center' }}>
          <Badge icon={<Icon name="shield" />}>FAQ</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Medical credentialing <em>FAQ</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Plain-English answers about credentialing, payer enrollment, CAQH, timelines, documents and costs. Do not see your question? Ask a credentialing specialist.
          </p>
        </section>

        <FaqSection />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
