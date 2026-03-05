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

// All values based on standard preparation on 9-grain wheat bread with lettuce, tomato,
// onion, green pepper, and cucumber. No cheese or sauce unless noted.
const MENU: MenuItem[] = [
  // Classic subs (6")
  { name: "Italian BMT", size: '6"', calories: 410, proteinG: 22, carbsG: 44, fatG: 16 },
  { name: "Cold Cut Combo", size: '6"', calories: 360, proteinG: 18, carbsG: 46, fatG: 12 },
  { name: "Turkey Breast", size: '6"', calories: 280, proteinG: 18, carbsG: 46, fatG: 3.5 },
  { name: "Oven Roasted Chicken", size: '6"', calories: 320, proteinG: 24, carbsG: 47, fatG: 5 },
  { name: "Rotisserie-Style Chicken", size: '6"', calories: 350, proteinG: 26, carbsG: 46, fatG: 7 },
  { name: "Roast Beef", size: '6"', calories: 320, proteinG: 24, carbsG: 45, fatG: 6 },
  { name: "Tuna (with mayo)", size: '6"', calories: 480, proteinG: 20, carbsG: 44, fatG: 25 },
  { name: "Meatball Marinara", size: '6"', calories: 480, proteinG: 21, carbsG: 64, fatG: 15 },
  { name: "Spicy Italian", size: '6"', calories: 460, proteinG: 18, carbsG: 44, fatG: 24 },
  { name: "Veggie Delite", size: '6"', calories: 230, proteinG: 9, carbsG: 44, fatG: 2 },
  { name: "Black Forest Ham", size: '6"', calories: 290, proteinG: 18, carbsG: 46, fatG: 5 },
  { name: "BLT", size: '6"', calories: 320, proteinG: 14, carbsG: 44, fatG: 10 },
  { name: "Steak & Cheese", size: '6"', calories: 380, proteinG: 26, carbsG: 48, fatG: 10 },
  { name: "Sweet Onion Chicken Teriyaki", size: '6"', calories: 370, proteinG: 24, carbsG: 57, fatG: 5 },
  // Footlongs (double the 6")
  { name: "Italian BMT", size: '12" Footlong', calories: 820, proteinG: 44, carbsG: 88, fatG: 32 },
  { name: "Turkey Breast", size: '12" Footlong', calories: 560, proteinG: 36, carbsG: 92, fatG: 7 },
  { name: "Oven Roasted Chicken", size: '12" Footlong', calories: 640, proteinG: 48, carbsG: 94, fatG: 10 },
  { name: "Veggie Delite", size: '12" Footlong', calories: 460, proteinG: 18, carbsG: 88, fatG: 4 },
  // Wraps
  { name: "Turkey Breast Wrap", size: "Wrap", calories: 340, proteinG: 18, carbsG: 51, fatG: 7 },
  { name: "Rotisserie Chicken Wrap", size: "Wrap", calories: 400, proteinG: 28, carbsG: 51, fatG: 10 },
  // Salads
  { name: "Turkey Breast Chopped Salad", size: "Salad", calories: 130, proteinG: 14, carbsG: 15, fatG: 2 },
  { name: "Oven Roasted Chicken Chopped Salad", size: "Salad", calories: 160, proteinG: 22, carbsG: 14, fatG: 3 },
  { name: "Veggie Delite Chopped Salad", size: "Salad", calories: 60, proteinG: 5, carbsG: 14, fatG: 1 },
];

export default function SubwayClientPage() {
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const [qty, setQty] = useState(1);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Subway Macro Calculator</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Find the calories, protein, carbs, and fat in your custom Subway order.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Select item
          </label>
          <select
            className="w-full rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            value={selected ? `${selected.name}|${selected.size}` : ""}
            onChange={(e) => {
              if (!e.target.value) { setSelected(null); return; }
              const [name, size] = e.target.value.split("|");
              const item = MENU.find((m) => m.name === name && m.size === size) ?? null;
              setSelected(item);
              setQty(1);
            }}
          >
            <option value="">— Choose a menu item —</option>
            {MENU.map((item) => (
              <option key={`${item.name}|${item.size}`} value={`${item.name}|${item.size}`}>
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
        Values based on standard preparation on 9-grain wheat bread with standard vegetables, no cheese or sauce. Adding condiments, cheese, or extra toppings will change the macros.
      </p>
    </div>
  );
}
