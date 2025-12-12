export interface IntermittentFastingCalculatorInput {
  protocol: "16:8" | "18:6" | "20:4" | "23:1" | "custom";
  fastingHours?: number;
  eatingHours?: number;
  dailyCalories?: number;
  meals?: number;
  startTime?: string;
}

export interface IntermittentFastingCalculatorOutput {
  fastingHours: number;
  eatingHours: number;
  eatingWindowStart?: string;
  eatingWindowEnd?: string;
  mealTimes?: string[];
  caloriesPerMeal?: number;
  weeklyFastingHours: number;
}
