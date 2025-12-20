import { calculator as bodyFatCalculator } from "@/lib/calculators/body-composition/body-fat-calculator";

type Input = {
  weightKg: number;
  heightCm: number;
  age: number;
  sex: "male" | "female";
};

type Result = {
  bodyFatPercentage: number;
};

/**
 * Composition wrapper for body fat calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getBodyFat(input: Input): Result | null {
  const value = bodyFatCalculator(input);

  if (value === null) return null;

  return {
    bodyFatPercentage: value,
  };
}
