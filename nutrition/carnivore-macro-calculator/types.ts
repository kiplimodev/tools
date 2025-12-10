export interface FoodItemInput {
  id: string;
  grams: number;
  quantity?: number;
}

export interface ItemMacroResult {
  id: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  grams: number;
  quantity: number;
}

export interface CalculatorInput {
  items: FoodItemInput[];
}

export interface CalculatorOutput {
  totalCalories: number;
  totalProtein: number;
  totalFat: number;
  totalCarbs: number;
  items: ItemMacroResult[];
}
