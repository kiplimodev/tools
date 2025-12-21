import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates number of protein powder scoops needed
 * to meet a daily protein target.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { proteinTargetGrams, proteinPerScoopGrams } = input;

  if (proteinTargetGrams <= 0) return null;
  if (proteinPerScoopGrams <= 0) return null;

  return proteinTargetGrams / proteinPerScoopGrams;
};
