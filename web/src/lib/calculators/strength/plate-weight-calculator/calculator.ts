import type { Input, Output } from "./types";

const DEFAULT_PLATES_KG = [25, 20, 15, 10, 5, 2.5, 1.25];
const EPSILON = 1e-9;

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

export function calculator(input: Input): Output | null {
  const { targetPerSideKg, availablePlatesKg } = input;
  if (targetPerSideKg <= 0) return null;

  const plates = [...(availablePlatesKg ?? DEFAULT_PLATES_KG)].sort((a, b) => b - a);
  const chosen: number[] = [];
  let remaining = targetPerSideKg;

  for (const plate of plates) {
    while (remaining + EPSILON >= plate) {
      chosen.push(plate);
      remaining = roundTo(remaining - plate, 4);
    }
  }

  const totalLoaded = roundTo(chosen.reduce((s, p) => s + p, 0), 2);
  const leftover = roundTo(remaining, 2);

  return { plates: chosen, totalLoaded, missingWeight: leftover > 0.25 ? leftover : null };
}
