import { calculator } from "@/lib/calculators/running/running-splits-calculator";

type Input = {
  distanceMeters: number;
  timeSeconds: number;
  splitMeters: number;
};

type Result = {
  splitSeconds: number;
};

/**
 * Composition adapter for Running Splits Calculator.
 * Converts raw calculator output into UI-ready shape.
 */
export function getRunningSplits(input: Input): Result | null {
  const result = calculator(input);

  if (result === null) return null;

  return {
    splitSeconds: result,
  };
}
