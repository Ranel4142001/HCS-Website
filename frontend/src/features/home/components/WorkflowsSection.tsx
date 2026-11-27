import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { WORKFLOWS } from '../content/workflows';
import './WorkflowsSection.css';

/** The three services side by side (home and /services). `compact` (home) hides the detail points. */
export const WorkflowsSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <section className="agent-workflows-section" id="workflows">
    <div className="container">
      <div className="workflows-head reveal-stagger">
        <h2>Everything credentialing, handled</h2>
        <p className="workflows-subtitle">From the first application to every renewal.</p>
      </div>

      <ul className="wf-cards reveal-stagger">
        {WORKFLOWS.map((wf) => (
          <li key={wf.id} className="wf-card">
            <span className="wf-card-icon" aria-hidden="true">
              <Icon name={wf.icon} />
            </span>
            <h3>{wf.title}</h3>
            <p>{wf.description}</p>
            {!compact && (
            <ul className="wf-card-points">
              {wf.highlights.map((point) => (
                <li key={point}>
                  <Icon name="check-circle" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            )}
            <a href="#contact" className="wf-card-link">
              <span>Get a quote</span>
              <Icon name="arrow" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WorkflowsSection;
