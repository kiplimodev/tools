import type { Input, Output } from "./types";

function round2(v: number): number {
  return Math.round(v * 100) / 100;
}

export function calculator(input: Input): Output | null {
  const { bodyWeightKg, benchKg, squatKg, deadliftKg, ohpKg, rowKg } = input;
  if (bodyWeightKg <= 0) return null;
  if (benchKg < 0 || squatKg < 0 || deadliftKg < 0) return null;
  if (benchKg === 0 && squatKg === 0 && deadliftKg === 0) return null;

  const total = benchKg + squatKg + deadliftKg;

  const pushPullRatio =
    rowKg && rowKg > 0
      ? round2((benchKg > 0 ? benchKg : ohpKg ?? 0) / rowKg)
      : null;

  const squatDeadliftRatio =
    deadliftKg > 0 ? round2(squatKg / deadliftKg) : 0;

  const upper = benchKg + (ohpKg !== undefined ? ohpKg : benchKg * 0.6);
  const lower = squatKg + deadliftKg;
  const upperLowerBalance =
    upper > lower ? "upper-dominant" : lower > upper ? "lower-dominant" : "balanced";

  return {
    benchToBody: round2(benchKg / bodyWeightKg),
    squatToBody: round2(squatKg / bodyWeightKg),
    deadliftToBody: round2(deadliftKg / bodyWeightKg),
    pushPullRatio,
    squatDeadliftRatio,
    upperLowerBalance,
    benchPercent: round2(benchKg / total),
    squatPercent: round2(squatKg / total),
    deadliftPercent: round2(deadliftKg / total),
  };
}
