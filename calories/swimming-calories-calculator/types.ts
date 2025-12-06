export interface CalculatorInput {
  weightKg: number;
  durationMinutes: number;
  stroke: "freestyle" | "breaststroke" | "butterfly" | "backstroke";
  intensity: "light" | "moderate" | "vigorous";
}

export interface CalculatorOutput {
  caloriesBurned: number;
  metValue: number;
}
