// src/lib/calculators/nutrition/bulk-calculator/bulk.ts

import { calculateTDEE } from "../tdee-calculator/tdee";

export type BulkSurplus =
  | "small"   // lean / slow bulk
  | "medium"  // standard bulk
  | "large";  // aggressive bulk

export interface BulkInput {
  sex: "male" | "female";
  age: number;
  height: number; // cm
  weight: number; // kg
  activity: "sedentary" | "light" | "moderate" | "very" | "extra";
  surplus: BulkSurplus;
}

const SURPLUS_KCAL: Record<BulkSurplus, number> = {
  small: 250,
  medium: 400,
  large: 600,
};

export function calculateBulkCalories(
  input: BulkInput,
): number | null {
  const tdee = calculateTDEE(input);
  if (tdee === null) return null;

  const surplus = SURPLUS_KCAL[input.surplus];
  if (!surplus) return null;

  return tdee + surplus;
}
