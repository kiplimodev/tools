import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates the total plate weight required (both sides combined).
 *
 * Example:
 * target 100kg, bar 20kg -> plates total = 80kg
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { targetWeightKg, barWeightKg } = input;

  if (targetWeightKg <= 0) return null;
  if (barWeightKg <= 0) return null;
  if (targetWeightKg < barWeightKg) return null;

  return targetWeightKg - barWeightKg;
};
