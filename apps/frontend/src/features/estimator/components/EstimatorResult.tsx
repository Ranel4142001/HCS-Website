import React, { useEffect, useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import Button from '@/shared/components/ui/Button';
import { EstimatorUrgency, PlanInfo } from '../types/estimator.types';

export interface EstimatorResultProps {
  calculatedLow: number;
  calculatedHigh: number;
  urgent: EstimatorUrgency | null;
  plan: PlanInfo;
  onRetake: () => void;
}

export const EstimatorResult: React.FC<EstimatorResultProps> = ({
  calculatedLow,
  calculatedHigh,
  urgent,
  plan,
  onRetake,
}) => {
  const [displayLow, setDisplayLow] = useState(0);
  const [displayHigh, setDisplayHigh] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const duration = 900;
    let animId: number;

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplayLow(Math.round(calculatedLow * eased));
      setDisplayHigh(Math.round(calculatedHigh * eased));

      if (progress < 1) {
        animId = requestAnimationFrame(tick);
      }
    };

    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [calculatedLow, calculatedHigh]);

  const isPriority = urgent === 'yes';

  return (
    <div className="est-result">
      <span className="est-result-badge">
        <Icon name={isPriority ? 'zap' : 'sparkle'} />
        {isPriority ? 'Priority Track' : 'Your Estimate'}
      </span>

      <div className="est-result-num">
        <span className="est-count">{displayLow}</span>-
        <span className="est-count">{displayHigh}</span>
        <span className="est-result-unit">Business Days</span>
      </div>

      <p className="est-result-copy">
        {isPriority
          ? "Since you flagged an upcoming deadline, we'll prioritize your file and keep you posted in real time so nothing slips."
          : "We'll manage every form, deadline, and follow-up on your behalf — with real-time updates the whole way."}
      </p>

      <div className="est-result-plan">
        <div className="fc-icon">
          <Icon name="check-circle" />
        </div>
        <div>
          <strong>{plan.name}</strong>
          <span>{plan.price}</span>
        </div>
      </div>

      <div className="est-result-cta">
        <Button variant="primary" as="a" href="#contact" icon={<Icon name="arrow" />}>
          Get Started Today
        </Button>
        <Button variant="ghost" type="button" onClick={onRetake}>
          Retake Quiz
        </Button>
      </div>

      <p className="est-disclaimer">
        *Estimates vary based on state medical board and insurance payor committee timelines.
      </p>
    </div>
  );
};

export default EstimatorResult;

