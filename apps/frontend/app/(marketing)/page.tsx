import React from 'react';
import dynamic from 'next/dynamic';
import AnnouncementBar from '@/features/home/components/AnnouncementBar';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import HeroSection from '@/features/home/components/HeroSection';
import ExpertiseSection from '@/features/home/components/ExpertiseSection';
import WorkflowsSection from '@/features/home/components/WorkflowsSection';
import DashboardPreviewSection from '@/features/home/components/DashboardPreviewSection';
import BenefitsSection from '@/features/home/components/BenefitsSection';

// Code-split heavy below-the-fold and client-only interactive components
const ApplicationTrackerSection = dynamic(
  () => import('@/features/home/components/ApplicationTrackerSection'),
  { ssr: true }
);

const EnrollmentTimelineSection = dynamic(
  () => import('@/features/home/components/EnrollmentTimelineSection'),
  { ssr: true }
);

const EstimatorCard = dynamic(
  () => import('@/features/estimator/components/EstimatorCard'),
  { ssr: true }
);

const PricingSection = dynamic(
  () => import('@/features/pricing/components/PricingSection'),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import('@/features/social-proof/components/TestimonialsSection'),
  { ssr: true }
);

const FoundingClientsSection = dynamic(
  () => import('@/features/social-proof/components/FoundingClientsSection'),
  { ssr: true }
);

const FaqSection = dynamic(
  () => import('@/features/faq/components/FaqSection'),
  { ssr: true }
);

const ContactWizard = dynamic(
  () => import('@/features/contact/components/ContactWizard'),
  { ssr: true }
);

const FloatingWidgets = dynamic(
  () => import('@/features/quick-answers/components/FloatingWidgets'),
  { ssr: true }
);

export default function MarketingPage() {
  return (
    <div className="main-layout" id="top">
      {/* Background Ambient Gradients */}
      <div className="bg-decor bg-decor-1" />
      <div className="bg-decor bg-decor-2" />

      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Marketing Sections */}
      <main>
        {/* 1. Hero & Partner Logos (Static Server Component — 0 JS!) */}
        <HeroSection />

        {/* 2. AI + Human Expertise Gallery */}
        <ExpertiseSection />

        {/* 3. HealthCredSTAT 8 Agent Workflows Engine */}
        <WorkflowsSection />

        {/* 4. Real-Time Visibility (RTV) Command Center Dashboards */}
        <DashboardPreviewSection />

        {/* 5. Live Application & NPI Milestone Status Tracker (Code-split) */}
        <ApplicationTrackerSection />

        {/* 6. Autonomous Agent Flow Timeline Visualizer (Code-split) */}
        <EnrollmentTimelineSection />

        {/* 7. Adaptive Operations Sticky Platform Narrative */}
        <BenefitsSection />

        {/* 9. Interactive Turnaround Estimator (Code-split) */}
        <EstimatorCard />

        {/* 10. Transparent Pricing Matrix (Code-split) */}
        <PricingSection />

        {/* 11. Client testimonials — hidden until real, approved quotes are added */}
        <TestimonialsSection />

        {/* 11b. Startup trust: commitments and verification sources, in place of testimonials */}
        <FoundingClientsSection />

        {/* 12. Credentialing Knowledge Base & FAQ Accordion (Code-split) */}
        <FaqSection limit={6} />

        {/* 13. Contact & Demo Request Wizard (Code-split) */}
        <ContactWizard />
      </main>

      {/* Enterprise Multi-Column Footer */}
      <Footer />

      {/* Client-only Floating Widgets */}
      <FloatingWidgets />
    </div>
  );
}
