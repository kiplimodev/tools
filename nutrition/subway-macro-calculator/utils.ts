import { CalculatorInput, CalculatorOutput, SubwayItemInput, VegetableKey, SauceKey } from "./types";

type MacroProfile = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

const BREAD: Record<SubwayItemInput["bread"], MacroProfile> = {
  none: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  white: { calories: 200, protein: 7, carbs: 38, fat: 2 },
  wheat: { calories: 210, protein: 8, carbs: 40, fat: 2 },
  italian: { calories: 230, protein: 8, carbs: 44, fat: 2 },
  multigrain: { calories: 240, protein: 9, carbs: 43, fat: 3 },
  flatbread: { calories: 220, protein: 7, carbs: 37, fat: 4 },
};

const PROTEIN: Record<SubwayItemInput["protein"], MacroProfile> = {
  chicken: { calories: 110, protein: 20, carbs: 1, fat: 2 },
  steak: { calories: 130, protein: 21, carbs: 2, fat: 3 },
  turkey: { calories: 90, protein: 17, carbs: 2, fat: 1 },
  ham: { calories: 60, protein: 10, carbs: 2, fat: 1 },
  meatball: { calories: 260, protein: 15, carbs: 14, fat: 15 },
  tuna: { calories: 250, protein: 15, carbs: 5, fat: 20 },
};

const CHEESE: Record<NonNullable<SubwayItemInput["cheese"]>, MacroProfile> = {
  none: { calories: 0, protein: 0, carbs: 0, fat: 0 },
  american: { calories: 40, protein: 2, carbs: 1, fat: 3 },
  cheddar: { calories: 60, protein: 4, carbs: 1, fat: 5 },
  swiss: { calories: 50, protein: 4, carbs: 1, fat: 3 },
  provolone: { calories: 50, protein: 4, carbs: 1, fat: 4 },
};

const VEGGIES: Record<VegetableKey, MacroProfile> = {
  lettuce: { calories: 5, protein: 0, carbs: 1, fat: 0 },
  tomato: { calories: 5, protein: 0, carbs: 1, fat: 0 },
  olives: { calories: 25, protein: 0, carbs: 1, fat: 2 },
  onion: { calories: 5, protein: 0, carbs: 1, fat: 0 },
  cucumber: { calories: 3, protein: 0, carbs: 1, fat: 0 },
  jalapeno: { calories: 4, protein: 0, carbs: 1, fat: 0 },
  pickles: { calories: 3, protein: 0, carbs: 1, fat: 0 },
};

const SAUCES: Record<SauceKey, MacroProfile> = {
  mayo: { calories: 100, protein: 0, carbs: 0, fat: 11 },
  chipotle: { calories: 70, protein: 0, carbs: 1, fat: 7 },
  mustard: { calories: 10, protein: 0, carbs: 1, fat: 0 },
  sweetOnion: { calories: 40, protein: 0, carbs: 9, fat: 0 },
};

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInput(input);

  const totals: MacroProfile = { calories: 0, protein: 0, carbs: 0, fat: 0 };
  const items = input.items.map((item) => {
    const itemMacros = calculateItemMacros(item);
    totals.calories += itemMacros.calories;
    totals.protein += itemMacros.protein;
    totals.carbs += itemMacros.carbs;
    totals.fat += itemMacros.fat;
    return {
      calories: round1(itemMacros.calories),
      protein: round1(itemMacros.protein),
      carbs: round1(itemMacros.carbs),
      fat: round1(itemMacros.fat),
      quantity: item.quantity ?? 1,
    };
  });

  return {
    totalCalories: round1(totals.calories),
    totalProtein: round1(totals.protein),
    totalCarbs: round1(totals.carbs),
    totalFat: round1(totals.fat),
    items,
  };
}

function calculateItemMacros(item: SubwayItemInput): MacroProfile {
  const quantity = item.quantity ?? 1;
  const cheese = item.cheese ?? "none";

  const base: MacroProfile = combineMacros([
    BREAD[item.bread],
    PROTEIN[item.protein],
    CHEESE[cheese],
  ]);

  const veggiesMacros = item.veggies
    ? combineMacros(
        (Object.keys(item.veggies) as VegetableKey[])
          .filter((veg) => item.veggies?.[veg])
          .map((veg) => VEGGIES[veg])
      )
    : { calories: 0, protein: 0, carbs: 0, fat: 0 };

  const saucesMacros = item.sauces
    ? combineMacros(
        (Object.keys(item.sauces) as SauceKey[]).map((sauce) =>
          scaleMacros(SAUCES[sauce], item.sauces?.[sauce] ?? 0)
        )
      )
    : { calories: 0, protein: 0, carbs: 0, fat: 0 };

  const combined = combineMacros([base, veggiesMacros, saucesMacros]);
  return scaleMacros(combined, quantity);
}

function combineMacros(profiles: MacroProfile[]): MacroProfile {
  return profiles.reduce(
    (acc, profile) => ({
      calories: acc.calories + (profile?.calories ?? 0),
      protein: acc.protein + (profile?.protein ?? 0),
      carbs: acc.carbs + (profile?.carbs ?? 0),
      fat: acc.fat + (profile?.fat ?? 0),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

function scaleMacros(profile: MacroProfile, multiplier: number): MacroProfile {
  return {
    calories: profile.calories * multiplier,
    protein: profile.protein * multiplier,
    carbs: profile.carbs * multiplier,
    fat: profile.fat * multiplier,
  };
}

function validateInput(input: CalculatorInput): void {
  if (!input.items || input.items.length === 0) {
    throw new Error("At least one sandwich item must be provided.");
  }

  input.items.forEach((item, index) => {
    const prefix = `Item ${index + 1}:`;
    if (!BREAD[item.bread]) {
      throw new Error(`${prefix} Invalid bread option.`);
    }
    if (!PROTEIN[item.protein]) {
      throw new Error(`${prefix} Invalid protein option.`);
    }
    if (item.cheese && !CHEESE[item.cheese]) {
      throw new Error(`${prefix} Invalid cheese option.`);
    }
    if (item.quantity !== undefined && item.quantity <= 0) {
      throw new Error(`${prefix} Quantity must be greater than 0.`);
    }
    if (item.sauces) {
      (Object.keys(item.sauces) as SauceKey[]).forEach((key) => {
        const servings = item.sauces?.[key];
        if (servings !== undefined && servings < 0) {
          throw new Error(`${prefix} Sauce servings must be non-negative.`);
        }
      });
    }
  });
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
