export interface BulkCalculatorInput {
  tdee: number;
  surplusCalories: number;
  weightKg: number;
  proteinPerKg: number;
  fatPercentage?: number;
}

export interface BulkCalculatorOutput {
  dailyCalories: number;
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
  weeklyGainKg: number;
  monthlyGainKg: number;
  leanMassGainKg: number;
  fatMassGainKg: number;
}
