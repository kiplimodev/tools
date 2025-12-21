import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Carnivore diet macro calculator.
 *
 * Assumes:
 * - Protein = 4 kcal per gram
 * - Fat provides remaining calories (9 kcal per gram)
 * - Carbs = 0
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { calories, proteinGrams } = input;

  if (calories <= 0 || proteinGrams <= 0) return null;

  const proteinCalories = proteinGrams * 4;

  if (proteinCalories >= calories) return null;

  const fatCalories = calories - proteinCalories;
  const fatGrams = fatCalories / 9;

  return fatGrams;
};
