import { calculator as bodyMeasurementCalculator } from "@/lib/calculators/body-composition/body-measurement-calculator";

type Input = {
  waistCm: number;
  hipCm: number;
  chestCm: number;
};

type Result = {
  measurementScore: number;
};

/**
 * Composition wrapper for body measurement calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getBodyMeasurement(input: Input): Result | null {
  const value = bodyMeasurementCalculator(input);

  if (value === null) return null;

  return {
    measurementScore: value,
  };
}
