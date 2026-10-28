'use client';

import React from 'react';
import useEstimator from '../hooks/useEstimator';
import EstimatorProgress from './EstimatorProgress';
import EstimatorStepRole from './EstimatorStepRole';
import EstimatorStepVolume from './EstimatorStepVolume';
import EstimatorStepUrgency from './EstimatorStepUrgency';
import EstimatorResult from './EstimatorResult';
import Icon from '@/shared/components/ui/Icon';
import SectionHeader from '@/shared/components/layout/SectionHeader';
import './EstimatorCard.css';

export const EstimatorCard: React.FC = () => {
  const {
    state,
    selectRole,
    selectVolume,
    selectUrgency,
    goToStep,
    resetQuiz,
    calculatedLow,
    calculatedHigh,
    currentPlan,
  } = useEstimator();

  return (
    <section className="estimator" id="estimator">
      <div className="container">
        <SectionHeader
          eyebrow="Free tool"
          eyebrowIcon="sparkle"
          title={<>How long will <em>credentialing take?</em></>}
          description="Answer three quick questions for an estimated timeline and the plan that fits your practice."
        />

        <div className="est-wrap reveal">
          <div className="est-card">
            {state.step < 4 && <EstimatorProgress currentStep={state.step} />}

            {state.step === 1 && (
              <EstimatorStepRole selectedRole={state.role} onSelect={selectRole} />
            )}

            {state.step === 2 && (
              <EstimatorStepVolume
                selectedAdd={state.add}
                onSelect={selectVolume}
                onBack={() => goToStep(1)}
              />
            )}

            {state.step === 3 && (
              <EstimatorStepUrgency
                selectedUrgent={state.urgent}
                onSelect={selectUrgency}
                onBack={() => goToStep(2)}
              />
            )}

            {state.step === 4 && (
              <EstimatorResult
                calculatedLow={calculatedLow}
                calculatedHigh={calculatedHigh}
                urgent={state.urgent}
                plan={currentPlan}
                onRetake={resetQuiz}
              />
            )}
          </div>

          <div className="est-side">
            <div className="est-side-card">
              <div className="fc-icon">
                <Icon name="clock" />
              </div>
              <div>
                <strong>Fast submissions</strong>
                <span>Applications go out as soon as your file is complete — no waiting in a queue.</span>
              </div>
            </div>

            <div className="est-side-card">
              <div className="fc-icon">
                <Icon name="shield" />
              </div>
              <div>
                <strong>Primary source verified</strong>
                <span>Credentials checked directly with licensing boards, NPDB, OIG and SAM.gov.</span>
              </div>
            </div>

            <div className="est-side-card">
              <div className="fc-icon">
                <Icon name="chat" />
              </div>
              <div>
                <strong>Scheduled source follow-up</strong>
                <span>We follow up with every source until each verification is complete.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimatorCard;

