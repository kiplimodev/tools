import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Estimates one-rep max using RPE.
 *
 * Assumptions:
 * - RIR = 10 - RPE
 * - Estimated max reps = reps + RIR
 * - Uses Epley formula for 1RM estimation
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { weightKg, reps, rpe } = input;

  if (weightKg <= 0) return null;
  if (reps <= 0) return null;
  if (rpe < 6 || rpe > 10) return null;

  const rir = 10 - rpe;
  const estimatedMaxReps = reps + rir;

  if (estimatedMaxReps <= 0) return null;

  // Epley formula
  return weightKg * (1 + estimatedMaxReps / 30);
};
