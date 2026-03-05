"use client";

import { useState } from "react";

type MenuItem = {
  name: string;
  size: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
};

const MENU: MenuItem[] = [
  // Espresso drinks
  { name: "Caffe Latte", size: "Grande (16 oz)", calories: 190, proteinG: 13, carbsG: 19, fatG: 7 },
  { name: "Caffe Latte (Nonfat)", size: "Grande (16 oz)", calories: 130, proteinG: 13, carbsG: 19, fatG: 0 },
  { name: "Caffe Americano", size: "Grande (16 oz)", calories: 15, proteinG: 1, carbsG: 3, fatG: 0 },
  { name: "Cappuccino", size: "Grande (16 oz)", calories: 140, proteinG: 10, carbsG: 14, fatG: 5 },
  { name: "Flat White", size: "Tall (12 oz)", calories: 170, proteinG: 13, carbsG: 17, fatG: 9 },
  { name: "Caffe Mocha", size: "Grande (16 oz)", calories: 370, proteinG: 14, carbsG: 51, fatG: 14 },
  { name: "White Chocolate Mocha", size: "Grande (16 oz)", calories: 430, proteinG: 14, carbsG: 61, fatG: 16 },
  // Cold beverages
  { name: "Cold Brew Coffee", size: "Grande (16 oz)", calories: 5, proteinG: 0, carbsG: 0, fatG: 0 },
  { name: "Nitro Cold Brew", size: "Tall (12 oz)", calories: 5, proteinG: 0, carbsG: 0, fatG: 0 },
  { name: "Iced Coffee", size: "Grande (16 oz)", calories: 80, proteinG: 1, carbsG: 20, fatG: 0 },
  { name: "Iced Caffe Latte", size: "Grande (16 oz)", calories: 130, proteinG: 9, carbsG: 13, fatG: 5 },
  { name: "Iced Caffe Mocha", size: "Grande (16 oz)", calories: 290, proteinG: 11, carbsG: 39, fatG: 11 },
  { name: "Iced Matcha Latte", size: "Grande (16 oz)", calories: 200, proteinG: 9, carbsG: 28, fatG: 5 },
  // Frappuccinos
  { name: "Caramel Frappuccino", size: "Grande (16 oz)", calories: 380, proteinG: 5, carbsG: 66, fatG: 14 },
  { name: "Mocha Frappuccino", size: "Grande (16 oz)", calories: 370, proteinG: 5, carbsG: 61, fatG: 15 },
  { name: "Vanilla Bean Frappuccino", size: "Grande (16 oz)", calories: 380, proteinG: 5, carbsG: 63, fatG: 15 },
  // Refreshers
  { name: "Strawberry Açaí Refresher", size: "Grande (16 oz)", calories: 90, proteinG: 0, carbsG: 22, fatG: 0 },
  { name: "Mango Dragonfruit Refresher", size: "Grande (16 oz)", calories: 90, proteinG: 0, carbsG: 22, fatG: 0 },
  // Tea
  { name: "Chai Tea Latte", size: "Grande (16 oz)", calories: 240, proteinG: 8, carbsG: 45, fatG: 4 },
  { name: "Matcha Tea Latte", size: "Grande (16 oz)", calories: 200, proteinG: 9, carbsG: 28, fatG: 5 },
  // Food
  { name: "Butter Croissant", size: "1 piece", calories: 260, proteinG: 5, carbsG: 31, fatG: 13 },
  { name: "Blueberry Muffin", size: "1 piece", calories: 380, proteinG: 6, carbsG: 60, fatG: 13 },
  { name: "Cheese Danish", size: "1 piece", calories: 290, proteinG: 7, carbsG: 34, fatG: 14 },
  { name: "Egg & Cheese Sandwich", size: "1 piece", calories: 290, proteinG: 14, carbsG: 32, fatG: 12 },
  { name: "Turkey Bacon Sandwich", size: "1 piece", calories: 230, proteinG: 13, carbsG: 30, fatG: 6 },
  { name: "Spinach Feta Wrap", size: "1 piece", calories: 290, proteinG: 19, carbsG: 33, fatG: 10 },
  { name: "Protein Box (Eggs & Cheddar)", size: "1 box", calories: 470, proteinG: 25, carbsG: 38, fatG: 23 },
];

export default function StarbucksClientPage() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Starbucks Macro Calculator</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Select item
          </label>
          <select
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={selected?.name ?? ""}
            onChange={(e) => {
              const item = MENU.find((m) => m.name === e.target.value) ?? null;
              setSelected(item);
              setQty(1);
            }}
          >
            <option value="">— Choose a menu item —</option>
            {MENU.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name} ({item.size})
              </option>
            ))}
          </select>
        </div>

        {selected && (
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-24 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}

        {selected && (
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-2 text-sm">
            <p className="font-semibold text-zinc-800 dark:text-zinc-200">
              {selected.name} — {selected.size}
              {qty > 1 && <span className="font-normal text-zinc-500"> × {qty}</span>}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Calories</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{selected.calories * qty} kcal</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Protein</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{selected.proteinG * qty} g</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Carbohydrates</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{selected.carbsG * qty} g</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Fat</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{selected.fatG * qty} g</strong>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 text-xs text-zinc-400 dark:text-zinc-500">
        Nutritional values are approximate and based on standard recipes. Customizations (milk type, syrups, toppings) will change the macros.
      </p>
    </div>
  );
}
