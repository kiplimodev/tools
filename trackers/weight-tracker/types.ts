export interface WeightEntry {
  date: string; // YYYY-MM-DD
  weightKg: number;
}

export interface CalculatorInput {
  entries: WeightEntry[];
  goalWeightKg?: number;
}

export interface CalculatorOutput {
  sortedEntries: WeightEntry[];
  dailyChange?: number;
  weeklyAverage?: number;
  rateKgPerWeek?: number;
  projectedDateToGoal?: string;
  trendDirection: "up" | "down" | "stable";
}
