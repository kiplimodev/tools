import { calculator } from "@/lib/calculators/running/split-calculator";

type Input = {
  totalDistanceMeters: number;
  totalTimeSeconds: number;
  splitDistanceMeters: number;
};

type Result = {
  splitTimeSeconds: number;
};

/**
 * Composition adapter for Split Calculator.
 */
export function getSplit(input: Input): Result | null {
  const splitTimeSeconds = calculator(input);

  if (splitTimeSeconds === null) return null;

  return {
    splitTimeSeconds,
  };
}
