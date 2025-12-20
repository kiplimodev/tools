import { calculator as idealWeightCalculator } from "@/lib/calculators/body-composition/ideal-weight-calculator";

type Input = {
  heightCm: number;
  sex: "male" | "female";
};

type Result = {
  idealWeightKg: number;
};

/**
 * Composition wrapper for ideal weight calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getIdealWeight(input: Input): Result | null {
  const value = idealWeightCalculator(input);

  if (value === null) return null;

  return {
    idealWeightKg: value,
  };
}
