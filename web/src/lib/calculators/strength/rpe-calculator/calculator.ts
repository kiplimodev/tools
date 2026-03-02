import type { Input, Output } from "./types";

const RPE_CHART: Record<number, number[]> = {
  10:  [1.0, 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74],
  9.5: [0.98, 0.94, 0.9, 0.87, 0.85, 0.82, 0.8, 0.77],
  9:   [0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79],
  8.5: [0.94, 0.9, 0.87, 0.84, 0.81],
  8:   [0.92, 0.89, 0.86, 0.84, 0.81],
  7.5: [0.91, 0.88, 0.85, 0.82, 0.8],
  7:   [0.89, 0.86, 0.84, 0.81, 0.79],
  6.5: [0.88, 0.85, 0.82, 0.8],
  6:   [0.86, 0.84, 0.81, 0.79],
};

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

function lookupPercent(rpe: number, reps: number): number | null {
  const normalized = Number(rpe.toFixed(1));
  const chart = RPE_CHART[normalized];
  if (!chart) return null;
  const pct = chart[reps - 1];
  return pct ?? null;
}

export function calculator(input: Input): Output | null {
  const hasEstimate = input.weightKg !== undefined && input.reps !== undefined && input.rpe !== undefined;
  const hasPredict = input.targetReps !== undefined && input.targetRpe !== undefined && input.estimated1RM !== undefined;

  if (!hasEstimate && !hasPredict) return null;

  const empty: Output = {
    estimated1RM: null, percent1RM: null, rir: null,
    recommendedTrainingMax: null, predictedWeight: null,
  };

  if (hasEstimate) {
    const { weightKg, reps, rpe } = input as Required<Pick<Input, "weightKg" | "reps" | "rpe">>;
    if (weightKg < 0 || reps < 1) return null;
    const pct = lookupPercent(rpe, reps);
    if (pct === null) return null;
    const est1RM = weightKg / pct;
    return {
      ...empty,
      estimated1RM: round2(est1RM),
      percent1RM: round2(pct),
      rir: round2(10 - rpe),
      recommendedTrainingMax: round2(est1RM * 0.9),
    };
  }

  const { estimated1RM, targetReps, targetRpe } = input as Required<Pick<Input, "estimated1RM" | "targetReps" | "targetRpe">>;
  if (estimated1RM <= 0 || targetReps < 1) return null;
  const pct = lookupPercent(targetRpe, targetReps);
  if (pct === null) return null;
  return { ...empty, predictedWeight: round2(estimated1RM * pct), percent1RM: round2(pct) };
}
