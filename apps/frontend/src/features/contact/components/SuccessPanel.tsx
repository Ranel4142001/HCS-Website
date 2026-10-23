import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import Button from '@/shared/components/ui/Button';
import './SuccessPanel.css';

export interface SuccessPanelProps {
  onReset: () => void;
}

export const SuccessPanel: React.FC<SuccessPanelProps> = ({ onReset }) => {
  return (
    <div className="form-success in">
      <div className="success-icon">
        <Icon name="check" />
      </div>
      <h3>Request Received!</h3>
      <p>Thank you for reaching out. A dedicated credentialing specialist will review your details and contact you within 1 business day.</p>
      <Button type="button" variant="secondary" onClick={onReset}>
        Send another message
      </Button>
    </div>
  );
};

export default SuccessPanel;

