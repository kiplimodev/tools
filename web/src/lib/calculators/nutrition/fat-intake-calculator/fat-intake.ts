// src/lib/calculators/nutrition/fat-intake-calculator/fat-intake.ts

export type FatGoal = "minimum" | "moderate" | "high";

export interface FatIntakeInput {
  weight: number; // kg
  goal: FatGoal;
}

/**
 * Fat intake guidelines (grams per kg bodyweight)
 * - minimum: hormone-safe lower bound
 * - moderate: balanced intake
 * - high: low-carb / high-fat styles
 */
const FAT_GRAMS_PER_KG: Record<FatGoal, number> = {
  minimum: 0.6,
  moderate: 0.8,
  high: 1.0,
};

export function calculateFatIntake(
  input: FatIntakeInput,
): number | null {
  const { weight, goal } = input;

  if (
    !Number.isFinite(weight) ||
    weight <= 0
  ) {
    return null;
  }

  const multiplier = FAT_GRAMS_PER_KG[goal];
  if (!multiplier) return null;

  return Math.round(weight * multiplier);
}
