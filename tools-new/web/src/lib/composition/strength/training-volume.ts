import { calculator as trainingVolumeCalculator } from "@/lib/calculators/strength/training-volume-calculator";

type Input = {
  weightKg: number;
  reps: number;
  sets: number;
};

type Result = {
  totalVolumeKg: number;
};

/**
 * Composition wrapper for training volume.
 * Adapts calculator output into a UI-safe object.
 */
export function getTrainingVolume(input: Input): Result | null {
  const value = trainingVolumeCalculator(input);

  if (value === null) return null;

  return {
    totalVolumeKg: value,
  };
}
