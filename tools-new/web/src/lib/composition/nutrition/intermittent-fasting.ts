import { calculator as fastingCalculator } from "@/lib/calculators/nutrition/intermittent-fasting-calculator";

type Input = {
  startHour: number;
  endHour: number;
};

type Result = {
  fastingHours: number;
};

/**
 * Composition wrapper for intermittent fasting.
 * Adapts calculator output into a UI-safe object.
 */
export function getIntermittentFasting(input: Input): Result | null {
  const value = fastingCalculator(input);

  if (value === null) return null;

  return {
    fastingHours: value,
  };
}
