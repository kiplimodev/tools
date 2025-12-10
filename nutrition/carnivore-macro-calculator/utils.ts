import { CalculatorInput, CalculatorOutput, FoodItemInput, ItemMacroResult } from "./types";

interface FoodMacroProfile {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
}

const FOODS: Record<string, FoodMacroProfile> = {
  ribeye: { calories: 291, protein: 24, fat: 21, carbs: 0 },
  ground_beef_80: { calories: 254, protein: 17, fat: 20, carbs: 0 },
  ground_beef_90: { calories: 176, protein: 22, fat: 8, carbs: 0 },
  chicken_thigh: { calories: 209, protein: 26, fat: 10, carbs: 0 },
  chicken_breast: { calories: 165, protein: 31, fat: 4, carbs: 0 },
  salmon: { calories: 208, protein: 20, fat: 13, carbs: 0 },
  eggs: { calories: 143, protein: 13, fat: 10, carbs: 0 },
  bacon: { calories: 540, protein: 37, fat: 42, carbs: 1 },
  liver_beef: { calories: 135, protein: 20, fat: 4, carbs: 3 },
  pork_chop: { calories: 231, protein: 29, fat: 12, carbs: 0 },
  shrimp: { calories: 99, protein: 24, fat: 0.3, carbs: 0.2 },
};

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);

  const items = input.items.map(calculateItemMacros);

  const totalsRaw = input.items.reduce(
    (acc, item) => {
      const base = FOODS[item.id];
      const quantity = item.quantity ?? 1;
      const ratio = item.grams / 100;
      acc.calories += base.calories * ratio * quantity;
      acc.protein += base.protein * ratio * quantity;
      acc.fat += base.fat * ratio * quantity;
      acc.carbs += base.carbs * ratio * quantity;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return {
    totalCalories: round1(totalsRaw.calories),
    totalProtein: round1(totalsRaw.protein),
    totalFat: round1(totalsRaw.fat),
    totalCarbs: round1(totalsRaw.carbs),
    items,
  };
}

function validateInput(input: CalculatorInput): void {
  if (!input.items || input.items.length === 0) {
    throw new Error("At least one food item is required.");
  }

  input.items.forEach((item) => {
    if (!FOODS[item.id]) {
      throw new Error(`Food '${item.id}' is not supported.`);
    }
    if (item.grams <= 0) {
      throw new Error("Portion size in grams must be greater than zero.");
    }
    if (item.quantity !== undefined && item.quantity <= 0) {
      throw new Error("Quantity must be greater than zero when provided.");
    }
  });
}

function calculateItemMacros(item: FoodItemInput): ItemMacroResult {
  const base = FOODS[item.id];
  const quantity = item.quantity ?? 1;
  const ratio = item.grams / 100;

  const calories = base.calories * ratio * quantity;
  const protein = base.protein * ratio * quantity;
  const fat = base.fat * ratio * quantity;
  const carbs = base.carbs * ratio * quantity;

  return {
    id: item.id,
    grams: item.grams,
    quantity,
    calories: round1(calories),
    protein: round1(protein),
    fat: round1(fat),
    carbs: round1(carbs),
  };
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
