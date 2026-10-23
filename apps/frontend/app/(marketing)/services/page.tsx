'use client';

import React from 'react';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import WorkflowsSection from '@/features/home/components/WorkflowsSection';
import DashboardPreviewSection from '@/features/home/components/DashboardPreviewSection';
import ContactWizard from '@/features/contact/components/ContactWizard';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';
import Link from 'next/link';
import { SOLUTIONS } from '@/features/solutions/content/solutions';

export default function ServicesPage() {
  return (
    <div className="main-layout" id="top">
      <Navbar />

      <main style={{ paddingTop: '100px' }}>
        <section className="container" style={{ padding: '60px 24px 40px', textAlign: 'center' }}>
          <Badge icon={<Icon name="sparkle" />}>Our services</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: 'var(--ink)', margin: '16px 0', fontWeight: 800 }}>
            Medical credentialing &amp; <em>provider enrollment services</em>
          </h1>
          <p style={{ maxWidth: 760, margin: '0 auto', fontSize: '1.15rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            Everything it takes to get a provider from signed offer to billing — and keep them there. Pick one service or hand us the whole process.
          </p>
        </section>

        <section className="sol-section">
          <div className="container">
            <ul className="sol-steps">
              {SOLUTIONS.map((s) => (
                <li key={s.path} className="sol-step">
                  <h2 style={{ fontSize: '1.125rem', margin: '0 0 8px' }}>
                    <Link href={s.path} style={{ color: '#062459', textDecoration: 'none' }}>{s.h1} →</Link>
                  </h2>
                  <p>{s.meta.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <WorkflowsSection />
        <DashboardPreviewSection />
        <ContactWizard />
      </main>

      <Footer />
    </div>
  );
}
