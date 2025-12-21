import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates daily fat intake in grams based on body weight and goal.
 *
 * Low: 0.6 g/kg
 * Moderate: 0.8 g/kg
 * High: 1.0 g/kg
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, goal } = input;

  if (weightKg <= 0) return null;

  const multipliers: Record<Input["goal"], number> = {
    low: 0.6,
    moderate: 0.8,
    high: 1.0,
  };

  return weightKg * multipliers[goal];
};
