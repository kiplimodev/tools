export interface CalculatorInput {
  bodyWeightKg: number;
  maxPullups: number;
  addedWeightKg?: number;
  goalReps?: number;
  grip?: "standard" | "wide" | "chinup";
  tempo?: "normal" | "slow" | "fast";
}

export interface CalculatorOutput {
  effectiveLoadKg: number;
  estimated1RM: number;
  strengthScore: number;
  predictedMaxReps?: number;
  caloriesBurned: number;
  progressionTier: string;
}
