import { calculator as strengthRatioCalculator } from "@/lib/calculators/strength/strength-ratio-calculator";

type Input = {
  liftA: number;
  liftB: number;
};

type Result = {
  ratio: number;
};

/**
 * Composition wrapper for strength ratio calculation.
 * Adapts UI-friendly input into calculator input.
 */
export function getStrengthRatio(input: Input): Result | null {
  const value = strengthRatioCalculator({
    primaryLiftKg: input.liftA,
    secondaryLiftKg: input.liftB,
  });

  if (value === null) return null;

  return {
    ratio: value,
  };
}
