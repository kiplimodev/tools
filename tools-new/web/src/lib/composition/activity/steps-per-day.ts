import { calculator as stepsCalculator } from "@/lib/calculators/activity/steps-per-day-calculator";

type Input = {
  activeCalories: number;
  caloriesPerStep: number;
};

type Result = {
  stepsPerDay: number;
};

/**
 * Composition wrapper for steps per day calculation.
 * Adapts calculator output into a UI-safe object.
 */
export function getStepsPerDay(input: Input): Result | null {
  const value = stepsCalculator(input);

  if (value === null) return null;

  return {
    stepsPerDay: value,
  };
}
