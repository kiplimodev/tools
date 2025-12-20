import { calculator as plateWeightCalculator } from "@/lib/calculators/strength/plate-weight-calculator";

type Input = {
  targetWeightKg: number;
  barbellWeightKg: number;
};

type Result = {
  plateWeightKg: number;
};

/**
 * Composition wrapper for plate weight calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getPlateWeight(input: Input): Result | null {
  const value = plateWeightCalculator(input);

  if (value === null) return null;

  return {
    plateWeightKg: value,
  };
}
