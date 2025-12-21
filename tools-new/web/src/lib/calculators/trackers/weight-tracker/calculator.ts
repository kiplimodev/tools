import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates weight change (delta).
 *
 * Positive = gain
 * Negative = loss
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { startWeightKg, currentWeightKg } = input;

  if (startWeightKg <= 0) return null;
  if (currentWeightKg <= 0) return null;

  return currentWeightKg - startWeightKg;
};
