export interface CalculatorInput {
  weightKg: number;
  durationMinutes: number;
  intensity: "leisure" | "moderate" | "vigorous" | "very-vigorous" | "race";
}

export interface CalculatorOutput {
  caloriesBurned: number;
  metValue: number;
}
