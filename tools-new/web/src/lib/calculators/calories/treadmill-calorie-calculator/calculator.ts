import type { Input } from "./types";

/**
 * Deterministic treadmill calorie calculator.
 *
 * Formula (MET-based, simplified):
 * Calories = MET × weight (kg) × duration (hours)
 *
 * Speed → MET approximation:
 *  - < 6 km/h  → 3.5
 *  - 6–8 km/h  → 7.0
 *  - 8–10 km/h → 9.8
 *  - > 10 km/h → 11.0
 */
export function calculator(input: Input): number | null {
  const { weightKg, speedKmh, durationMinutes } = input;

  if (
    weightKg <= 0 ||
    speedKmh <= 0 ||
    durationMinutes <= 0
  ) {
    return null;
  }

  let met: number;

  if (speedKmh < 6) met = 3.5;
  else if (speedKmh < 8) met = 7.0;
  else if (speedKmh < 10) met = 9.8;
  else met = 11.0;

  const hours = durationMinutes / 60;

  return met * weightKg * hours;
}
