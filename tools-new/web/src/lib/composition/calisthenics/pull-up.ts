import { calculator as pullUpCalculator } from "@/lib/calculators/calisthenics/pull-up-calculator";

type Input = {
  reps: number;
};

type Result = {
  reps: number;
};

/**
 * Composition wrapper for pull-up calculator.
 * Adapts calculator output into a UI-safe object.
 */
export function getPullUp(input: Input): Result | null {
  const value = pullUpCalculator(input);

  if (value === null) return null;

  return {
    reps: value,
  };
}
