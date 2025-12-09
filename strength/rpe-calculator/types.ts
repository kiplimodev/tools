export interface CalculatorInput {
  // Mode A: estimate 1RM from performed set
  weightKg?: number;
  reps?: number;
  rpe?: number;

  // Mode B: predict weight for a target RPE and reps given an estimated 1RM
  targetReps?: number;
  targetRpe?: number;
  estimated1RM?: number;
}

export interface CalculatorOutput {
  // Mode A outputs
  estimated1RM?: number;
  percent1RM?: number;
  rir?: number;
  recommendedTrainingMax?: number;

  // Mode B outputs
  predictedWeight?: number;
}
