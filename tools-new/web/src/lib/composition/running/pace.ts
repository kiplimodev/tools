import { calculator as paceCalculator } from "@/lib/calculators/running/running-pace-calculator";

export type RunningPaceResult = {
  pacePerKmSeconds: number;
  pacePerMileSeconds: number;
  speedKmh: number;
  speedMph: number;
};

export function getRunningPace(input: {
  distanceMeters: number;
  timeSeconds: number;
}): RunningPaceResult | null {
  const pacePerKmSeconds = paceCalculator({
    distanceMeters: input.distanceMeters,
    timeSeconds: input.timeSeconds,
  });

  if (pacePerKmSeconds === null) return null;

  const pacePerMileSeconds = pacePerKmSeconds * 1.609344;
  const speedKmh = 3600 / pacePerKmSeconds;
  const speedMph = speedKmh / 1.609344;

  return {
    pacePerKmSeconds,
    pacePerMileSeconds,
    speedKmh,
    speedMph,
  };
}
