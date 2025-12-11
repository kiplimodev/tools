import {
  CalculatorInput,
  CalculatorOutput,
  CalculatedItem,
  DrinkSize,
  MilkOption,
  OrderItemInput,
} from "./types";

interface MacroProfile {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

interface DrinkProfile {
  base: MacroProfile;
  sizeMultiplier: Record<DrinkSize, number>;
  supportsMilk?: boolean;
}

const DRINKS: Record<string, DrinkProfile> = {
  latte: {
    base: { calories: 190, protein: 12, carbs: 18, fat: 7 },
    sizeMultiplier: { tall: 0.83, grande: 1, venti: 1.33, trenta: 1.6 },
    supportsMilk: true,
  },
  americano: {
    base: { calories: 15, protein: 0, carbs: 3, fat: 0 },
    sizeMultiplier: { tall: 0.66, grande: 1, venti: 1.33, trenta: 1.6 },
    supportsMilk: false,
  },
  mocha: {
    base: { calories: 370, protein: 14, carbs: 43, fat: 15 },
    sizeMultiplier: { tall: 0.78, grande: 1, venti: 1.35, trenta: 1.65 },
    supportsMilk: true,
  },
  cappuccino: {
    base: { calories: 120, protein: 8, carbs: 12, fat: 4 },
    sizeMultiplier: { tall: 0.83, grande: 1, venti: 1.33, trenta: 1.6 },
    supportsMilk: true,
  },
  cold_brew: {
    base: { calories: 5, protein: 0, carbs: 0, fat: 0 },
    sizeMultiplier: { tall: 0.75, grande: 1, venti: 1.5, trenta: 1.8 },
    supportsMilk: true,
  },
  frappuccino: {
    base: { calories: 370, protein: 6, carbs: 67, fat: 12 },
    sizeMultiplier: { tall: 0.8, grande: 1, venti: 1.4, trenta: 1.7 },
    supportsMilk: true,
  },
};

const MILK_MODIFIERS: Record<MilkOption, MacroProfile> = {
  whole: { calories: 20, protein: 1, carbs: 0, fat: 2 },
  two_percent: { calories: 10, protein: 1, carbs: 0, fat: 1 },
  nonfat: { calories: -15, protein: 0, carbs: 0, fat: 0 },
  almond: { calories: -30, protein: -1, carbs: 0, fat: -2 },
  oat: { calories: 40, protein: 1, carbs: 0, fat: 1 },
  soy: { calories: 25, protein: 1, carbs: 0, fat: 1 },
};

const SYRUP_PER_PUMP: MacroProfile = { calories: 20, protein: 0, carbs: 5, fat: 0 };

const DEFAULT_QUANTITY = 1;

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function validateInputs(input: CalculatorInput): void {
  if (!input.items || input.items.length === 0) {
    throw new Error("At least one item must be provided.");
  }
  input.items.forEach((item) => {
    if (!DRINKS[item.id]) {
      throw new Error(`Unknown drink id '${item.id}'.`);
    }
    if (!item.size) {
      throw new Error("Each item must include a size.");
    }
    if (item.quantity !== undefined && item.quantity <= 0) {
      throw new Error("Quantity must be greater than zero when provided.");
    }
    if (item.customPumps !== undefined && item.customPumps < 0) {
      throw new Error("customPumps cannot be negative.");
    }
  });
}

function applySize(base: MacroProfile, size: DrinkSize, multipliers: Record<DrinkSize, number>): MacroProfile {
  const multiplier = multipliers[size] ?? 1;
  return {
    calories: base.calories * multiplier,
    protein: base.protein * multiplier,
    carbs: base.carbs * multiplier,
    fat: base.fat * multiplier,
  };
}

function applyMilk(profile: MacroProfile, milk: MilkOption | undefined, supportsMilk?: boolean): MacroProfile {
  if (!milk || supportsMilk === false) {
    return profile;
  }
  const modifier = MILK_MODIFIERS[milk];
  return {
    calories: profile.calories + modifier.calories,
    protein: profile.protein + modifier.protein,
    carbs: profile.carbs + modifier.carbs,
    fat: profile.fat + modifier.fat,
  };
}

function applySyrup(profile: MacroProfile, pumps: number | undefined): MacroProfile {
  const pumpCount = pumps ?? 0;
  return {
    calories: profile.calories + SYRUP_PER_PUMP.calories * pumpCount,
    protein: profile.protein,
    carbs: profile.carbs + SYRUP_PER_PUMP.carbs * pumpCount,
    fat: profile.fat,
  };
}

function multiplyByQuantity(profile: MacroProfile, quantity: number): MacroProfile {
  return {
    calories: profile.calories * quantity,
    protein: profile.protein * quantity,
    carbs: profile.carbs * quantity,
    fat: profile.fat * quantity,
  };
}

function buildItem(item: OrderItemInput): CalculatedItem {
  const drink = DRINKS[item.id];
  const quantity = item.quantity ?? DEFAULT_QUANTITY;
  const sized = applySize(drink.base, item.size, drink.sizeMultiplier);
  const withMilk = applyMilk(sized, item.milk, drink.supportsMilk);
  const withSyrup = applySyrup(withMilk, item.customPumps);
  const finalProfile = multiplyByQuantity(withSyrup, quantity);

  return {
    id: item.id,
    size: item.size,
    calories: round1(finalProfile.calories),
    protein: round1(finalProfile.protein),
    carbs: round1(finalProfile.carbs),
    fat: round1(finalProfile.fat),
    quantity,
  };
}

function summarize(items: CalculatedItem[]): Pick<CalculatorOutput, "totalCalories" | "totalProtein" | "totalCarbs" | "totalFat"> {
  return items.reduce(
    (acc, item) => ({
      totalCalories: round1(acc.totalCalories + item.calories),
      totalProtein: round1(acc.totalProtein + item.protein),
      totalCarbs: round1(acc.totalCarbs + item.carbs),
      totalFat: round1(acc.totalFat + item.fat),
    }),
    { totalCalories: 0, totalProtein: 0, totalCarbs: 0, totalFat: 0 }
  );
}

export function calculateCore(input: CalculatorInput): CalculatorOutput {
  validateInputs(input);
  const items = input.items.map(buildItem);
  const totals = summarize(items);

  return {
    ...totals,
    items,
  };
}
