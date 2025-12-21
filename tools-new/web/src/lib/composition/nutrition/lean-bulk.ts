import { calculator as leanBulkCalculator } from "@/lib/calculators/nutrition/lean-bulk-calculator";

type Input = {
  maintenanceCalories: number;
  surplusCalories: number;
};

type Result = {
  totalCalories: number;
};

/**
 * Composition wrapper for lean bulk calorie calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getLeanBulkCalories(input: Input): Result | null {
  const value = leanBulkCalculator(input);

  if (value === null) return null;

  return {
    totalCalories: value,
  };
}
