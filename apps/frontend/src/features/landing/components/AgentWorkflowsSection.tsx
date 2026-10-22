'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon, { IconName } from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';
import Button from '@/shared/components/ui/Button';

export interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  tag: string;
  highlights: string[];
  mockData: {
    statusBadge: string;
    subtext: string;
    stats: { label: string; value: string; trend?: string }[];
    steps: { name: string; status: 'completed' | 'in-progress' | 'pending'; time: string }[];
  };
}

const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'enrollment',
    title: 'Provider Enrollment',
    description: 'Get providers in-network faster. We prepare and submit applications to Medicare, Medicaid and commercial payers, then follow up until each one is approved.',
    icon: 'sparkle',
    tag: 'Revenue Acceleration',
    highlights: [
      'Medicare (CMS-855), CAQH and state Medicaid applications prepared for you',
      'Automated portal status checks & follow-up touches',
      'Instant exception escalation to credentialing specialists',
    ],
    mockData: {
      statusBadge: 'Active Pipeline • 283 In-Flight',
      subtext: 'Dr. Sarah Jenkins, MD — Aetna, BCBS, Medicare TX',
      stats: [
        { label: 'Avg In-Network', value: '18 Days', trend: '-58%' },
        { label: 'Clean Submissions', value: '99.4%', trend: '+14%' },
        { label: 'Auto-Followups', value: '1,420/mo' },
      ],
      steps: [
        { name: 'Provider Intake & CAQH Sync', status: 'completed', time: 'Day 1' },
        { name: 'Payer Application Dispatch', status: 'completed', time: 'Day 2' },
        { name: 'Automated Portal Follow-up #3', status: 'in-progress', time: 'Today' },
        { name: 'Payer Committee Approval', status: 'pending', time: 'Estimated 4d' },
      ],
    },
  },
  {
    id: 'credentialing',
    title: 'CVO Credentialing',
    description: 'Complete, committee-ready credentialing files built on primary source verification: licenses, board certification, education, sanctions and malpractice history.',
    icon: 'shield',
    tag: 'Primary Source Verification',
    highlights: [
      'Verification against NPDB, OIG, SAM.gov and state licensing boards',
      'Real-time primary source verification packet compilation',
      'Committee-ready files with a complete audit trail',
    ],
    mockData: {
      statusBadge: 'NCQA Compliant • PSV Complete',
      subtext: 'Dr. Marcus Vance, DO — Cardiology',
      stats: [
        { label: 'Turnaround Time', value: '24 Hours', trend: '-85%' },
        { label: 'Accuracy Score', value: '99.9%', trend: 'Audited' },
        { label: 'Sources Verified', value: '14/14' },
      ],
      steps: [
        { name: 'State Board License Verification', status: 'completed', time: 'Auto-verified' },
        { name: 'DEA & Malpractice History', status: 'completed', time: 'Auto-verified' },
        { name: 'NPDB & Sanctions Deep Scan', status: 'completed', time: 'Auto-verified' },
        { name: 'Committee Review Dossier Ready', status: 'in-progress', time: 'In Review' },
      ],
    },
  },
  {
    id: 'roster',
    title: 'Roster Management',
    description: 'Keep provider data accurate everywhere it lives, and send every health plan the roster format it requires.',
    icon: 'users',
    tag: 'Directory Hygiene',
    highlights: [
      'Automated roster formatting for all national & regional payers',
      'Bi-directional sync with internal HRIS, EHR, and billing databases',
      'Helps keep health plan provider directories accurate',
    ],
    mockData: {
      statusBadge: 'All Rosters Synced • 1,240 Clinicians',
      subtext: 'Enterprise Directory • 42 Regional Clinics',
      stats: [
        { label: 'Payer Formats', value: '48 Templates', trend: 'Auto-mapped' },
        { label: 'Directory Drift', value: '0.0%', trend: 'Real-time' },
        { label: 'Monthly Submissions', value: '100% On-time' },
      ],
      steps: [
        { name: 'HRIS Clinician Onboarding Event', status: 'completed', time: 'Instant' },
        { name: 'Location & NPI Cross-Reference', status: 'completed', time: 'Instant' },
        { name: 'Payer Roster Format Translation', status: 'completed', time: 'Auto' },
        { name: 'Secure SFTP / API Health Plan Push', status: 'in-progress', time: 'Active' },
      ],
    },
  },
  {
    id: 'delegated',
    title: 'Delegated Credentialing',
    description: 'Credential providers under delegated agreements with health plans, with the files, committee packets and reporting their oversight audits expect.',
    icon: 'zap',
    tag: 'Delegation Velocity',
    highlights: [
      'Pre-configured audit-ready committee packet generation',
      'Delegated roster submission directly to participating plans',
      '95%+ score record on annual payer delegate audits',
    ],
    mockData: {
      statusBadge: '14 Active Delegated Agreements',
      subtext: 'Sample: 4 regional health plans',
      stats: [
        { label: 'Credentialing Window', value: '3 Days', trend: 'vs 90d payer' },
        { label: 'Audit Pass Rate', value: '100%', trend: 'NCQA Ready' },
        { label: 'Delegated Volume', value: '850 Providers' },
      ],
      steps: [
        { name: 'Internal Committee Packet Creation', status: 'completed', time: 'Day 1' },
        { name: 'Medical Director Sign-off', status: 'completed', time: 'Day 2' },
        { name: 'Delegated Roster Generation', status: 'completed', time: 'Day 3' },
        { name: 'Immediate Billing Activation', status: 'in-progress', time: 'Active' },
      ],
    },
  },
  {
    id: 'privileging',
    title: 'Privileging & Appointments',
    description: 'Hospital, surgery center and telehealth privileging applications, peer references and OPPE/FPPE tracking in one organized workflow.',
    icon: 'file',
    tag: 'Clinical Privileges',
    highlights: [
      'Customizable specialty privilege delineate forms',
      'Automated OPPE / FPPE tracking and case log collection',
      'Direct committee e-signatures and approval workflows',
    ],
    mockData: {
      statusBadge: 'Telehealth & Hospital Privileges',
      subtext: 'Facility: St. Jude Regional & Virtual Health Network',
      stats: [
        { label: 'Packet Completion', value: '100%', trend: 'Verified' },
        { label: 'Peer References', value: '3/3 Collected' },
        { label: 'FPPE Protocol', value: 'Active Tracking' },
      ],
      steps: [
        { name: 'Privilege Delineation Selection', status: 'completed', time: 'Day 1' },
        { name: 'Peer Reference Form Auto-Dispatch', status: 'completed', time: 'Day 2' },
        { name: 'Credentials Committee Review', status: 'in-progress', time: 'In Progress' },
        { name: 'MEC & Board Approval Finalized', status: 'pending', time: 'Upcoming' },
      ],
    },
  },
  {
    id: 'licensing',
    title: 'Cross-State Licensing',
    description: 'New state licenses, renewals and compact applications for providers who practice, or see patients virtually, across state lines.',
    icon: 'globe',
    tag: 'National Expansion',
    highlights: [
      'Automated IMLC (Interstate Medical Licensure Compact) filing',
      'CME credit verification and renewal alerts 90-60-30 days out',
      'Telehealth emergency registration tracking across all states',
    ],
    mockData: {
      statusBadge: 'Multi-State Expansion • 18 State Licenses',
      subtext: 'Dr. Elena Rostova — Tele-Psychiatry Practice',
      stats: [
        { label: 'Active Licenses', value: '18 States', trend: '100% Valid' },
        { label: 'Renewals Monitored', value: '42 Records' },
        { label: 'IMLC Processing', value: 'Accelerated' },
      ],
      steps: [
        { name: 'State Board Prerequisite Audit', status: 'completed', time: 'Instant' },
        { name: 'Fingerprint & Background Kit Sent', status: 'completed', time: 'Day 3' },
        { name: 'Board Application Submitted', status: 'in-progress', time: 'Active' },
        { name: 'License Issuance Confirmation', status: 'pending', time: 'Tracking' },
      ],
    },
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring',
    description: 'Ongoing checks against federal exclusion lists and state licensing boards, with alerts before a lapse or sanction becomes a problem.',
    icon: 'bell',
    tag: '24/7 Risk Mitigation',
    highlights: [
      'Daily automated OIG-LEIE, SAM.gov, and NPDB re-checks',
      'Instant exclusion detection and automated compliance alerts',
      'Full timestamped audit log of every background verification',
    ],
    mockData: {
      statusBadge: 'Real-Time Sanctions Monitoring Active',
      subtext: 'Network Audit Log: 4,890 Daily Checks Executed',
      stats: [
        { label: 'Exclusion Alerts', value: '0 Active', trend: 'Clean' },
        { label: 'NPDB Continuous Query', value: 'Enabled' },
        { label: 'Audit Readiness', value: '100%' },
      ],
      steps: [
        { name: 'OIG-LEIE Daily Scan', status: 'completed', time: '04:00 AM' },
        { name: 'SAM.gov Federal Debarment Query', status: 'completed', time: '04:15 AM' },
        { name: 'State Medical Board Disciplinary Scan', status: 'completed', time: '04:30 AM' },
        { name: 'Automated Compliance Cert Issued', status: 'completed', time: 'Real-time' },
      ],
    },
  },
  {
    id: 'contracts',
    title: 'Payer Contract Management',
    description: 'Keep payer agreements, fee schedules and renewal dates organized so nothing expires unnoticed.',
    icon: 'cpu',
    tag: 'Contract Intelligence',
    highlights: [
      'AI extraction of fee schedules, re-credentialing cycles, and carve-outs',
      'Timely alert notifications before contract expiration & renewal windows',
      'Rate benchmarking across regional and specialty payer agreements',
    ],
    mockData: {
      statusBadge: 'Contract Repository • 64 Active Payers',
      subtext: 'Fee Schedule & Rate Matrix Intelligence',
      stats: [
        { label: 'Contracts Indexed', value: '64 Payer Agmts' },
        { label: 'Upcoming Renewals', value: '4 in 90 Days', trend: 'Alert Set' },
        { label: 'Rate Variance', value: '+12% Avg' },
      ],
      steps: [
        { name: 'Contract PDF Ingestion & OCR', status: 'completed', time: 'Instant' },
        { name: 'Fee Schedule Term Extraction', status: 'completed', time: 'Auto-mapped' },
        { name: 'Credentialing SLA Benchmarking', status: 'completed', time: 'Ready' },
        { name: 'Negotiation Window Reminders', status: 'in-progress', time: 'Active' },
      ],
    },
  },
];

const CYCLE_DURATION = 6000; // 6 seconds per tab

export const AgentWorkflowsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    lastTimeRef.current = Date.now();

    const loop = () => {
      const now = Date.now();
      const delta = now - lastTimeRef.current;
      lastTimeRef.current = now;

      if (!isPaused) {
        setProgress((prev) => {
          const next = prev + (delta / CYCLE_DURATION) * 100;
          if (next >= 100) {
            setActiveIndex((idx) => (idx + 1) % WORKFLOWS.length);
            return 0;
          }
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPaused, activeIndex]);

  const selectWorkflow = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
    lastTimeRef.current = Date.now();
  };

  const active = WORKFLOWS[activeIndex];

  return (
    <section
      className="agent-workflows-section"
      id="workflows"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div className="container">
        {/* Header */}
        <div className="workflows-head">
          <div className="workflows-eyebrow">
            <span className="eyebrow-sparkle">
              <Icon name="sparkle" />
            </span>
            <span>What we do</span>
          </div>
          <h2>Every credentialing workflow, handled end to end</h2>
          <p className="workflows-subtitle">
            Credentialing specialists and automation work together on the slow, multi-step tasks that keep providers from billing, from the first application to every recredentialing cycle.
          </p>
        </div>

        {/* Workflow Interactive Grid */}
        <div className="workflows-container">
          {/* Left Tab List */}
          <div className="workflows-tablist" role="tablist" aria-label="Agent workflows">
            {WORKFLOWS.map((wf, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={wf.id}
                  className={`wf-tab-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => selectWorkflow(idx)}
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      selectWorkflow(idx);
                    }
                  }}
                >
                  <div className="wf-tab-header">
                    <span className="wf-tab-title">{wf.title}</span>
                    <Icon name="chevron" className={`wf-tab-chevron ${isActive ? 'open' : ''}`} />
                  </div>

                  {isActive && (
                    <motion.div
                      className="wf-tab-body"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="wf-tab-desc">{wf.description}</p>
                      <a href="#contact" className="wf-tab-link">
                        <span>Get a quote for this service</span>
                        <Icon name="arrow" />
                      </a>
                    </motion.div>
                  )}

                  <div className="wf-tab-bar" aria-hidden="true">
                    <div
                      className="wf-tab-bar-fill"
                      style={{
                        width: isActive ? `${progress}%` : '0%',
                        transition: isActive ? 'none' : 'width 0.2s linear',
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Live Visualizer Card */}
          <div className="workflows-media">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                className="wf-media-card"
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Header Bar */}
                <div className="wf-media-header">
                  <div className="wf-media-badge">
                    <span className="live-dot" />
                    <span>{active.mockData.statusBadge}</span>
                  </div>
                  <span className="wf-metric-pill">Sample view</span>
                </div>

                <div className="wf-media-subtext">{active.mockData.subtext}</div>

                {/* Key Metrics Row */}
                <div className="wf-stats-row">
                  {active.mockData.stats.map((stat, i) => (
                    <div key={i} className="wf-stat-chip">
                      <span className="wf-stat-label">{stat.label}</span>
                      <div className="wf-stat-val-row">
                        <strong className="wf-stat-val">{stat.value}</strong>
                        {stat.trend && <span className="wf-stat-trend">{stat.trend}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Simulated Real-Time Step Tracker */}
                <div className="wf-timeline-box">
                  <div className="wf-timeline-title">Autonomous Execution Timeline</div>
                  <div className="wf-timeline-list">
                    {active.mockData.steps.map((step, i) => (
                      <div key={i} className={`wf-timeline-step ${step.status}`}>
                        <div className="wf-step-marker">
                          {step.status === 'completed' && <Icon name="check" />}
                          {step.status === 'in-progress' && <span className="step-pulse" />}
                          {step.status === 'pending' && <span className="step-dot" />}
                        </div>
                        <div className="wf-step-content">
                          <span className="wf-step-name">{step.name}</span>
                          <span className="wf-step-time">{step.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights List */}
                <div className="wf-highlights-box">
                  <ul className="wf-highlights-list">
                    {active.highlights.map((item, i) => (
                      <li key={i}>
                        <Icon name="check-circle" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action CTA */}
                <div className="wf-media-foot">
                  <Button variant="primary" size="sm" as="a" href="#contact" icon={<Icon name="arrow" />}>
                    Automate {active.title}
                  </Button>
                  <span className="wf-security-note">
                    <Icon name="shield" /> NCQA Aligned • 256-Bit Vault
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentWorkflowsSection;
