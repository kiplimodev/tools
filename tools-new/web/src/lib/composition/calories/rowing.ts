import { calculator as rowingCalculator } from "@/lib/calculators/calories/rowing-calories-calculator";

type Input = {
  weightKg: number;
  durationMinutes: number;
  mets: number;
};

type Result = {
  calories: number;
};

/**
 * Composition wrapper for rowing calories.
 * Adapts calculator output into UI-safe shape.
 */
export function getRowingCalories(input: Input): Result | null {
  const calories = rowingCalculator(input);

  if (calories === null) return null;

  return { calories };
}
