import { calculator as weightTrackerCalculator } from "@/lib/calculators/trackers/weight-tracker";

type Input = {
  startWeightKg: number;
  currentWeightKg: number;
};

type Result = {
  deltaKg: number;
};

/**
 * Composition wrapper for weight tracking.
 * Adapts calculator output into a UI-safe object.
 */
export function getWeightDelta(input: Input): Result | null {
  const value = weightTrackerCalculator(input);

  if (value === null) return null;

  return {
    deltaKg: value,
  };
}
