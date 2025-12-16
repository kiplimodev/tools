// src/lib/calculators/nutrition/lean-bulk-calculator/lean-bulk.ts

import { calculateTDEE } from "../tdee-calculator/tdee";

export type LeanBulkRate = "conservative" | "standard" | "aggressive";

export interface LeanBulkInput {
  sex: "male" | "female";
  age: number;
  height: number; // cm
  weight: number; // kg
  activity: "sedentary" | "light" | "moderate" | "very" | "extra";
  rate: LeanBulkRate;
}

const RATE_MULTIPLIER: Record<LeanBulkRate, number> = {
  conservative: 0.05, // +5%
  standard: 0.08,     // +8%
  aggressive: 0.12,   // +12%
};

// Safety caps to keep this a *lean* bulk
const MAX_SURPLUS_KCAL = 350;
const MIN_SURPLUS_KCAL = 150;

export function calculateLeanBulkCalories(
  input: LeanBulkInput,
): number | null {
  const tdee = calculateTDEE(input);
  if (tdee === null) return null;

  const rate = RATE_MULTIPLIER[input.rate];
  if (!rate) return null;

  const rawSurplus = Math.round(tdee * rate);
  const cappedSurplus = Math.min(
    MAX_SURPLUS_KCAL,
    Math.max(MIN_SURPLUS_KCAL, rawSurplus),
  );

  return tdee + cappedSurplus;
}
