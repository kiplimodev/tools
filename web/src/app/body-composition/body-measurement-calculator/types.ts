export interface CalculatorInput {
  neckCm?: number;
  chestCm?: number;
  waistCm?: number;
  hipCm?: number;
  thighCm?: number;
  calfCm?: number;
  bicepCm?: number;
  forearmCm?: number;
}

export interface CalculatorOutput {
  measurementsCount: number;
  totalCm: number;
  averageCm: number;
  minCm: number;
  maxCm: number;
  measurements: Record<string, number>;
}
