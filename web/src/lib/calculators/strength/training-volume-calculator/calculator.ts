import type { Input, Output, ExerciseInput } from "./types";

function isNum(v: unknown): v is number {
  return typeof v === "number" && !Number.isNaN(v);
}

function calcVolume(sets: number, reps: number, weightKg: number): number {
  return Math.round(sets * reps * weightKg);
}

export function calculator(input: Input): Output | null {
  const hasSingle = input.sets !== undefined || input.reps !== undefined || input.weightKg !== undefined;
  const hasMulti = Array.isArray(input.exercises);

  if (!hasSingle && !hasMulti) return null;
  if (hasSingle && hasMulti) return null;

  if (hasMulti) {
    const exercises = input.exercises as ExerciseInput[];
    if (exercises.length === 0) return null;
    for (const e of exercises) {
      if (!e.name || e.sets < 1 || e.reps < 1 || e.weightKg < 0) return null;
    }
    const exerciseVolumes = exercises.map((e) => ({
      name: e.name,
      volume: calcVolume(e.sets, e.reps, e.weightKg),
    }));
    const totalVolume = Math.round(exerciseVolumes.reduce((s, e) => s + e.volume, 0));
    return { totalVolume, volumePerSet: null, exerciseVolumes };
  }

  if (!isNum(input.sets) || !isNum(input.reps) || !isNum(input.weightKg)) return null;
  if (input.sets < 1 || input.reps < 1 || input.weightKg < 0) return null;

  return {
    totalVolume: calcVolume(input.sets, input.reps, input.weightKg),
    volumePerSet: Math.round(input.reps * input.weightKg),
    exerciseVolumes: null,
  };
}
