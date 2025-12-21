import { calculator as bulkCalculator } from "@/lib/calculators/nutrition/bulk-calculator";

type Input = {
  maintenanceCalories: number;
  surplusCalories: number;
};

type Result = {
  totalCalories: number;
};

/**
 * Composition wrapper for bulk calorie calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getBulkCalories(input: Input): Result | null {
  const value = bulkCalculator(input);

  if (value === null) return null;

  return {
    totalCalories: value,
  };
}
