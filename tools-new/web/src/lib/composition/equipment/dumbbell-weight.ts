import { calculator as dumbbellWeightCalculator } from "@/lib/calculators/equipment/dumbbell-weight-calculator";

type Input = {
  targetWeightKg: number;
  handleWeightKg: number;
};

type Result = {
  plateWeightKg: number;
};

/**
 * Composition wrapper for dumbbell weight calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getDumbbellWeight(input: Input): Result | null {
  const value = dumbbellWeightCalculator(input);

  if (value === null) return null;

  return {
    plateWeightKg: value,
  };
}
