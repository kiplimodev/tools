import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Estimates steps per day based on active calories burned.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { activeCalories, caloriesPerStep } = input;

  if (activeCalories <= 0) return null;
  if (caloriesPerStep <= 0) return null;

  return activeCalories / caloriesPerStep;
};
