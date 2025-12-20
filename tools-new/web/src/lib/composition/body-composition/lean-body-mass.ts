import { calculator as leanBodyMassCalculator } from "@/lib/calculators/body-composition/lean-body-mass-calculator";

type Input = {
  weightKg: number;
  bodyFatPercentage: number;
};

type Result = {
  leanBodyMassKg: number;
};

/**
 * Composition wrapper for lean body mass calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getLeanBodyMass(input: Input): Result | null {
  const value = leanBodyMassCalculator(input);

  if (value === null) return null;

  return {
    leanBodyMassKg: value,
  };
}
