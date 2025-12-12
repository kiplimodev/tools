export interface SubwayItemSelection {
  itemId: string;
  size?: "6-inch" | "footlong";
  bread?: string;
  cheese?: string;
  sauces?: string[];
  addOns?: string[];
  quantity?: number;
}

export interface SubwayMacroCalculatorInput {
  items: SubwayItemSelection[];
}

export interface SubwayItemMacro {
  itemId: string;
  name: string;
  size: string;
  bread: string;
  cheese: string;
  sauces: string[];
  addOns: string[];
  quantity: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
}

export interface SubwayMacroCalculatorOutput {
  items: SubwayItemMacro[];
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    sugar: number;
  };
}
