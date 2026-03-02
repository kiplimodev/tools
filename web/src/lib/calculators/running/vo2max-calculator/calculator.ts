import type { Input, Output } from "./types";

function categorize(vo2: number): string {
  if (vo2 >= 60) return "Excellent";
  if (vo2 >= 50) return "Very Good";
  if (vo2 >= 40) return "Good";
  if (vo2 >= 30) return "Average";
  return "Below Average";
}

export function calculator(input: Input): Output | null {
  const { distanceKm, timeMinutes } = input;
  if (distanceKm <= 0 || timeMinutes <= 0) return null;

  const speedKmh = (distanceKm / timeMinutes) * 60;
  const speedMetersPerMin = (speedKmh * 1000) / 60;
  const vo2max = (speedMetersPerMin * 0.2 + 3.5) * 1.03;

  return {
    vo2max: Number(vo2max.toFixed(1)),
    speedKmh: Number(speedKmh.toFixed(2)),
    category: categorize(vo2max),
  };
}
