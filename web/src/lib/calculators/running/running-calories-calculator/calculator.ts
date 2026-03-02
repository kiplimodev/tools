import type { Input, Output } from "./types";

function metFromSpeed(speedKmh: number): number {
  if (speedKmh < 8) return 7.0;
  if (speedKmh < 10) return 9.8;
  if (speedKmh < 11) return 10.5;
  if (speedKmh < 12) return 11.0;
  if (speedKmh < 13) return 11.5;
  if (speedKmh < 14) return 11.8;
  return 12.3;
}

export function calculator(input: Input): Output | null {
  const { distanceKm, timeMinutes, weightKg } = input;
  if (distanceKm <= 0 || timeMinutes <= 0 || weightKg <= 0) return null;

  const speedKmh = (distanceKm / timeMinutes) * 60;
  const met = metFromSpeed(speedKmh);
  const calories = (met * 3.5 * weightKg * timeMinutes) / 200;

  return { calories: Math.round(calories), met };
}
