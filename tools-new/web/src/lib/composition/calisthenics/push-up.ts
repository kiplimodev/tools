import { calculator as pushUpCalculator } from "@/lib/calculators/calisthenics/push-up-calculator";

type Input = {
  reps: number;
};

type Result = {
  score: number;
};

/**
 * Composition wrapper for push-up calculator.
 * Adapts calculator output into a UI-safe object.
 */
export function getPushUpScore(input: Input): Result | null {
  const value = pushUpCalculator(input);

  if (value === null) return null;

  return {
    score: value,
  };
}
