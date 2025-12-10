export interface CalculatorInput {
  items: SubwayItemInput[];
}

export interface SubwayItemInput {
  bread: "none" | "white" | "wheat" | "italian" | "multigrain" | "flatbread";
  protein: "chicken" | "steak" | "turkey" | "ham" | "meatball" | "tuna";
  cheese?: "american" | "cheddar" | "swiss" | "provolone" | "none";
  veggies?: Partial<Record<VegetableKey, boolean>>;
  sauces?: Partial<Record<SauceKey, number>>;
  quantity?: number;
}

export type VegetableKey =
  | "lettuce"
  | "tomato"
  | "onion"
  | "cucumber"
  | "olives"
  | "jalapeno"
  | "pickles";

export type SauceKey = "mayo" | "chipotle" | "mustard" | "sweetOnion";

export interface CalculatorOutput {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  items: CalculatedItem[];
}

export interface CalculatedItem {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  quantity: number;
}
