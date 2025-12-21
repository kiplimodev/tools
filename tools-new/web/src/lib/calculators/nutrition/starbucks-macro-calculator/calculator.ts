import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Deterministic pass-through calculator for Starbucks macros.
 * Ensures values are valid and consistent.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { calories, proteinGrams, carbsGrams, fatGrams } = input;

  if (
    calories <= 0 ||
    proteinGrams < 0 ||
    carbsGrams < 0 ||
    fatGrams < 0
  ) {
    return null;
  }

  return calories;
};
