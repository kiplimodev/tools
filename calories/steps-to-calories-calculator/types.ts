export interface CalculatorInput {
  steps: number;
  weightKg: number;
  strideLengthMeters?: number;
  intensity?: "low" | "moderate" | "high";
}

export interface CalculatorOutput {
  caloriesBurned: number;
  distanceKm: number;
  caloriesPerStep: number;
}
