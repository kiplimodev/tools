export interface MacroSplit {
  proteinPercent: number;
  fatPercent: number;
  carbPercent: number;
}

export interface CalculatorInput {
  startTime: string; // "HH:MM" in 24h format
  fastingHours: number;
  eatingHours?: number;
  dailyCalories: number;
  meals?: number;
  macroSplit?: MacroSplit;
}

export interface WindowDetails {
  start: string;
  end: string;
  durationHours: number;
}

export interface CalculatorOutput {
  fastingWindow: WindowDetails;
  eatingWindow: WindowDetails;
  meals: number;
  caloriesPerMeal: number;
  proteinGrams?: number;
  fatGrams?: number;
  carbGrams?: number;
  proteinPerMeal?: number;
  fatPerMeal?: number;
  carbPerMeal?: number;
}
