import type { Input } from "./types";

const ACTIVITY_MULTIPLIERS: Record<Input["activity"], number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
};

export function calculator(input: Input): number | null {
  const { sex, age, height, weight, activity } = input;

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
  const bmr = sex === "male" ? base + 5 : base - 161;

  const multiplier = ACTIVITY_MULTIPLIERS[activity];
  if (!multiplier) return null;

  return Math.round(bmr * multiplier);
}
