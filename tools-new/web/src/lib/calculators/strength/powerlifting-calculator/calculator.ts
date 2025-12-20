import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates total powerlifting total (squat + bench + deadlift).
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { squatKg, benchKg, deadliftKg } = input;

  if (squatKg <= 0) return null;
  if (benchKg <= 0) return null;
  if (deadliftKg <= 0) return null;

  return squatKg + benchKg + deadliftKg;
};
