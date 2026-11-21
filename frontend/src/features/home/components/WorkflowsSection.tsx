import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { WORKFLOWS } from '../content/workflows';
import './WorkflowsSection.css';

/** The three services side by side (home and /services). Nothing to click open, so it needs no client code. */
export const WorkflowsSection: React.FC = () => (
  <section className="agent-workflows-section" id="workflows">
    <div className="container">
      <div className="workflows-head reveal-stagger">
        <div className="workflows-eyebrow">
          <span className="eyebrow-sparkle">
            <Icon name="sparkle" />
          </span>
          <span>What we do</span>
        </div>
        <h2>Every credentialing workflow, handled end to end</h2>
        <p className="workflows-subtitle">
          From the first application to every recredentialing cycle, specialists and AI automation keep each file moving.
        </p>
      </div>

      <ul className="wf-cards reveal-stagger">
        {WORKFLOWS.map((wf) => (
          <li key={wf.id} className="wf-card">
            <span className="wf-card-icon" aria-hidden="true">
              <Icon name={wf.icon} />
            </span>
            <h3>{wf.title}</h3>
            <p>{wf.description}</p>
            <ul className="wf-card-points">
              {wf.highlights.map((point) => (
                <li key={point}>
                  <Icon name="check-circle" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="wf-card-link">
              <span>Get a quote for this service</span>
              <Icon name="arrow" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WorkflowsSection;
