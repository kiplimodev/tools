import type { Input, Output } from "./types";

const DEFAULT_PLATES_KG = [25, 20, 15, 10, 5, 2.5, 1.25];
const EPSILON = 1e-9;

function roundTo(value: number, decimals: number): number {
  const factor = Math.pow(10, decimals);
  return Math.round(value * factor) / factor;
}

function selectPlates(loadPerSide: number, plates: number[]): { platesPerSide: number[]; perSideWeight: number; missingWeight: number | null } {
  const platesPerSide: number[] = [];
  let remaining = loadPerSide;

  for (const plate of plates) {
    while (remaining + EPSILON >= plate) {
      platesPerSide.push(plate);
      remaining = roundTo(remaining - plate, 4);
    }
  }

  const perSideWeight = roundTo(platesPerSide.reduce((s, p) => s + p, 0), 2);
  const leftover = roundTo(remaining, 2);
  return { platesPerSide, perSideWeight, missingWeight: leftover > 0.25 ? leftover : null };
}

export function calculator(input: Input): Output | null {
  const { barWeightKg, targetWeightKg, availablePlatesKg } = input;
  if (barWeightKg <= 0 || targetWeightKg <= 0) return null;
  if (targetWeightKg < barWeightKg) return null;

  const plates = [...(availablePlatesKg ?? DEFAULT_PLATES_KG)].sort((a, b) => b - a);
  const loadPerSide = (targetWeightKg - barWeightKg) / 2;
  return selectPlates(loadPerSide, plates);
}
