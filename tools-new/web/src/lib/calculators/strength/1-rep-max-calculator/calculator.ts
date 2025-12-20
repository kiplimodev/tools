import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Estimates one-repetition maximum using the Epley formula.
 *
 * 1RM = weight × (1 + reps / 30)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, reps } = input;

  if (weightKg <= 0) return null;
  if (reps <= 0) return null;
  if (reps > 30) return null;

  return weightKg * (1 + reps / 30);
};
