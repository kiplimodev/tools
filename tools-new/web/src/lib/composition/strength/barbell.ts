// src/lib/composition/strength/barbell.ts
import { calculator as barbellCalculator } from "@/lib/calculators/strength/barbell-calculator";

type Input = {
  targetWeightKg: number;
  barWeightKg: number;
};

type Result = {
  totalPlateWeightKg: number;
};

/**
 * Composition wrapper for barbell calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getBarbellLoad(input: Input): Result | null {
  const value = barbellCalculator(input);

  if (value === null) return null;

  return {
    totalPlateWeightKg: value,
  };
}
