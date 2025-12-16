export type FastingProtocol = "16:8" | "18:6" | "20:4" | "omad";

export interface IntermittentFastingInput {
  protocol: FastingProtocol;
  dailyCalories: number;
  meals: number;
}

export function calculateIntermittentFasting(
  input: IntermittentFastingInput
): string {
  const fastingHours =
    input.protocol === "omad"
      ? 23
      : Number(input.protocol.split(":")[0]);

  const eatingHours = 24 - fastingHours;
  const caloriesPerMeal = Math.round(
    input.dailyCalories / input.meals
  );

  return `${fastingHours}h fast • ${eatingHours}h eating • ${caloriesPerMeal} kcal / meal`;
}
