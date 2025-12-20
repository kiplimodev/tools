import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates the ratio between two strength lifts.
 *
 * Example: bench / squat, deadlift / squat, etc.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { primaryLiftKg, secondaryLiftKg } = input;

  if (primaryLiftKg <= 0) return null;
  if (secondaryLiftKg <= 0) return null;

  return primaryLiftKg / secondaryLiftKg;
};
