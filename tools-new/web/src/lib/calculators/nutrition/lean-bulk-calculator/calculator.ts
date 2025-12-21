import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates daily calories for lean bulking.
 * Lean bulk uses a smaller surplus than standard bulking.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { maintenanceCalories, surplusCalories } = input;

  if (maintenanceCalories <= 0) return null;
  if (surplusCalories <= 0) return null;

  return maintenanceCalories + surplusCalories;
};
