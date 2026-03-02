import type { Input } from "./types";

export function calculator(input: Input): number | null {
  const { distance, distanceUnit, timeSeconds } = input;

  if (
    !Number.isFinite(distance) ||
    !Number.isFinite(timeSeconds) ||
    distance <= 0 ||
    timeSeconds <= 0
  ) {
    return null;
  }

  const distanceKm = distanceUnit === "mi" ? distance * 1.60934 : distance;
  return timeSeconds / distanceKm; // seconds per km
}
