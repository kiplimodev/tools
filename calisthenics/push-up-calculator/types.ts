export interface CalculatorInput {
  bodyWeightKg: number;
  maxPushups: number;
  vestWeightKg?: number;
  goalReps?: number;
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
