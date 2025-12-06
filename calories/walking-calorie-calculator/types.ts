export interface CalculatorInput {
  weightKg: number;
  durationMinutes: number;
  pace: "slow" | "moderate" | "brisk" | "very-brisk";
}

export interface CalculatorOutput {
  caloriesBurned: number;
  metValue: number;
}
