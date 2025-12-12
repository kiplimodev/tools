import {
  StarbucksItemMacro,
  StarbucksItemSelection,
  StarbucksMacroCalculatorInput,
  StarbucksMacroCalculatorOutput,
} from "./types";

interface MacroProfile {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  sugar: number;
}

interface MenuItem {
  name: string;
  defaultSize: string;
  sizes: Record<string, MacroProfile>;
}

const STARBUCKS_MENU: Record<string, MenuItem> = {
  brewed_coffee: {
    name: "Brewed Coffee",
    defaultSize: "Grande",
    sizes: {
      Short: { calories: 5, protein: 0, carbs: 0, fat: 0, sugar: 0 },
      Tall: { calories: 5, protein: 0, carbs: 0, fat: 0, sugar: 0 },
      Grande: { calories: 5, protein: 0, carbs: 0, fat: 0, sugar: 0 },
      Venti: { calories: 10, protein: 1, carbs: 2, fat: 0, sugar: 0 },
    },
  },
  caffe_americano: {
    name: "Caffè Americano",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 15, protein: 1, carbs: 3, fat: 0, sugar: 0 },
      Grande: { calories: 15, protein: 1, carbs: 3, fat: 0, sugar: 0 },
      Venti: { calories: 20, protein: 1, carbs: 4, fat: 0, sugar: 0 },
    },
  },
  latte: {
    name: "Caffè Latte",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 150, protein: 10, carbs: 15, fat: 5, sugar: 14 },
      Grande: { calories: 190, protein: 13, carbs: 19, fat: 6, sugar: 18 },
      Venti: { calories: 250, protein: 16, carbs: 25, fat: 8, sugar: 23 },
    },
  },
  cappuccino: {
    name: "Cappuccino",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 90, protein: 6, carbs: 9, fat: 3, sugar: 7 },
      Grande: { calories: 120, protein: 8, carbs: 12, fat: 4, sugar: 10 },
      Venti: { calories: 150, protein: 10, carbs: 15, fat: 5, sugar: 12 },
    },
  },
  caramel_macchiato: {
    name: "Caramel Macchiato",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 190, protein: 9, carbs: 25, fat: 6, sugar: 24 },
      Grande: { calories: 250, protein: 12, carbs: 33, fat: 7, sugar: 32 },
      Venti: { calories: 320, protein: 15, carbs: 42, fat: 9, sugar: 40 },
    },
  },
  flat_white: {
    name: "Flat White",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 170, protein: 9, carbs: 14, fat: 9, sugar: 13 },
      Grande: { calories: 220, protein: 12, carbs: 18, fat: 12, sugar: 17 },
      Venti: { calories: 290, protein: 15, carbs: 24, fat: 15, sugar: 22 },
    },
  },
  espresso: {
    name: "Espresso",
    defaultSize: "Solo",
    sizes: {
      Solo: { calories: 5, protein: 0, carbs: 1, fat: 0, sugar: 0 },
      Doppio: { calories: 10, protein: 1, carbs: 2, fat: 0, sugar: 0 },
      Triple: { calories: 15, protein: 1, carbs: 3, fat: 0, sugar: 0 },
    },
  },
  caffe_mocha: {
    name: "Caffè Mocha",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 290, protein: 10, carbs: 35, fat: 12, sugar: 30 },
      Grande: { calories: 370, protein: 14, carbs: 43, fat: 15, sugar: 35 },
      Venti: { calories: 460, protein: 18, carbs: 54, fat: 18, sugar: 45 },
    },
  },
  white_chocolate_mocha: {
    name: "White Chocolate Mocha",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 330, protein: 11, carbs: 40, fat: 14, sugar: 36 },
      Grande: { calories: 430, protein: 14, carbs: 53, fat: 17, sugar: 49 },
      Venti: { calories: 510, protein: 17, carbs: 63, fat: 20, sugar: 58 },
    },
  },
  chai_tea_latte: {
    name: "Chai Tea Latte",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 190, protein: 6, carbs: 32, fat: 4, sugar: 31 },
      Grande: { calories: 240, protein: 8, carbs: 42, fat: 5, sugar: 40 },
      Venti: { calories: 300, protein: 9, carbs: 53, fat: 6, sugar: 50 },
    },
  },
  matcha_latte: {
    name: "Matcha Latte",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 190, protein: 8, carbs: 29, fat: 5, sugar: 24 },
      Grande: { calories: 240, protein: 12, carbs: 34, fat: 7, sugar: 30 },
      Venti: { calories: 310, protein: 15, carbs: 44, fat: 9, sugar: 39 },
    },
  },
  caramel_frappuccino: {
    name: "Caramel Frappuccino",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 260, protein: 3, carbs: 45, fat: 10, sugar: 41 },
      Grande: { calories: 380, protein: 5, carbs: 64, fat: 15, sugar: 60 },
      Venti: { calories: 470, protein: 6, carbs: 79, fat: 17, sugar: 74 },
    },
  },
  mocha_frappuccino: {
    name: "Mocha Frappuccino",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 250, protein: 3, carbs: 45, fat: 8, sugar: 42 },
      Grande: { calories: 370, protein: 5, carbs: 59, fat: 14, sugar: 56 },
      Venti: { calories: 470, protein: 6, carbs: 74, fat: 17, sugar: 70 },
    },
  },
  cold_brew: {
    name: "Cold Brew",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 5, protein: 0, carbs: 0, fat: 0, sugar: 0 },
      Grande: { calories: 5, protein: 0, carbs: 0, fat: 0, sugar: 0 },
      Venti: { calories: 5, protein: 0, carbs: 1, fat: 0, sugar: 0 },
      Trenta: { calories: 10, protein: 1, carbs: 2, fat: 0, sugar: 0 },
    },
  },
  hot_chocolate: {
    name: "Hot Chocolate",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 230, protein: 8, carbs: 29, fat: 8, sugar: 28 },
      Grande: { calories: 320, protein: 12, carbs: 43, fat: 11, sugar: 39 },
      Venti: { calories: 400, protein: 16, carbs: 55, fat: 15, sugar: 50 },
    },
  },
  iced_tea: {
    name: "Iced Black Tea",
    defaultSize: "Grande",
    sizes: {
      Tall: { calories: 30, protein: 0, carbs: 8, fat: 0, sugar: 8 },
      Grande: { calories: 45, protein: 0, carbs: 11, fat: 0, sugar: 11 },
      Venti: { calories: 60, protein: 0, carbs: 15, fat: 0, sugar: 15 },
      Trenta: { calories: 75, protein: 0, carbs: 19, fat: 0, sugar: 19 },
    },
  },
  breakfast_sandwich: {
    name: "Breakfast Sandwich",
    defaultSize: "Standard",
    sizes: {
      Standard: { calories: 350, protein: 17, carbs: 34, fat: 17, sugar: 3 },
    },
  },
  croissant: {
    name: "Butter Croissant",
    defaultSize: "Standard",
    sizes: {
      Standard: { calories: 260, protein: 5, carbs: 31, fat: 12, sugar: 6 },
    },
  },
  cake_pop: {
    name: "Cake Pop",
    defaultSize: "Standard",
    sizes: {
      Standard: { calories: 160, protein: 2, carbs: 23, fat: 7, sugar: 18 },
    },
  },
  banana_bread: {
    name: "Banana Nut Bread",
    defaultSize: "Slice",
    sizes: {
      Slice: { calories: 420, protein: 6, carbs: 60, fat: 18, sugar: 30 },
    },
  },
  protein_box: {
    name: "Protein Box",
    defaultSize: "Standard",
    sizes: {
      Standard: { calories: 520, protein: 23, carbs: 52, fat: 24, sugar: 20 },
    },
  },
};

const DEFAULT_QUANTITY = 1;

function round1(value: number): number {
  return Math.round(value * 10) / 10;
}

function getItem(itemId: string): MenuItem {
  const item = STARBUCKS_MENU[itemId];
  if (!item) {
    throw new Error(`Unknown Starbucks item '${itemId}'.`);
  }
  return item;
}

function getSizeMacro(item: MenuItem, size?: string): { size: string; macro: MacroProfile } {
  const resolvedSize = size ?? item.defaultSize;
  const macro = item.sizes[resolvedSize];
  if (!macro) {
    throw new Error(`Size '${resolvedSize}' is not available for '${item.name}'.`);
  }
  return { size: resolvedSize, macro };
}

function multiplyMacros(macro: MacroProfile, quantity: number): MacroProfile {
  return {
    calories: macro.calories * quantity,
    protein: macro.protein * quantity,
    carbs: macro.carbs * quantity,
    fat: macro.fat * quantity,
    sugar: macro.sugar * quantity,
  };
}

function computeTotals(items: StarbucksItemMacro[]): StarbucksMacroCalculatorOutput["totals"] {
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

function validateInput(input: StarbucksMacroCalculatorInput): void {
  if (!input.items || input.items.length === 0) {
    throw new Error("At least one item must be provided.");
  }
  input.items.forEach((item) => {
    if (!item.itemId) {
      throw new Error("Each selection must include an itemId.");
    }
    if (item.quantity !== undefined && item.quantity <= 0) {
      throw new Error("Quantity must be greater than zero.");
    }
  });
}

export function calculateCore(
  input: StarbucksMacroCalculatorInput
): StarbucksMacroCalculatorOutput {
  validateInput(input);

  const items: StarbucksItemMacro[] = input.items.map((selection) => {
    const menuItem = getItem(selection.itemId);
    const quantity = selection.quantity ?? DEFAULT_QUANTITY;
    const { size, macro } = getSizeMacro(menuItem, selection.size);
    const scaled = multiplyMacros(macro, quantity);

    return {
      itemId: selection.itemId,
      name: menuItem.name,
      size,
      quantity,
      calories: round1(scaled.calories),
      protein: round1(scaled.protein),
      carbs: round1(scaled.carbs),
      fat: round1(scaled.fat),
      sugar: round1(scaled.sugar),
    };
  });

  const totals = computeTotals(items);

  return { items, totals };
}
