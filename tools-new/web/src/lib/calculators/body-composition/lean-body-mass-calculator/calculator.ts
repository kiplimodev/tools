import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates lean body mass from total weight and body fat percentage.
 *
 * Formula:
 * LBM = weight × (1 − bodyFat%)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, bodyFatPercentage } = input;

  if (weightKg <= 0) return null;
  if (bodyFatPercentage < 0 || bodyFatPercentage > 100) return null;

  const fatFraction = bodyFatPercentage / 100;

  return weightKg * (1 - fatFraction);
};
