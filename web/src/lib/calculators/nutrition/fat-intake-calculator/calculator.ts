import type { Input } from "./types";

const FAT_GRAMS_PER_KG: Record<Input["goal"], number> = {
  minimum: 0.6,
  moderate: 0.8,
  high: 1.0,
};

export function calculator(input: Input): number | null {
  const { weight, goal } = input;

  if (!Number.isFinite(weight) || weight <= 0) return null;

  const multiplier = FAT_GRAMS_PER_KG[goal];
  if (!multiplier) return null;

  return Math.round(weight * multiplier);
}
