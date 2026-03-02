import type { Input, Output } from "./types";

const MAX_REPS = 20;

function round1(v: number): number {
  return Math.round(v * 10) / 10;
}

export function calculator(input: Input): Output | null {
  const { weightKg, reps } = input;
  if (weightKg <= 0 || reps < 1 || reps > MAX_REPS) return null;

  if (reps === 1) {
    const v = round1(weightKg);
    return { epley: v, brzycki: v, lombardi: v, oconner: v, lander: v };
  }

  return {
    epley: round1(weightKg * (1 + reps / 30)),
    brzycki: round1(weightKg * (36 / (37 - reps))),
    lombardi: round1(weightKg * Math.pow(reps, 0.1)),
    oconner: round1(weightKg * (1 + reps / 40)),
    lander: round1((100 * weightKg) / (101.3 - 2.67123 * reps)),
  };
}
