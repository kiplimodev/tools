import type { Input, Output } from "./types";

const ACTIVITY_FACTORS: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
};

// Protein multipliers (g per kg body weight) by goal
const PROTEIN_MULTIPLIERS: Record<string, number> = {
  lose: 2.4,     // higher protein preserves muscle in deficit
  maintain: 2.0,
  gain: 2.2,
};

// Calorie adjustment by goal (fractional modifier on TDEE)
const CALORIE_MODIFIERS: Record<string, number> = {
  lose: 0.8,     // 20% deficit
  maintain: 1.0,
  gain: 1.1,     // 10% surplus
};

export function calculator(input: Input): Output | null {
  if (!input.sex || !input.age || !input.weightKg || !input.heightCm || !input.activityLevel || !input.goal) {
    return null;
  }
  if (input.weightKg <= 0 || input.heightCm <= 0 || input.age <= 0) return null;

  // Mifflin-St Jeor BMR
  const bmr =
    input.sex === "male"
      ? 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age + 5
      : 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age - 161;

  const tdee = bmr * (ACTIVITY_FACTORS[input.activityLevel] ?? 1.2);
  const targetCalories = Math.round(tdee * (CALORIE_MODIFIERS[input.goal] ?? 1.0));

  const proteinG = Math.round(input.weightKg * (PROTEIN_MULTIPLIERS[input.goal] ?? 2.0));
  const proteinCalories = proteinG * 4;

  // Remaining calories come from fat; minimum 30g fat
  const fatCaloriesFromRemainder = Math.max(targetCalories - proteinCalories, 30 * 9);
  const fatG = Math.round(fatCaloriesFromRemainder / 9);

  // Recalculate true calorie total after clamping fat
  const calories = proteinG * 4 + fatG * 9;

  return { calories, proteinG, fatG, carbsG: 0 };
}
