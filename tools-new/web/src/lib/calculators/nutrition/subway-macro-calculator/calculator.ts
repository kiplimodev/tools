import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates remaining calories after accounting for protein and fat.
 *
 * Protein = 4 kcal/g
 * Fat = 9 kcal/g
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { calories, proteinGrams, fatGrams } = input;

  if (calories <= 0 || proteinGrams < 0 || fatGrams < 0) return null;

  const usedCalories = proteinGrams * 4 + fatGrams * 9;

  const remaining = calories - usedCalories;

  if (remaining < 0) return null;

  return remaining;
};
