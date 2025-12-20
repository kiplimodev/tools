import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates a simple body measurement ratio score.
 * Deterministic aggregation for comparison over time.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { waistCm, hipCm, chestCm } = input;

  if (waistCm <= 0 || hipCm <= 0 || chestCm <= 0) return null;

  return chestCm / waistCm + hipCm / waistCm;
};
