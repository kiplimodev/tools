import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Lean Body Mass calculator
 *
 * Formula:
 * LBM = weight × (1 − bodyFat%)
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, bodyFatPercentage } = input;

  if (
    weightKg <= 0 ||
    bodyFatPercentage <= 0 ||
    bodyFatPercentage >= 100
  ) {
    return null;
  }

  const leanBodyMass =
    weightKg * (1 - bodyFatPercentage / 100);

  return leanBodyMass;
};
