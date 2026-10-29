import React from 'react';
import './EstimatorProgress.css';

export interface EstimatorProgressProps {
  currentStep: number;
}

export const EstimatorProgress: React.FC<EstimatorProgressProps> = ({ currentStep }) => {
  return (
    <div className="est-progress">
      <div className={`est-p-step ${currentStep === 1 ? 'active' : currentStep > 1 ? 'done' : ''}`} data-ep="1">
        <span className="est-p-num">1</span>
        <span>Practice type</span>
      </div>
      <div className="est-p-line" />
      <div className={`est-p-step ${currentStep === 2 ? 'active' : currentStep > 2 ? 'done' : ''}`} data-ep="2">
        <span className="est-p-num">2</span>
        <span>Volume</span>
      </div>
      <div className="est-p-line" />
      <div className={`est-p-step ${currentStep === 3 ? 'active' : currentStep > 3 ? 'done' : ''}`} data-ep="3">
        <span className="est-p-num">3</span>
        <span>Urgency</span>
      </div>
    </div>
  );
};

export default EstimatorProgress;
