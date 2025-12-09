export interface CalculatorInput {
  currentWeightKg: number;
  currentBodyFatPercent: number;
  goalWeightKg?: number;
  goalBodyFatPercent?: number;
  weeklyFatChangeKg?: number;
  weeklyLeanChangeKg?: number;
}

export interface CalculatorOutput {
  currentFatMassKg: number;
  currentLeanMassKg: number;
  goalFatMassKg?: number;
  goalLeanMassKg?: number;
  fatChangeKg?: number;
  leanChangeKg?: number;
  weeklyFatChangeKg?: number;
  weeklyLeanChangeKg?: number;
  estimatedWeeksToGoal?: number;
  classification: string;
}
