import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates a new daily move goal based on a percentage increase.
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { currentStepsPerDay, increasePercent } = input;

  if (currentStepsPerDay <= 0) return null;
  if (increasePercent <= 0) return null;

  const multiplier = 1 + increasePercent / 100;

  return Math.round(currentStepsPerDay * multiplier);
};
