import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates total training volume.
 *
 * Volume = weight × reps × sets
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, reps, sets } = input;

  if (weightKg <= 0 || reps <= 0 || sets <= 0) return null;

  return weightKg * reps * sets;
};
