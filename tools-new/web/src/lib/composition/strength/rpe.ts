import { calculator as rpeCalculator } from "@/lib/calculators/strength/rpe-calculator";

type Input = {
  weightKg: number;
  reps: number;
  rpe: number;
};

type Result = {
  estimatedOneRepMaxKg: number;
};

/**
 * Composition wrapper for RPE calculator.
 * Adapts calculator output into a UI-safe object.
 */
export function getRpeEstimate(input: Input): Result | null {
  const value = rpeCalculator(input);

  if (value === null) return null;

  return {
    estimatedOneRepMaxKg: value,
  };
}
