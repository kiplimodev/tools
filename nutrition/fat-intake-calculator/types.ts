export interface CalculatorInput {
  weightKg: number;
  caloriesPerDay: number;
  goal?: "cut" | "maintain" | "bulk";
}

export interface Range {
  min: number;
  max: number;
}

export interface CalculatorOutput {
  minimumFatGrams: number;
  recommendedRange: Range;
  percentageRange: Range;
  healthMinimum: number;
  goalAdjustedRange?: Range;
}
