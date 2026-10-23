'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon, { IconName } from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';
import Button from '@/shared/components/ui/Button';
import type { WorkflowItem } from '../types';
import { WORKFLOWS } from '../content/workflows';

const CYCLE_DURATION = 6000; // 6 seconds per tab

export const WorkflowsSection: React.FC = () => {
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
                    Get a quote
                  </Button>
                  <span className="wf-security-note">
                    <Icon name="shield" /> NCQA standards • HIPAA-aligned
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

export default WorkflowsSection;
