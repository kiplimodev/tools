export interface CalculatorInput {
  weightKg: number;
  bodyFatPercent?: number;
  tdee: number;
  surplusCalories?: number;
  proteinPerKg?: number;
  fatPercent?: number;
}

export interface CalculatorOutput {
  dailyCalories: number;
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
  weeklyCaloricSurplus: number;
  projectedWeeklyWeightGainKg: number;
  rateClassification: string;
  leanMassGainEstimate?: number;
  fatMassGainEstimate?: number;
}
