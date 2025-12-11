export interface CalculatorInput {
  weightKg: number;
  durationMinutes: number;
  intensity: "light" | "moderate" | "vigorous";
}

export interface CalculatorOutput {
  caloriesBurned: number;
  metValue: number;
}
