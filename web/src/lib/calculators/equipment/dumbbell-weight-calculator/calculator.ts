import type { Input, Output } from "./types";

const DEFAULT_WEIGHTS_KG = [2.5, 5, 7.5, 10, 12.5, 15, 17.5, 20, 22.5, 25, 30, 35, 40, 45, 50];

export function calculator(input: Input): Output | null {
  const { targetWeightKg, availableWeightsKg } = input;
  if (targetWeightKg <= 0) return null;

  const weights = [...(availableWeightsKg ?? DEFAULT_WEIGHTS_KG)].sort((a, b) => a - b);
  if (weights.length === 0) return null;

  // Find closest available weight (round down, or exact match)
  let selected = weights[0];
  for (const w of weights) {
    if (w <= targetWeightKg) selected = w;
    else break;
  }

  const missing = targetWeightKg > selected ? Math.round((targetWeightKg - selected) * 100) / 100 : null;

  return { selectedWeight: selected, missingWeight: missing };
}
