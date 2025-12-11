export interface StarbucksItemSelection {
  itemId: string;
  size?: string;
  quantity?: number;
}

export interface StarbucksMacroCalculatorInput {
  items: StarbucksItemSelection[];
}

export interface StarbucksItemMacro {
  itemId: string;
  name: string;
  size: string;
  quantity: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
}

export interface StarbucksMacroCalculatorOutput {
  items: StarbucksItemMacro[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sugar: number;
  };
}
