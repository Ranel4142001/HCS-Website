import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { EstimatorUrgency } from '../types';

export interface EstimatorStepUrgencyProps {
  selectedUrgent: EstimatorUrgency | null;
  onSelect: (urgent: EstimatorUrgency) => void;
  onBack: () => void;
}

export const EstimatorStepUrgency: React.FC<EstimatorStepUrgencyProps> = ({ selectedUrgent, onSelect, onBack }) => {
  return (
    <div className="est-step">
      <button type="button" className="est-back" onClick={onBack}>
        <Icon name="arrow" /> Back to Step 2
      </button>
      <h3>3. Do you have an upcoming deadline or start date?</h3>
      <div className="est-choice">
        <button
          type="button"
          className={`est-option ${selectedUrgent === 'yes' ? 'selected' : ''}`}
          onClick={() => onSelect('yes')}
        >
          <div className="est-opt-icon">
            <Icon name="zap" />
          </div>
          <div className="est-opt-text">
            <strong>Yes — Urgent Deadline (&lt; 30 Days)</strong>
            <span>Priority fast-track processing</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`est-option ${selectedUrgent === 'no' ? 'selected' : ''}`}
          onClick={() => onSelect('no')}
        >
          <div className="est-opt-icon">
            <Icon name="clock" />
          </div>
          <div className="est-opt-text">
            <strong>No — Standard Timeline</strong>
            <span>Regular payor processing speed</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default EstimatorStepUrgency;

