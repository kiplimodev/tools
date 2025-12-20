import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates total plate weight required for a barbell.
 * Excludes the bar itself.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { targetWeightKg, barbellWeightKg } = input;

  if (targetWeightKg <= 0) return null;
  if (barbellWeightKg <= 0) return null;
  if (targetWeightKg <= barbellWeightKg) return null;

  return targetWeightKg - barbellWeightKg;
};
