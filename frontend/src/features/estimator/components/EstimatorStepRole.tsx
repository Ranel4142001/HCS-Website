import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { PRACTICE_TYPES } from '@/shared/lib/contact/practice-types';
import { EstimatorRole } from '../types';

export interface EstimatorStepRoleProps {
  selectedRole: EstimatorRole | null;
  onSelect: (role: EstimatorRole) => void;
}

export const EstimatorStepRole: React.FC<EstimatorStepRoleProps> = ({ selectedRole, onSelect }) => {
  return (
    <div className="est-step">
      <h3>1. What type of practice do you need credentialing for?</h3>
      <div className="est-choice">
        <button
          type="button"
          className={`est-option ${selectedRole === 'individual' ? 'selected' : ''}`}
          onClick={() => onSelect('individual')}
        >
          <div className="est-opt-icon">
            <Icon name="user" />
          </div>
          <div className="est-opt-text">
            <strong>{PRACTICE_TYPES.individual}</strong>
            <span>MD, DO, CRNA, NP, PA, or allied professional</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`est-option ${selectedRole === 'group' ? 'selected' : ''}`}
          onClick={() => onSelect('group')}
        >
          <div className="est-opt-icon">
            <Icon name="users" />
          </div>
          <div className="est-opt-text">
            <strong>{PRACTICE_TYPES.group}</strong>
            <span>Multiple providers across 1 or more specialties</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`est-option ${selectedRole === 'enterprise' ? 'selected' : ''}`}
          onClick={() => onSelect('enterprise')}
        >
          <div className="est-opt-icon">
            <Icon name="building" />
          </div>
          <div className="est-opt-text">
            <strong>{PRACTICE_TYPES.enterprise}</strong>
            <span>Large hospital system, MSO, or national platform</span>
          </div>
          <span className="est-opt-check">
            <Icon name="check-circle" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default EstimatorStepRole;

