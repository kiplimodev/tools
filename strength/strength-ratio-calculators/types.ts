export interface CalculatorInput {
  bodyWeightKg: number;
  benchKg: number;
  squatKg: number;
  deadliftKg: number;
  ohpKg?: number;
  rowKg?: number;
}

export interface CalculatorOutput {
  benchToBody: number;
  squatToBody: number;
  deadliftToBody: number;
  pushPullRatio?: number;
  squatDeadliftRatio: number;
  upperLowerBalance: string;
  proportions: {
    benchPercent: number;
    squatPercent: number;
    deadliftPercent: number;
  };
}
