import { calculator as powerliftingCalculator } from "@/lib/calculators/strength/powerlifting-calculator";

type Input = {
  squatKg: number;
  benchKg: number;
  deadliftKg: number;
};

type Result = {
  totalKg: number;
};

/**
 * Composition wrapper for powerlifting total.
 * Adapts calculator output into a UI-safe object.
 */
export function getPowerliftingTotal(input: Input): Result | null {
  const value = powerliftingCalculator(input);

  if (value === null) return null;

  return {
    totalKg: value,
  };
}
