'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import { PricingSection } from '@/features/pricing';
import { EstimatorCard } from '@/features/estimator';
import { ContactWizard } from '@/features/contact';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function PricingPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 20px', textAlign: 'center' }}>
          <Badge icon={<Icon name="sparkle" />}>Pricing</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Credentialing pricing that&apos;s <em>simple and predictable</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            A flat rate for individual clinicians and custom pricing for groups and enterprises — with no hidden setup fees. Not sure what you need? Use the estimator below or ask for a free quote.
          </p>
        </section>

        <PricingSection />
        <EstimatorCard />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
