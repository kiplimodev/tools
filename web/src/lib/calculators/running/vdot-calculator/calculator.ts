import type { Input, Output } from "./types";

export function calculator(input: Input): Output | null {
  const { distanceKm, timeMinutes } = input;
  if (distanceKm <= 0 || timeMinutes <= 0) return null;

  const velocity = (distanceKm * 1000) / timeMinutes; // m/min

  const vo2 = -4.6 + 0.182258 * velocity + 0.000104 * velocity * velocity;

  const percentMax =
    0.8 +
    0.1894393 * Math.exp(-0.012778 * timeMinutes) +
    0.2989558 * Math.exp(-0.1932605 * timeMinutes);

  const vdot = vo2 / percentMax;

  // Predict finish time for a distance (returns minutes)
  const predictMinutes = (km: number) => (timeMinutes / distanceKm) * km;

  return {
    vdot: Number(vdot.toFixed(1)),
    fiveKMinutes: Number(predictMinutes(5).toFixed(2)),
    tenKMinutes: Number(predictMinutes(10).toFixed(2)),
    halfMarathonMinutes: Number(predictMinutes(21.097).toFixed(2)),
  };
}
