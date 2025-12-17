// src/lib/composition/running/vdot.ts
import { calculator as vdotCalculator } from "@/lib/calculators/running/vdot-calculator";

type Input = {
  distanceMeters: number;
  timeSeconds: number;
};

type TrainingPaces = {
  easyMin: number;
  easyMax: number;
  threshold: number;
  interval: number;
};

type Result = {
  vdot: number;
  racePaceSecondsPerKm: number;
  trainingPaces: TrainingPaces;
};

/**
 * VDOT composition
 * Converts raw VDOT into training-meaningful outputs
 */
export function getVdot(input: Input): Result | null {
  const { distanceMeters, timeSeconds } = input;

  const vdot = vdotCalculator({ distanceMeters, timeSeconds });
  if (vdot === null) return null;

  const racePaceSecondsPerKm = timeSeconds / (distanceMeters / 1000);

  // Jack Daniels pace approximations (seconds per km)
  const easyMin = racePaceSecondsPerKm * 1.20;
  const easyMax = racePaceSecondsPerKm * 1.35;
  const threshold = racePaceSecondsPerKm * 0.95;
  const interval = racePaceSecondsPerKm * 0.90;

  return {
    vdot,
    racePaceSecondsPerKm: Math.round(racePaceSecondsPerKm),
    trainingPaces: {
      easyMin: Math.round(easyMin),
      easyMax: Math.round(easyMax),
      threshold: Math.round(threshold),
      interval: Math.round(interval),
    },
  };
}
