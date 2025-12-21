import { calculator as tdeeCalculator } from "@/lib/calculators/nutrition/tdee-calculator";

type Input = {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: "male" | "female";
  activityMultiplier: number;
};

type Result = {
  tdeeCalories: number;
};

/**
 * Composition wrapper for TDEE calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getTdee(input: Input): Result | null {
  const value = tdeeCalculator(input);

  if (value === null) return null;

  return {
    tdeeCalories: value,
  };
}
