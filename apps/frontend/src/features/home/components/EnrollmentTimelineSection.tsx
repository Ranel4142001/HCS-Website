'use client';

import React, { useState, useEffect, useRef } from 'react';
import Icon from '@/shared/components/ui/Icon';
import { FLOW_MODES, COMMERCIAL_STEPS } from '../content/enrollment-timeline';
import './EnrollmentTimelineSection.css';

export const EnrollmentTimelineSection: React.FC = () => {
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
            <span>Behind the scenes</span>
          </div>
          <h2>Payer enrollment takes dozens of follow-ups. We handle every one.</h2>
          <p className="timeline-intro">
            Enrollment isn&apos;t one form. It&apos;s weeks of back-and-forth across payer portals, CAQH, state boards,
            email and phone calls. Step through a sample enrollment to see the work we take off your team&apos;s plate.
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
                {rows.map((rowName) => (
                  <div key={rowName} className="canvas-row">
                    <span className="canvas-row-label">{rowName}</span>
                    <div className="canvas-row-line" />
                  </div>
                ))}

                {/* Nodes and playhead sit on a track that starts after the row labels,
                    aligned with the week headings, so xPos 0–100% spans weeks 1–6. */}
                <div className="canvas-track">
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
          </div>

          {/* Right Detail Panel Inspector */}
          <div className="timeline-detail-panel">
            <div key={currentStep.id} className="step-detail-inner">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollmentTimelineSection;
