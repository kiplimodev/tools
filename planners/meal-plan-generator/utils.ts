import { CalculatorInput, CalculatorOutput, DietType, FoodPortion, MealPlanEntry, MacroSplit } from "./types";

type FoodProfile = { calories: number; protein: number; fat: number; carbs: number };

const DEFAULT_MACROS: MacroSplit = { proteinPercent: 0.3, fatPercent: 0.25, carbPercent: 0.45 };

const FOODS: Record<string, FoodProfile> = {
  chicken_breast: { calories: 165, protein: 31, fat: 4, carbs: 0 },
  salmon: { calories: 208, protein: 20, fat: 13, carbs: 0 },
  eggs: { calories: 143, protein: 13, fat: 10, carbs: 1 },
  rice: { calories: 130, protein: 2, fat: 0, carbs: 28 },
  oats: { calories: 389, protein: 17, fat: 7, carbs: 66 },
  avocado: { calories: 160, protein: 2, fat: 15, carbs: 9 },
  tofu: { calories: 76, protein: 8, fat: 4, carbs: 2 },
  beans: { calories: 347, protein: 21, fat: 1, carbs: 63 },
  steak: { calories: 242, protein: 26, fat: 15, carbs: 0 },
};

const PROTEIN_PRIORITY = ["chicken_breast", "salmon", "tofu", "eggs", "beans", "steak", "oats"];
const CARB_PRIORITY = ["rice", "oats", "beans"];
const FAT_PRIORITY = ["avocado", "salmon", "eggs"];

const MIN_PORTION_FACTOR = 0.2;
const MAX_PORTION_FACTOR = 3;

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function normalizeMacroSplit(split?: MacroSplit): MacroSplit {
  if (!split) return DEFAULT_MACROS;
  const normalizePercent = (v: number) => (v > 1 ? v / 100 : v);
  const protein = normalizePercent(split.proteinPercent);
  const fat = normalizePercent(split.fatPercent);
  const carbs = normalizePercent(split.carbPercent);
  const total = protein + fat + carbs;
  if (total <= 0) return DEFAULT_MACROS;
  return {
    proteinPercent: protein / total,
    fatPercent: fat / total,
    carbPercent: carbs / total,
  };
}

function validateInput(input: CalculatorInput): void {
  if (input.targetCalories <= 0) {
    throw new Error("targetCalories must be greater than 0");
  }
  if (!input.meals || input.meals <= 0) {
    throw new Error("meals must be a positive number");
  }
}

function filterFoodsByDiet(diet?: DietType): string[] {
  let allowed = Object.keys(FOODS);

  if (diet === "vegan") {
    allowed = allowed.filter((food) => !["chicken_breast", "salmon", "eggs", "steak"].includes(food));
  } else if (diet === "vegetarian") {
    allowed = allowed.filter((food) => !["chicken_breast", "salmon", "steak"].includes(food));
  } else if (diet === "carnivore") {
    allowed = allowed.filter((food) => ["chicken_breast", "salmon", "eggs", "steak"].includes(food));
  }

  if (diet === "low_fat") {
    allowed = allowed.filter((food) => FOODS[food].fat <= 10);
  }

  if (diet === "high_protein") {
    allowed = allowed.sort((a, b) => FOODS[b].protein - FOODS[a].protein);
  }

  if (allowed.length === 0) {
    throw new Error("No foods available for the selected diet.");
  }

  return allowed;
}

function pickFoodsForMeal(allowedFoods: string[], diet?: DietType): string[] {
  const picks = new Set<string>();

  const addFromList = (list: string[]) => {
    const item = list.find((food) => allowedFoods.includes(food));
    if (item) picks.add(item);
  };

  addFromList(PROTEIN_PRIORITY);
  addFromList(CARB_PRIORITY);
  addFromList(FAT_PRIORITY);

  if (picks.size < 2) {
    for (const food of allowedFoods) {
      if (picks.size >= 2) break;
      picks.add(food);
    }
  }

  if (diet === "carnivore" && picks.size < 2) {
    for (const option of ["steak", "chicken_breast", "salmon", "eggs"]) {
      if (allowedFoods.includes(option)) picks.add(option);
    }
  }

  return Array.from(picks).slice(0, 4);
}

function scaleFoodPortion(foodKey: string, targetCaloriesPerFood: number): FoodPortion {
  const profile = FOODS[foodKey];
  const portionFactor = clamp(targetCaloriesPerFood / profile.calories, MIN_PORTION_FACTOR, MAX_PORTION_FACTOR);
  return {
    name: foodKey,
    calories: round1(profile.calories * portionFactor),
    protein: round1(profile.protein * portionFactor),
    fat: round1(profile.fat * portionFactor),
    carbs: round1(profile.carbs * portionFactor),
  };
}

function adjustMealToTarget(mealFoods: FoodPortion[], targetCalories: number): FoodPortion[] {
  const totalCalories = mealFoods.reduce((sum, food) => sum + food.calories, 0);
  if (totalCalories === 0) return mealFoods;
  const upperBound = targetCalories * 1.1;
  const lowerBound = targetCalories * 0.9;
  if (totalCalories >= lowerBound && totalCalories <= upperBound) {
    return mealFoods;
  }
  const scaleFactor = clamp(targetCalories / totalCalories, 0.5, 1.5);
  return mealFoods.map((food) => ({
    ...food,
    calories: round1(food.calories * scaleFactor),
    protein: round1(food.protein * scaleFactor),
    fat: round1(food.fat * scaleFactor),
    carbs: round1(food.carbs * scaleFactor),
  }));
}

function buildMeal(
  mealNumber: number,
  mealCalories: number,
  allowedFoods: string[],
  diet?: DietType
): MealPlanEntry {
  const selectedFoods = pickFoodsForMeal(allowedFoods, diet);
  const caloriesPerFood = mealCalories / selectedFoods.length;
  const foodsPortions = selectedFoods.map((food) => scaleFoodPortion(food, caloriesPerFood));
  const adjustedFoods = adjustMealToTarget(foodsPortions, mealCalories);

  const totals = adjustedFoods.reduce(
    (acc, food) => {
      acc.calories += food.calories;
      acc.protein += food.protein;
      acc.fat += food.fat;
      acc.carbs += food.carbs;
      return acc;
    },
    { calories: 0, protein: 0, fat: 0, carbs: 0 }
  );

  return {
    mealNumber,
    calories: round1(totals.calories),
    protein: round1(totals.protein),
    fat: round1(totals.fat),
    carbs: round1(totals.carbs),
    foods: adjustedFoods,
  };
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);
  const mealsCount = input.meals || 3;
  const macroSplit = normalizeMacroSplit(input.macroSplit);

  const proteinCalories = input.targetCalories * macroSplit.proteinPercent;
  const fatCalories = input.targetCalories * macroSplit.fatPercent;
  const carbCalories = input.targetCalories * macroSplit.carbPercent;

  const proteinGrams = proteinCalories / 4;
  const fatGrams = fatCalories / 9;
  const carbGrams = carbCalories / 4;

  const allowedFoods = filterFoodsByDiet(input.diet);
  const mealCalories = input.targetCalories / mealsCount;

  const meals: MealPlanEntry[] = [];
  for (let i = 1; i <= mealsCount; i += 1) {
    meals.push(buildMeal(i, mealCalories, allowedFoods, input.diet));
  }

  return {
    dailyCalories: round1(input.targetCalories),
    proteinGrams: round1(proteinGrams),
    fatGrams: round1(fatGrams),
    carbGrams: round1(carbGrams),
    meals,
  };
}
