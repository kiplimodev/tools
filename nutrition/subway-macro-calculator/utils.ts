import {
  SubwayItemMacro,
  SubwayItemSelection,
  SubwayMacroCalculatorInput,
  SubwayMacroCalculatorOutput,
} from "./types";

type MacroProfile = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
};

type SizeKey = "6-inch" | "footlong";

type SizedMacros = Record<SizeKey, MacroProfile>;

type BaseItem = {
  name: string;
  sizes: SizedMacros;
  defaultSize?: SizeKey;
};

const SUBWAY_BASE: Record<string, BaseItem> = {
  turkey: {
    name: "Turkey Breast",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 120, protein: 18, carbs: 4, fat: 2, sugar: 1 },
      footlong: { calories: 240, protein: 36, carbs: 8, fat: 4, sugar: 2 },
    },
  },
  tuna: {
    name: "Tuna",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 220, protein: 16, carbs: 6, fat: 16, sugar: 1 },
      footlong: { calories: 440, protein: 32, carbs: 12, fat: 32, sugar: 2 },
    },
  },
  "meatball-marinara": {
    name: "Meatball Marinara",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 230, protein: 15, carbs: 14, fat: 12, sugar: 4 },
      footlong: { calories: 460, protein: 30, carbs: 28, fat: 24, sugar: 8 },
    },
  },
  "chicken-teriyaki": {
    name: "Sweet Onion Chicken Teriyaki",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 200, protein: 22, carbs: 18, fat: 3, sugar: 8 },
      footlong: { calories: 400, protein: 44, carbs: 36, fat: 6, sugar: 16 },
    },
  },
  "steak-cheese": {
    name: "Steak & Cheese",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 210, protein: 20, carbs: 10, fat: 9, sugar: 2 },
      footlong: { calories: 420, protein: 40, carbs: 20, fat: 18, sugar: 4 },
    },
  },
  "veggie-delite": {
    name: "Veggie Delite",
    defaultSize: "6-inch",
    sizes: {
      "6-inch": { calories: 80, protein: 5, carbs: 12, fat: 1, sugar: 3 },
      footlong: { calories: 160, protein: 10, carbs: 24, fat: 2, sugar: 6 },
    },
  },
};

const BREAD: Record<string, SizedMacros> = {
  Italian: {
    "6-inch": { calories: 180, protein: 7, carbs: 35, fat: 2, sugar: 3 },
    footlong: { calories: 360, protein: 14, carbs: 70, fat: 4, sugar: 6 },
  },
  Wheat: {
    "6-inch": { calories: 190, protein: 8, carbs: 36, fat: 2, sugar: 4 },
    footlong: { calories: 380, protein: 16, carbs: 72, fat: 4, sugar: 8 },
  },
  Multigrain: {
    "6-inch": { calories: 200, protein: 8, carbs: 38, fat: 3, sugar: 4 },
    footlong: { calories: 400, protein: 16, carbs: 76, fat: 6, sugar: 8 },
  },
  Flatbread: {
    "6-inch": { calories: 220, protein: 8, carbs: 39, fat: 4, sugar: 3 },
    footlong: { calories: 440, protein: 16, carbs: 78, fat: 8, sugar: 6 },
  },
  "Wrap (no bread)": {
    "6-inch": { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 },
    footlong: { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 },
  },
};

const CHEESE: Record<string, MacroProfile> = {
  American: { calories: 40, protein: 2, carbs: 1, fat: 3, sugar: 0 },
  Cheddar: { calories: 60, protein: 4, carbs: 1, fat: 5, sugar: 0 },
  Swiss: { calories: 50, protein: 4, carbs: 1, fat: 3, sugar: 0 },
  Provolone: { calories: 50, protein: 4, carbs: 1, fat: 4, sugar: 0 },
  None: { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 },
};

const SAUCES: Record<string, MacroProfile> = {
  Mayo: { calories: 100, protein: 0, carbs: 0, fat: 11, sugar: 0 },
  "Chipotle Southwest": { calories: 70, protein: 0, carbs: 1, fat: 7, sugar: 1 },
  "Sweet Onion": { calories: 40, protein: 0, carbs: 9, fat: 0, sugar: 8 },
  "Honey Mustard": { calories: 30, protein: 0, carbs: 7, fat: 0, sugar: 6 },
  Oil: { calories: 45, protein: 0, carbs: 0, fat: 5, sugar: 0 },
  Vinegar: { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 },
};

const ADD_ONS: Record<string, MacroProfile> = {
  Bacon: { calories: 90, protein: 6, carbs: 0, fat: 7, sugar: 0 },
  Pepperoni: { calories: 80, protein: 4, carbs: 1, fat: 7, sugar: 0 },
  Avocado: { calories: 70, protein: 1, carbs: 3, fat: 6, sugar: 0 },
  "Extra Meat": { calories: 110, protein: 20, carbs: 2, fat: 3, sugar: 1 },
};

export function calculateCore(
  input: SubwayMacroCalculatorInput
): SubwayMacroCalculatorOutput {
  validateInput(input);

  const items: SubwayItemMacro[] = input.items.map((selection) =>
    calculateItemMacro(selection)
  );

  const totals = calculateTotals(items);

  return { items, totals };
}

function calculateItemMacro(selection: SubwayItemSelection): SubwayItemMacro {
  const base = getBaseItem(selection.itemId);
  const size: SizeKey = selection.size ?? base.defaultSize ?? "6-inch";
  const baseMacros = getSizeMacro(base, size);

  const breadName = selection.bread ?? "Italian";
  const breadMacro = getBreadMacro(breadName, size);

  const cheeseName = selection.cheese ?? "None";
  const cheeseMacro = getCheeseMacro(cheeseName);

  const sauceList = selection.sauces ?? [];
  const saucesMacro = combineMacros(sauceList.map((sauce) => getSauceMacro(sauce)));

  const addOnList = selection.addOns ?? [];
  const addOnsMacro = combineMacros(addOnList.map((addOn) => getAddOnMacro(addOn)));

  const combined = combineMacros([baseMacros, breadMacro, cheeseMacro, saucesMacro, addOnsMacro]);
  const quantity = selection.quantity ?? 1;
  const scaled = multiplyMacros(combined, quantity);

  return {
    itemId: selection.itemId,
    name: base.name,
    size,
    bread: breadName,
    cheese: cheeseName,
    sauces: sauceList,
    addOns: addOnList,
    quantity,
    calories: round1(scaled.calories),
    protein: round1(scaled.protein),
    carbs: round1(scaled.carbs),
    fat: round1(scaled.fat),
    sugar: round1(scaled.sugar),
  };
}

function calculateTotals(items: SubwayItemMacro[]): SubwayMacroCalculatorOutput["totals"] {
  return items.reduce(
    (acc, item) => ({
      calories: round1(acc.calories + item.calories),
      protein: round1(acc.protein + item.protein),
      carbs: round1(acc.carbs + item.carbs),
      fat: round1(acc.fat + item.fat),
      sugar: round1(acc.sugar + item.sugar),
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 }
  );
}

function getBaseItem(itemId: string): BaseItem {
  const item = SUBWAY_BASE[itemId];
  if (!item) {
    throw new Error(`Unknown Subway item: ${itemId}`);
  }
  return item;
}

function getSizeMacro(item: BaseItem, size: SizeKey): MacroProfile {
  const profile = item.sizes[size];
  if (!profile) {
    throw new Error(`Size '${size}' not available for item '${item.name}'.`);
  }
  return profile;
}

function getBreadMacro(bread: string, size: SizeKey): MacroProfile {
  const profile = BREAD[bread];
  if (!profile) {
    throw new Error(`Unknown bread type: ${bread}`);
  }
  const sized = profile[size];
  if (!sized) {
    throw new Error(`Size '${size}' not available for bread '${bread}'.`);
  }
  return sized;
}

function getCheeseMacro(cheese: string): MacroProfile {
  const profile = CHEESE[cheese];
  if (!profile) {
    throw new Error(`Unknown cheese option: ${cheese}`);
  }
  return profile;
}

function getSauceMacro(sauce: string): MacroProfile {
  const profile = SAUCES[sauce];
  if (!profile) {
    throw new Error(`Unknown sauce option: ${sauce}`);
  }
  return profile;
}

function getAddOnMacro(addOn: string): MacroProfile {
  const profile = ADD_ONS[addOn];
  if (!profile) {
    throw new Error(`Unknown add-on: ${addOn}`);
  }
  return profile;
}

function addMacros(a: MacroProfile, b: MacroProfile): MacroProfile {
  return {
    calories: a.calories + b.calories,
    protein: a.protein + b.protein,
    carbs: a.carbs + b.carbs,
    fat: a.fat + b.fat,
    sugar: a.sugar + b.sugar,
  };
}

function combineMacros(profiles: MacroProfile[]): MacroProfile {
  return profiles.reduce(
    (acc, profile) => addMacros(acc, profile),
    { calories: 0, protein: 0, carbs: 0, fat: 0, sugar: 0 }
  );
}

function multiplyMacros(profile: MacroProfile, quantity: number): MacroProfile {
  return {
    calories: profile.calories * quantity,
    protein: profile.protein * quantity,
    carbs: profile.carbs * quantity,
    fat: profile.fat * quantity,
    sugar: profile.sugar * quantity,
  };
}

function validateInput(input: SubwayMacroCalculatorInput): void {
  if (!input.items || input.items.length === 0) {
    throw new Error("At least one item must be provided.");
  }

  input.items.forEach((item, index) => {
    const base = SUBWAY_BASE[item.itemId];
    if (!base) {
      throw new Error(`Item ${index + 1}: unknown base item '${item.itemId}'.`);
    }

    const size: SizeKey = item.size ?? base.defaultSize ?? "6-inch";
    if (!base.sizes[size]) {
      throw new Error(`Item ${index + 1}: size '${size}' not available for '${base.name}'.`);
    }

    const bread = item.bread ?? "Italian";
    if (!BREAD[bread]) {
      throw new Error(`Item ${index + 1}: bread option '${bread}' not supported.`);
    }

    const cheese = item.cheese ?? "None";
    if (!CHEESE[cheese]) {
      throw new Error(`Item ${index + 1}: cheese option '${cheese}' not supported.`);
    }

    (item.sauces ?? []).forEach((sauce) => {
      if (!SAUCES[sauce]) {
        throw new Error(`Item ${index + 1}: sauce option '${sauce}' not supported.`);
      }
    });

    (item.addOns ?? []).forEach((addOn) => {
      if (!ADD_ONS[addOn]) {
        throw new Error(`Item ${index + 1}: add-on option '${addOn}' not supported.`);
      }
    });

    if (item.quantity !== undefined && item.quantity <= 0) {
      throw new Error(`Item ${index + 1}: quantity must be greater than 0.`);
    }
  });
}

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}
