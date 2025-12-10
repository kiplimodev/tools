export interface CalculatorInput {
  age: number;
  goal: "health" | "weight-loss" | "fitness";
  weightKg?: number;
  currentSteps?: number;
}

export interface CalculatorOutput {
  recommendedSteps: number;
  category: string;
  estimatedCalories?: number;
  deltaFromCurrent?: number;
}
