// src/lib/calculators/running/vdot-calculator/calculator.ts
import type { Input } from "./types";

/**
 * Jack Daniels VDOT approximation
 * Deterministic, numeric-only, no side effects
 */
export function calculator(input: Input): number | null {
  const { distanceMeters, timeSeconds } = input;

  if (distanceMeters <= 0 || timeSeconds <= 0) {
    return null;
  }

  const distanceKm = distanceMeters / 1000;
  const timeMinutes = timeSeconds / 60;
  const velocity = distanceMeters / timeSeconds; // m/s

  // VO2 max estimate
  const vo2 =
    -4.60 +
    0.182258 * velocity * 60 +
    0.000104 * Math.pow(velocity * 60, 2);

  // Fraction of VO2 max
  const fraction =
    0.8 +
    0.1894393 * Math.exp(-0.012778 * timeMinutes) +
    0.2989558 * Math.exp(-0.1932605 * timeMinutes);

  const vdot = vo2 / fraction;

  if (!Number.isFinite(vdot)) {
    return null;
  }

  return Math.round(vdot * 10) / 10; // one decimal, still numeric
}
