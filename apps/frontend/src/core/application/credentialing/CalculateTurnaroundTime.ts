import { TurnaroundEstimateInput, TurnaroundEstimateResult } from './TurnaroundEstimateDto';

export class CalculateTurnaroundTimeUseCase {
  public execute(input: TurnaroundEstimateInput): TurnaroundEstimateResult {
    let low = 14;
    let high = 30;
    let planName = 'Individual Clinician';
    let priceText = '$599 flat rate';

    if (input.role === 'group') {
      low = 21;
      high = 45;
      planName = 'Group Practice';
      priceText = 'Custom volume pricing';
    } else if (input.role === 'enterprise') {
      low = 30;
      high = 60;
      planName = 'Enterprise System';
      priceText = 'Tailored pricing';
    }

    if (input.add === '4-10') {
      low += 5;
      high += 7;
    } else if (input.add === '10+') {
      low += 10;
      high += 15;
    }

    const isPriority = input.urgent === 'yes';
    if (isPriority) {
      low = Math.max(5, low - 2);
      high = Math.max(10, high - 5);
    }

    return {
      lowDays: low,
      highDays: high,
      planName,
      priceText,
      isPriority,
    };
  }
}

