import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Deterministic pull-up score calculator.
 * Returns the number of reps if valid.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { reps } = input;

  if (!Number.isFinite(reps)) return null;
  if (reps < 0) return null;

  return reps;
};
