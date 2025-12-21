// src/lib/composition/running/interval.ts
import { calculator } from "@/lib/calculators/running/interval-calculator";

type Input = {
  runSeconds: number;
  restSeconds: number;
  repeats: number;
};

type Result = {
  totalSeconds: number;
  totalMinutes: number;
};

/**
 * Composition adapter for Interval Calculator.
 * Adds derived units for UI/API usage.
 */
export function getIntervalWorkout(input: Input): Result | null {
  const totalSeconds = calculator(input);

  if (totalSeconds === null) return null;

  return {
    totalSeconds,
    totalMinutes: totalSeconds / 60,
  };
}
