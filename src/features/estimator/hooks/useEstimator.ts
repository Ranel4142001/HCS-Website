import { useState, useCallback } from 'react';
import { EstimatorState, EstimatorRole, EstimatorUrgency } from '../types';
import { ESTIMATE_RANGES, PLAN_INFO_MAP } from '../content/plans';

const INITIAL_STATE: EstimatorState = {
  step: 1,
  role: null,
  baseLow: 0,
  baseHigh: 0,
  add: 0,
  urgent: null,
};

export const useEstimator = () => {
  const [state, setState] = useState<EstimatorState>(INITIAL_STATE);

  const selectRole = useCallback((role: EstimatorRole) => {
    const { low, high } = ESTIMATE_RANGES[role];
    setState((prev) => ({
      ...prev,
      role,
      baseLow: low,
      baseHigh: high,
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
