'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '@/shared/components/ui/Icon';
import Button from '@/shared/components/ui/Button';

export interface TimelineStep {
  id: number;
  type: 'SIGNAL' | 'DECISION' | 'TASK' | 'INTERACTION';
  week: string;
  time: string;
  title: string;
  source: string;
  description: string;
  xPos: number; // percentage along timeline
  rowY: number; // 0: Signal, 1: Decision, 2: Task, 3: Interaction
}

const FLOW_MODES = [
  { id: 'commercial', label: 'Commercial enrollment', goal: 'Enroll Dr. Chen in-network with Aetna in Texas.' },
  { id: 'medicare', label: 'Medicare enrollment', goal: 'Submit CMS Form 855I and link PTAN for Dr. Miller.' },
  { id: 'medicaid', label: 'Medicaid enrollment', goal: 'Enroll multi-site clinic providers with Texas Medicaid TMHP.' },
  { id: 'revalidation', label: 'Revalidation & Attestation', goal: 'Complete triennial CAQH attestation & payer revalidation cycle.' },
];

const COMMERCIAL_STEPS: TimelineStep[] = [
  {
    id: 1,
    type: 'SIGNAL',
    week: 'Week 1',
    time: '09:15 am',
    title: 'New Provider Hired',
    source: 'HRIS Webhook Trigger',
    description: 'Dr. Chen is added to the clinic roster. System detects missing Texas Aetna in-network contract.',
    xPos: 5,
    rowY: 0,
  },
  {
    id: 2,
    type: 'DECISION',
    week: 'Week 1',
    time: '09:16 am',
    title: 'Select Payer Workflow',
    source: 'AI Rules Engine',
    description: 'Identifies Texas commercial guidelines and verifies prerequisite state medical board license is active.',
    xPos: 12,
    rowY: 1,
  },
  {
    id: 3,
    type: 'TASK',
    week: 'Week 1',
    time: '09:18 am',
    title: 'CAQH Profile Sync & Audit',
    source: 'Autonomous Agent',
    description: 'Pulls CAQH ProView data, verifies attestation timestamp, and flags 1 missing gap-in-work-history.',
    xPos: 18,
    rowY: 2,
  },
  {
    id: 4,
    type: 'INTERACTION',
    week: 'Week 1',
    time: '10:02 am',
    title: 'SMS Clarification Sent',
    source: 'Automated SMS Nudge',
    description: 'Automated secure link texted to Dr. Chen requesting explanation for 2-month fellowship transition gap.',
    xPos: 25,
    rowY: 3,
  },
  {
    id: 5,
    type: 'SIGNAL',
    week: 'Week 2',
    time: '07:02 pm',
    title: 'Provider Response Received',
    source: 'Clinician Portal Reply',
    description: 'Dr. Chen replies the same evening — parental leave documented and certificate attached.',
    xPos: 33,
    rowY: 0,
  },
  {
    id: 6,
    type: 'TASK',
    week: 'Week 2',
    time: '08:30 pm',
    title: 'Compile Primary Source Packet',
    source: 'Autonomous Agent',
    description: 'Verifies TX Medical License, DEA, NPDB query, and board certification against primary sources in 4 minutes.',
    xPos: 40,
    rowY: 2,
  },
  {
    id: 7,
    type: 'INTERACTION',
    week: 'Week 2',
    time: '09:00 am',
    title: 'Specialist Checkpoint Review',
    source: 'HealthCredSTAT Expert',
    description: 'Human credentialing specialist completes secondary QA review of packet before health plan dispatch.',
    xPos: 48,
    rowY: 3,
  },
  {
    id: 8,
    type: 'TASK',
    week: 'Week 3',
    time: '11:20 am',
    title: 'Submit Application to Aetna',
    source: 'Direct Portal API & Fax',
    description: 'Application successfully injected into Aetna Texas credentialing queue. Tracking ID #TX-88294 issued.',
    xPos: 56,
    rowY: 2,
  },
  {
    id: 9,
    type: 'DECISION',
    week: 'Week 4',
    time: '02:15 pm',
    title: 'Schedule Follow-Up Cadence',
    source: 'Smart Follow-up Engine',
    description: 'Calculates historical Aetna TX response latency (14 days) and schedules automated portal touchpoints.',
    xPos: 65,
    rowY: 1,
  },
  {
    id: 10,
    type: 'INTERACTION',
    week: 'Week 5',
    time: '10:00 am',
    title: 'Automated Status Check Touch',
    source: 'Payer Portal Scraper Agent',
    description: 'Agent checks Aetna portal — status moved from "Intake" to "Credentials Committee Review".',
    xPos: 74,
    rowY: 3,
  },
  {
    id: 11,
    type: 'SIGNAL',
    week: 'Week 6',
    time: '03:45 pm',
    title: 'Approval Letter Received',
    source: 'Payer Electronic Intake',
    description: 'Aetna Texas approves in-network enrollment with effective date backdated to intake.',
    xPos: 85,
    rowY: 0,
  },
  {
    id: 12,
    type: 'TASK',
    week: 'Week 6',
    time: '04:00 pm',
    title: 'Roster & Billing Activation',
    source: 'Enterprise Sync Agent',
    description: 'Updates provider billing status in EHR & billing system. Sends celebration notice to clinic admin.',
    xPos: 95,
    rowY: 2,
  },
];

export const AgentFlowTimelineSection: React.FC = () => {
  const [selectedFlow, setSelectedFlow] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(4); // Default to mid-flow
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = COMMERCIAL_STEPS;
  const currentStep = steps[currentStepIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => (prev + 1) % steps.length);
      }, 3500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps.length]);

  const handlePrev = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const handleNext = () => {
    setIsPlaying(false);
    setCurrentStepIndex((prev) => (prev + 1) % steps.length);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const rows = ['SIGNAL', 'DECISION', 'TASK', 'INTERACTION'];

  return (
    <section className="agent-timeline-section" id="timeline">
      <div className="container">
        {/* Header */}
        <div className="timeline-head">
          <div className="timeline-eyebrow">
            <Icon name="sparkle" />
            <span>Autonomous Execution Engine</span>
          </div>
          <h2>Our fully autonomous agents handle work across hundreds of interactions.</h2>
          <p className="timeline-intro">
            Payer enrollment is not a single-turn task. It is weeks of work involving dozens of touches across payer portals, CAQH, state boards, email, SMS, and phones — orchestrated end to end.
          </p>
        </div>

        {/* Workflow Mode Tabs */}
        <div className="timeline-tabs" role="tablist">
          {FLOW_MODES.map((mode, idx) => (
            <button
              key={mode.id}
              type="button"
              className={`timeline-tab ${idx === selectedFlow ? 'is-active' : ''}`}
              role="tab"
              aria-selected={idx === selectedFlow}
              onClick={() => {
                setSelectedFlow(idx);
                setCurrentStepIndex(0);
                setIsPlaying(false);
              }}
            >
              {mode.label}
            </button>
          ))}
        </div>

        {/* Interactive Timeline Player Card */}
        <div className="timeline-grid-card">
          {/* Main Chart Area */}
          <div className="timeline-main">
            {/* Goal Bar & Controls */}
            <div className="timeline-control-bar">
              <div className="timeline-goal">
                <span className="goal-label">GOAL:</span>
                <span className="goal-text">{FLOW_MODES[selectedFlow].goal}</span>
              </div>
              <div className="timeline-playback-controls">
                <button
                  type="button"
                  className="ctrl-btn"
                  onClick={handlePrev}
                  aria-label="Previous step"
                  title="Previous step"
                >
                  <Icon name="chevron" className="rotate-90" />
                </button>
                <button
                  type="button"
                  className={`ctrl-btn ctrl-btn-play ${isPlaying ? 'playing' : ''}`}
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  title={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? (
                    <span className="pause-icon" />
                  ) : (
                    <span className="play-icon" />
                  )}
                </button>
                <button
                  type="button"
                  className="ctrl-btn"
                  onClick={handleNext}
                  aria-label="Next step"
                  title="Next step"
                >
                  <Icon name="chevron" className="rotate-minus-90" />
                </button>
              </div>
            </div>

            {/* SVG Visualizer Canvas */}
            <div className="timeline-canvas-wrap">
              <div className="canvas-header-weeks">
                <span>WEEK 1</span>
                <span>WEEK 2</span>
                <span>WEEK 3</span>
                <span>WEEK 4</span>
                <span>WEEK 5</span>
                <span>WEEK 6</span>
              </div>

              <div className="canvas-grid-body">
                {rows.map((rowName, rIdx) => (
                  <div key={rowName} className="canvas-row">
                    <span className="canvas-row-label">{rowName}</span>
                    <div className="canvas-row-line" />
                  </div>
                ))}

                {/* Nodes on Timeline */}
                {steps.map((step, idx) => {
                  const isPast = idx < currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  const isFuture = idx > currentStepIndex;

                  const rowYPercent = (step.rowY * 25) + 12.5; // Centers in 4 rows (0, 1, 2, 3)

                  return (
                    <div
                      key={step.id}
                      className={`timeline-node ${step.type.toLowerCase()} ${isCurrent ? 'is-current' : ''} ${isPast ? 'is-past' : ''} ${isFuture ? 'is-future' : ''}`}
                      style={{
                        left: `${step.xPos}%`,
                        top: `${rowYPercent}%`,
                      }}
                      onClick={() => {
                        setIsPlaying(false);
                        setCurrentStepIndex(idx);
                      }}
                      title={`${step.type}: ${step.title}`}
                    >
                      <div className="node-marker">
                        {isPast && <Icon name="check" />}
                        {isCurrent && <span className="node-pulse-ring" />}
                      </div>
                    </div>
                  );
                })}

                {/* Connecting Playhead Vertical Line */}
                <div
                  className="timeline-playhead-line"
                  style={{ left: `${currentStep.xPos}%` }}
                >
                  <div className="playhead-glow-dot" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Detail Panel Inspector */}
          <div className="timeline-detail-panel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep.id}
                className="step-detail-inner"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.25 }}
              >
                <div className="step-type-header">
                  <span className={`type-badge badge-${currentStep.type.toLowerCase()}`}>
                    {currentStep.type}
                  </span>
                  <span className="step-time">{currentStep.time}</span>
                </div>

                <div className="step-week-tag">{currentStep.week}</div>
                <h3 className="step-title">{currentStep.title}</h3>

                <div className="step-meta-row">
                  <span className="meta-label">SOURCE</span>
                  <span className="meta-val">{currentStep.source}</span>
                </div>

                <p className="step-description">{currentStep.description}</p>

                <div className="step-footer">
                  <span className="step-counter">
                    Step {currentStepIndex + 1} of {steps.length}
                  </span>
                  <div className="step-quick-nav">
                    <button
                      type="button"
                      disabled={currentStepIndex === 0}
                      onClick={handlePrev}
                      className="nav-btn-prev"
                    >
                      &larr; Prev
                    </button>
                    <button
                      type="button"
                      disabled={currentStepIndex === steps.length - 1}
                      onClick={handleNext}
                      className="nav-btn-next"
                    >
                      Next &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentFlowTimelineSection;
