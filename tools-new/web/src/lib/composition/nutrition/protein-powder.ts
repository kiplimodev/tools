import { calculator as proteinPowderCalculator } from "@/lib/calculators/nutrition/protein-powder-calculator";

type Input = {
  proteinTargetGrams: number;
  proteinPerScoopGrams: number;
};

type Result = {
  scoopsRequired: number;
};

/**
 * Composition wrapper for protein powder calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getProteinPowder(input: Input): Result | null {
  const value = proteinPowderCalculator(input);

  if (value === null) return null;

  return {
    scoopsRequired: value,
  };
}
