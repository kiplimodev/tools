import { calculator as starbucksCalculator } from "@/lib/calculators/nutrition/starbucks-macro-calculator";

type Input = {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
};

type Result = {
  calories: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
};

/**
 * Composition wrapper for Starbucks macro calculation.
 * Adapts deterministic calculator output into a UI-safe object.
 */
export function getStarbucksMacros(input: Input): Result | null {
  const calories = starbucksCalculator(input);

  if (calories === null) return null;

  return {
    calories,
    proteinGrams: input.proteinGrams,
    carbsGrams: input.carbsGrams,
    fatGrams: input.fatGrams,
  };
}
