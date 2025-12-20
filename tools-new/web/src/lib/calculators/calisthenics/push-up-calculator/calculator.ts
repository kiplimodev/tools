import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Estimates push-up strength score.
 * Simple deterministic model for progression tracking.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { reps } = input;

  if (reps <= 0) return null;

  return reps;
};
