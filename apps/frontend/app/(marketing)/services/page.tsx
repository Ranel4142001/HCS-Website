'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import AgentWorkflowsSection from '@/features/landing/components/AgentWorkflowsSection';
import RealTimeVisibilitySection from '@/features/landing/components/RealTimeVisibilitySection';
import ContactWizard from '@/features/contact/components/ContactWizard';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function ServicesPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 40px', textAlign: 'center' }}>
          <Badge icon={<Icon name="sparkle" />}>Enterprise Solutions</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Comprehensive AI Credentialing &amp; <em>Provider Operations</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            From real-time primary source verifications to multi-state payer enrollment and 24/7 continuous monitoring, explore how HealthCredSTAT automates the healthcare provider lifecycle.
          </p>
        </section>

        <AgentWorkflowsSection />
        <RealTimeVisibilitySection />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
