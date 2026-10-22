'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import PressAwardsSection from '@/features/landing/components/PressAwardsSection';
import StatsBandSection from '@/features/landing/components/StatsBandSection';
import TestimonialsSection from '@/features/landing/components/TestimonialsSection';
import ContactWizard from '@/features/contact/components/ContactWizard';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function AboutPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 30px', textAlign: 'center' }}>
          <Badge icon={<Icon name="shield" />}>Our Mission &amp; Team</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Powering Healthcare&rsquo;s <em>First Real-Time CVO</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            HealthCredSTAT combines cutting-edge AI autonomous agents with seasoned credentialing, regulatory, and payer strategy specialists to eliminate the $1.2B burden of healthcare administrative friction.
          </p>
        </section>

        <StatsBandSection />
        <PressAwardsSection />
        <TestimonialsSection />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
