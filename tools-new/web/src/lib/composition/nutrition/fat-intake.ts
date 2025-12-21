import { calculator as fatIntakeCalculator } from "@/lib/calculators/nutrition/fat-intake-calculator";

type Input = {
  weightKg: number;
  goal: "low" | "moderate" | "high";
};

type Result = {
  fatGramsPerDay: number;
};

/**
 * Composition wrapper for fat intake calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getFatIntake(input: Input): Result | null {
  const value = fatIntakeCalculator(input);

  if (value === null) return null;

  return {
    fatGramsPerDay: value,
  };
}
