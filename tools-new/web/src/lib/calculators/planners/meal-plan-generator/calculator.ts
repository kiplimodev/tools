import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Splits daily macros evenly across meals.
 *
 * Returns calories per meal.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { calories, proteinGrams, mealsPerDay } = input;

  if (calories <= 0) return null;
  if (proteinGrams < 0) return null;
  if (mealsPerDay <= 0) return null;

  return calories / mealsPerDay;
};
