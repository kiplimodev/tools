import { calculator as bmiCalculator } from "@/lib/calculators/body-composition/bmi-calculator";

type Input = {
  weightKg: number;
  heightCm: number;
};

type Result = {
  bmi: number;
};

/**
 * Composition wrapper for BMI calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getBmi(input: Input): Result | null {
  const value = bmiCalculator(input);

  if (value === null) return null;

  return {
    bmi: value,
  };
}
