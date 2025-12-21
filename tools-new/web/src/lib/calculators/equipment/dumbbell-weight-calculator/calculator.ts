import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates total plate weight required for a dumbbell.
 * Assumes plates are split evenly on both sides.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { targetWeightKg, handleWeightKg } = input;

  if (targetWeightKg <= 0) return null;
  if (handleWeightKg < 0) return null;
  if (targetWeightKg <= handleWeightKg) return null;

  return targetWeightKg - handleWeightKg;
};
