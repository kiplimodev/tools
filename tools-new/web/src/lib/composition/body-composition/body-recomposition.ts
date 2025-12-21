// src/lib/composition/body-composition/body-recomposition.ts
import { calculator as bodyRecompositionCalculator } from "@/lib/calculators/body-composition/body-recomposition-calculator";

type Input = {
  weightKg: number;
  bodyFatPercent: number;
  targetBodyFatPercent: number;
};

type Result = {
  targetWeightKg: number;
  weightChangeKg: number;
};

/**
 * Composition wrapper for body recomposition.
 * Preserves lean mass and adapts output for UI usage.
 */
export function getBodyRecomposition(input: Input): Result | null {
  const targetWeightKg = bodyRecompositionCalculator(input);

  if (targetWeightKg === null) return null;

  return {
    targetWeightKg,
    weightChangeKg: targetWeightKg - input.weightKg,
  };
}
