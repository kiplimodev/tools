import { calculator as oneRepMaxCalculator } from "@/lib/calculators/strength/1-rep-max-calculator";

type Input = {
  weightKg: number;
  reps: number;
};

type Result = {
  oneRepMaxKg: number;
};

/**
 * Composition wrapper for one-rep max calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getOneRepMax(input: Input): Result | null {
  const value = oneRepMaxCalculator(input);

  if (value === null) return null;

  return {
    oneRepMaxKg: value,
  };
}
