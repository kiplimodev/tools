/**
 * Move Goal Calculator input definition.
 */
export interface CalculatorInput {
  weightKg: number;
  tdee: number;
  goal: "health" | "weight-loss" | "fitness";
  weeklyCalorieDeficit?: number;
  weeklyCalorieSurplus?: number;
}

/**
 * Move Goal Calculator output definition.
 */
export interface CalculatorOutput {
  dailyMoveCalories: number;
  recommendedRange: [number, number];
  goalClassification: string;
}
