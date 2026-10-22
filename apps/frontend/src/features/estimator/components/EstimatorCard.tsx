'use client';

import React from 'react';
import { motion } from 'framer-motion';
import useEstimator from '../hooks/useEstimator';
import EstimatorProgress from './EstimatorProgress';
import EstimatorStepRole from './EstimatorStepRole';
import EstimatorStepVolume from './EstimatorStepVolume';
import EstimatorStepUrgency from './EstimatorStepUrgency';
import EstimatorResult from './EstimatorResult';
import Icon from '@/shared/components/ui/Icon';
import SectionHeader from '@/shared/components/layout/SectionHeader';

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
          eyebrow="Interactive Quiz"
          eyebrowIcon="sparkle"
          title={<>Turnaround Time <em>Estimator</em></>}
          description="Answer 3 quick questions to calculate your estimated credentialing timeframe and plan option."
        />

        <motion.div
          className="est-wrap"
          initial={{ opacity: 0, y: 35, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
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
                <strong>Fast-Track Guarantee</strong>
                <span>Application packets submitted to payors within 48 hours of onboarding.</span>
              </div>
            </div>

            <div className="est-side-card">
              <div className="fc-icon">
                <Icon name="shield" />
              </div>
              <div>
                <strong>100% Primary Source Verified</strong>
                <span>Direct verification with medical boards, SAM, and NPDB to prevent errors.</span>
              </div>
            </div>

            <div className="est-side-card">
              <div className="fc-icon">
                <Icon name="chat" />
              </div>
              <div>
                <strong>Weekly Follow-Up Logs</strong>
                <span>Regular phone calls to payor committees to expedite provider ID issuance.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EstimatorCard;

