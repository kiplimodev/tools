export interface MacroSplit {
  proteinPercent: number;
  fatPercent: number;
  carbPercent: number;
}

export type DietType =
  | "omnivore"
  | "vegetarian"
  | "vegan"
  | "carnivore"
  | "high_protein"
  | "low_fat";

export interface CalculatorInput {
  targetCalories: number;
  meals: number;
  diet?: DietType;
  macroSplit?: MacroSplit;
}

export interface FoodPortion {
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

export interface MealPlanEntry {
  mealNumber: number;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  foods: FoodPortion[];
}

export interface CalculatorOutput {
  dailyCalories: number;
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
  meals: MealPlanEntry[];
}
