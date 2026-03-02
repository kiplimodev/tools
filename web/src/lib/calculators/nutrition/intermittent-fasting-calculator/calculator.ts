import type { Input, Output } from "./types";

export function calculator(input: Input): Output | null {
  const { protocol, dailyCalories, meals } = input;

  if (dailyCalories <= 0 || meals < 1) return null;

  const fastingHours =
    protocol === "omad" ? 23 : Number(protocol.split(":")[0]);

  const eatingHours = 24 - fastingHours;
  const caloriesPerMeal = Math.round(dailyCalories / meals);

  return { fastingHours, eatingHours, caloriesPerMeal };
}
