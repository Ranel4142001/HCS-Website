import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import { PRACTICE_TYPES } from '@/shared/lib/contact/practice-types';
import Button from '@/shared/components/ui/Button';
import { ContactRole } from '../types';
import './RoleStep.css';

export interface RoleStepProps {
  selectedRole: ContactRole | null;
  onSelectRole: (role: ContactRole) => void;
  onNext: () => void;
}

export const RoleStep: React.FC<RoleStepProps> = ({ selectedRole, onSelectRole, onNext }) => {
  return (
    <div className="form-step" id="stepRole">
      <div className="role-choice">
        <button
          type="button"
          className={`role-option ${selectedRole === 'individual' ? 'selected' : ''}`}
          onClick={() => onSelectRole('individual')}
        >
          <div className="role-icon">
            <Icon name="user" />
          </div>
          <div className="role-text">
            <strong>{PRACTICE_TYPES.individual}</strong>
            <span>MD, DO, CRNA, NP, PA, or allied professional</span>
          </div>
          <span className="role-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`role-option ${selectedRole === 'group' ? 'selected' : ''}`}
          onClick={() => onSelectRole('group')}
        >
          <div className="role-icon">
            <Icon name="users" />
          </div>
          <div className="role-text">
            <strong>{PRACTICE_TYPES.group}</strong>
            <span>Medical groups, clinics, or staffing teams</span>
          </div>
          <span className="role-check">
            <Icon name="check-circle" />
          </span>
        </button>

        <button
          type="button"
          className={`role-option ${selectedRole === 'enterprise' ? 'selected' : ''}`}
          onClick={() => onSelectRole('enterprise')}
        >
          <div className="role-icon">
            <Icon name="building" />
          </div>
          <div className="role-text">
            <strong>{PRACTICE_TYPES.enterprise}</strong>
            <span>Hospitals, health systems, or telehealth</span>
          </div>
          <span className="role-check">
            <Icon name="check-circle" />
          </span>
        </button>
      </div>

      <Button
        type="button"
        variant="primary"
        fullWidth
        disabled={!selectedRole}
        onClick={onNext}
        icon={<Icon name="arrow" />}
      >
        Continue
      </Button>
    </div>
  );
};

export default RoleStep;

