import { calculator as carnivoreCalculator } from "@/lib/calculators/nutrition/carnivore-macro-calculator";

type Input = {
  calories: number;
  proteinGrams: number;
};

type Result = {
  fatGrams: number;
};

/**
 * Composition wrapper for carnivore macro calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getCarnivoreMacros(input: Input): Result | null {
  const fatGrams = carnivoreCalculator(input);

  if (fatGrams === null) return null;

  return {
    fatGrams,
  };
}
