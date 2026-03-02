import type { Input } from "./types";

export function calculator(input: Input): number | null {
  const { proteinTarget, proteinFromFood, proteinPerScoop } = input;

  if (
    !Number.isFinite(proteinTarget) ||
    !Number.isFinite(proteinFromFood) ||
    !Number.isFinite(proteinPerScoop) ||
    proteinTarget <= 0 ||
    proteinFromFood < 0 ||
    proteinPerScoop <= 0
  ) {
    return null;
  }

  const remaining = proteinTarget - proteinFromFood;
  if (remaining <= 0) return 0;

  return Math.ceil(remaining / proteinPerScoop);
}
