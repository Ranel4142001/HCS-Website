import React from 'react';
import Icon from '@/shared/components/ui/Icon';

export interface EstimatorStepVolumeProps {
  selectedAdd: number;
  onSelect: (add: number) => void;
  onBack: () => void;
}

export const EstimatorStepVolume: React.FC<EstimatorStepVolumeProps> = ({ selectedAdd, onSelect, onBack }) => {
  return (
    <div className="est-step">
      <button type="button" className="est-back" onClick={onBack}>
        <Icon name="arrow" /> Back to Step 1
      </button>
      <h3>2. How many providers or payor applications?</h3>
      <div className="est-choice">
        <button
          type="button"
          className={`est-option ${selectedAdd === 0 ? 'selected' : ''}`}
          onClick={() => onSelect(0)}
        >
          <div className="est-opt-icon">
            <Icon name="file" />
          </div>
          <div className="est-opt-text">
            <strong>1 – 3 Providers / Applications</strong>
            <span>Standard processing timeline</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`est-option ${selectedAdd === 5 ? 'selected' : ''}`}
          onClick={() => onSelect(5)}
        >
          <div className="est-opt-icon">
            <Icon name="users" />
          </div>
          <div className="est-opt-text">
            <strong>4 – 10 Providers / Applications</strong>
            <span>Batch verification (+5 days estimated)</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`est-option ${selectedAdd === 10 ? 'selected' : ''}`}
          onClick={() => onSelect(10)}
        >
          <div className="est-opt-icon">
            <Icon name="building" />
          </div>
          <div className="est-opt-text">
            <strong>10+ Providers / Applications</strong>
            <span>High-volume roster onboarding (+10 days estimated)</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default EstimatorStepVolume;

