// src/lib/calculators/nutrition/tdee-calculator/tdee.ts

export type Sex = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "very"
  | "extra";

export interface TDEEInput {
  sex: Sex;
  age: number;     // years
  height: number;  // cm
  weight: number;  // kg
  activity: ActivityLevel;
}

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
};

/**
 * Basal Metabolic Rate (BMR)
 * Mifflin–St Jeor equation
 */
export function calculateBMR(input: TDEEInput): number | null {
  const { sex, age, height, weight } = input;

  if (
    !Number.isFinite(age) ||
    !Number.isFinite(height) ||
    !Number.isFinite(weight) ||
    age <= 0 ||
    height <= 0 ||
    weight <= 0
  ) {
    return null;
  }

  const base = 10 * weight + 6.25 * height - 5 * age;

  return sex === "male" ? base + 5 : base - 161;
}

/**
 * Total Daily Energy Expenditure (TDEE)
 * BMR × activity multiplier
 */
export function calculateTDEE(input: TDEEInput): number | null {
  const bmr = calculateBMR(input);
  if (bmr === null) return null;

  const multiplier = ACTIVITY_MULTIPLIERS[input.activity];
  if (!multiplier) return null;

  return Math.round(bmr * multiplier);
}
