import { calculator as runningPaceCalculator } from "@/lib/calculators/running/running-pace-calculator";

type Input = {
  distanceMeters: number;
  timeSeconds: number;
};

export type RunningPaceResult = {
  paceMinPerKm: number;
  speedKmPerHour: number;
};

/**
 * Composition wrapper for running pace.
 * Adapts raw calculator output into UI-safe values.
 */
export function getRunningPace(
  input: Input
): RunningPaceResult | null {
  const paceSecondsPerKm = runningPaceCalculator(input);

  if (paceSecondsPerKm === null) return null;

  const paceMinPerKm = paceSecondsPerKm / 60;
  const speedKmPerHour = 3600 / paceSecondsPerKm;

  return {
    paceMinPerKm,
    speedKmPerHour,
  };
}
