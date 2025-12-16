// src/lib/calculators/nutrition/protein-powder-calculator/protein-powder.ts

export interface ProteinPowderInput {
  proteinTarget: number; // grams per day
  proteinFromFood?: number; // grams already consumed
  proteinPerScoop: number; // grams per scoop
}

export function calculateProteinPowderScoops(
  input: ProteinPowderInput,
): number | null {
  const { proteinTarget, proteinFromFood = 0, proteinPerScoop } = input;

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

  const remainingProtein = proteinTarget - proteinFromFood;
  if (remainingProtein <= 0) return 0;

  return Math.ceil(remainingProtein / proteinPerScoop);
}
