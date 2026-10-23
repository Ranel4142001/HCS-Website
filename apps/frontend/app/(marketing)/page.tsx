import React from 'react';
import dynamic from 'next/dynamic';
import AnnouncementBar from '@/shared/components/layout/AnnouncementBar';
import Navbar from '@/shared/components/layout/Navbar';
import Footer from '@/shared/components/layout/Footer';
import HeroSection from '@/features/landing/components/HeroSection';
import StatsBandSection from '@/features/landing/components/StatsBandSection';
import AgentWorkflowsSection from '@/features/landing/components/AgentWorkflowsSection';
import RealTimeVisibilitySection from '@/features/landing/components/RealTimeVisibilitySection';
import PlatformSection from '@/features/landing/components/PlatformSection';

// Code-split heavy below-the-fold and client-only interactive components
const ApplicationTrackerSection = dynamic(
  () => import('@/features/tracker/components/ApplicationTrackerSection'),
  { ssr: true }
);

const AgentFlowTimelineSection = dynamic(
  () => import('@/features/landing/components/AgentFlowTimelineSection'),
  { ssr: true }
);

const EstimatorCard = dynamic(
  () => import('@/features/estimator/components/EstimatorCard'),
  { ssr: true }
);

const PricingSection = dynamic(
  () => import('@/features/landing/components/PricingSection'),
  { ssr: true }
);

const TestimonialsSection = dynamic(
  () => import('@/features/landing/components/TestimonialsSection'),
  { ssr: true }
);

const FoundingClientsSection = dynamic(
  () => import('@/features/landing/components/FoundingClientsSection'),
  { ssr: true }
);

const FaqSection = dynamic(
  () => import('@/features/landing/components/FaqSection'),
  { ssr: true }
);

const ContactWizard = dynamic(
  () => import('@/features/contact/components/ContactWizard'),
  { ssr: true }
);

const ClientFloatingWidgets = dynamic(
  () => import('@/features/landing/components/ClientFloatingWidgets'),
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
        <StatsBandSection />

        {/* 3. HealthCredSTAT 8 Agent Workflows Engine */}
        <AgentWorkflowsSection />

        {/* 4. Real-Time Visibility (RTV) Command Center Dashboards */}
        <RealTimeVisibilitySection />

        {/* 5. Live Application & NPI Milestone Status Tracker (Code-split) */}
        <ApplicationTrackerSection />

        {/* 6. Autonomous Agent Flow Timeline Visualizer (Code-split) */}
        <AgentFlowTimelineSection />

        {/* 7. Adaptive Operations Sticky Platform Narrative */}
        <PlatformSection />

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
      <ClientFloatingWidgets />
    </div>
  );
}
