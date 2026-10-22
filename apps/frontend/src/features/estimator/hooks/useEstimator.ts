import { useState, useCallback } from 'react';
import { EstimatorState, EstimatorRole, EstimatorUrgency, PlanInfo } from '../types/estimator.types';

const INITIAL_STATE: EstimatorState = {
  step: 1,
  role: null,
  baseLow: 0,
  baseHigh: 0,
  add: 0,
  urgent: null,
};

const PLAN_INFO_MAP: Record<EstimatorRole, PlanInfo> = {
  individual: { name: 'Individual Clinician', price: '$599 flat rate per assignment' },
  group: { name: 'Group Practice / Staffing Agency', price: 'Custom volume pricing' },
  enterprise: { name: 'Enterprise Health System', price: 'Tailored pricing — contact sales' },
};

export const useEstimator = () => {
  const [state, setState] = useState<EstimatorState>(INITIAL_STATE);

  const selectRole = useCallback((role: EstimatorRole, baseLow: number, baseHigh: number) => {
    setState((prev) => ({
      ...prev,
      role,
      baseLow,
      baseHigh,
    }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, step: 2 }));
    }, 260);
  }, []);

  const selectVolume = useCallback((add: number) => {
    setState((prev) => ({
      ...prev,
      add,
    }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, step: 3 }));
    }, 260);
  }, []);

  const selectUrgency = useCallback((urgent: EstimatorUrgency) => {
    setState((prev) => ({
      ...prev,
      urgent,
    }));
    setTimeout(() => {
      setState((prev) => ({ ...prev, step: 4 }));
    }, 260);
  }, []);

  const goToStep = useCallback((step: 1 | 2 | 3) => {
    setState((prev) => ({ ...prev, step }));
  }, []);

  const resetQuiz = useCallback(() => {
    setState(INITIAL_STATE);
  }, []);

  const calculatedLow = Math.max(
    5,
    state.urgent === 'yes'
      ? state.baseLow + state.add - 2
      : state.baseLow + state.add
  );

  const calculatedHigh = state.baseHigh + state.add;

  const currentPlan = state.role ? PLAN_INFO_MAP[state.role] : PLAN_INFO_MAP.individual;

  return {
    state,
    selectRole,
    selectVolume,
    selectUrgency,
    goToStep,
    resetQuiz,
    calculatedLow,
    calculatedHigh,
    currentPlan,
  };
};

export default useEstimator;
