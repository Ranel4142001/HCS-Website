'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import Button from '@/shared/components/ui/Button';
import { WORKFLOWS } from '../content/workflows';
import './WorkflowsSection.css';

export const WorkflowsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  // Bumped on every manual selection so the progress bar restarts even when the same tab is chosen again.
  const [cycle, setCycle] = useState(0);

  const selectWorkflow = (idx: number) => {
    setActiveIndex(idx);
    setCycle((c) => c + 1);
  };

  // The progress bar is a CSS animation (6s, see .wf-tab-bar-fill); when it finishes, show the next tab.
  const showNext = () => setActiveIndex((idx) => (idx + 1) % WORKFLOWS.length);

  const active = WORKFLOWS[activeIndex];

  return (
    <section
      className={`agent-workflows-section ${isPaused ? 'is-paused' : ''}`}
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
            Credentialing specialists and AI automation work together to speed up the slow, multi-step credentialing tasks that keep providers from getting credentialed and generating revenue. HealthCredSTAT supports each provider from the first credentialing application through every recredentialing cycle.
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

                  {/* Every body stays rendered so it can expand and collapse smoothly; closed ones are inert. */}
                  <div className="wf-tab-body" inert={!isActive}>
                    <div className="wf-tab-body-clip">
                      <p className="wf-tab-desc">{wf.description}</p>
                      <a href="#contact" className="wf-tab-link">
                        <span>Get a quote for this service</span>
                        <Icon name="arrow" />
                      </a>
                    </div>
                  </div>

                  <div className="wf-tab-bar" aria-hidden="true">
                    {isActive && (
                      <div key={cycle} className="wf-tab-bar-fill" onAnimationEnd={showNext} />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Live Visualizer Card */}
          <div className="workflows-media">
            <div key={active.id} className="wf-media-card">
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
                  Get a quote
                </Button>
                <span className="wf-security-note">
                  <Icon name="shield" /> NCQA standards • HIPAA-aligned
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowsSection;
