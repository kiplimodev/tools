export type Input = {
  // Mode A: estimate 1RM from a performed set
  weightKg?: number;
  reps?: number;
  rpe?: number;
  // Mode B: predict weight for a target RPE and reps
  targetReps?: number;
  targetRpe?: number;
  estimated1RM?: number;
};

export type Output = {
  estimated1RM: number | null;
  percent1RM: number | null;
  rir: number | null;
  recommendedTrainingMax: number | null;
  predictedWeight: number | null;
};
