import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import Button from '@/shared/components/ui/Button';
import { ContactRole } from '../types/contact.types';
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
            <strong>Individual Clinician</strong>
            <span>Solo MD, DO, NP, PA, or allied professional</span>
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
            <strong>Group Practice / Staffing Agency</strong>
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
            <strong>Enterprise Health System / MSO</strong>
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

