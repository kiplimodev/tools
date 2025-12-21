import { calculator as subwayCalculator } from "@/lib/calculators/nutrition/subway-macro-calculator";

type Input = {
  calories: number;
  proteinGrams: number;
  fatGrams: number;
};

type Result = {
  remainingCalories: number;
};

/**
 * Composition wrapper for Subway macro calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getSubwayMacros(input: Input): Result | null {
  const value = subwayCalculator(input);

  if (value === null) return null;

  return {
    remainingCalories: value,
  };
}
