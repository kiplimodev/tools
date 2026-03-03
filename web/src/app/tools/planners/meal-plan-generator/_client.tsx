"use client";

import { useState } from "react";

type Diet = "balanced" | "high-protein" | "low-carb" | "keto";
type Meals = 3 | 4 | 5 | 6;

type MealItem = { name: string; portion: string; cal: number; prot: number; carb: number; fat: number };
type Meal = { label: string; items: MealItem[] };

const FOOD_TEMPLATES: Record<Diet, { items: MealItem[] }[]> = {
  balanced: [
    { items: [{ name: "Oatmeal with banana", portion: "1 cup dry + 1 medium", cal: 380, prot: 12, carb: 68, fat: 6 }, { name: "2 whole eggs, scrambled", portion: "2 large", cal: 140, prot: 12, carb: 1, fat: 10 }] },
    { items: [{ name: "Greek yogurt", portion: "200g", cal: 130, prot: 17, carb: 10, fat: 0 }, { name: "Mixed berries", portion: "100g", cal: 50, prot: 1, carb: 12, fat: 0 }] },
    { items: [{ name: "Grilled chicken breast", portion: "150g", cal: 248, prot: 46, carb: 0, fat: 5 }, { name: "Brown rice", portion: "1 cup cooked", cal: 215, prot: 5, carb: 45, fat: 2 }, { name: "Mixed salad", portion: "2 cups", cal: 25, prot: 2, carb: 5, fat: 0 }] },
    { items: [{ name: "Apple", portion: "1 medium", cal: 95, prot: 0, carb: 25, fat: 0 }, { name: "Peanut butter", portion: "1 tbsp", cal: 95, prot: 4, carb: 4, fat: 8 }] },
    { items: [{ name: "Salmon fillet", portion: "150g", cal: 280, prot: 39, carb: 0, fat: 13 }, { name: "Sweet potato", portion: "1 medium (200g)", cal: 180, prot: 4, carb: 41, fat: 0 }, { name: "Broccoli", portion: "1 cup", cal: 55, prot: 4, carb: 11, fat: 0 }] },
    { items: [{ name: "Cottage cheese", portion: "200g", cal: 140, prot: 25, carb: 8, fat: 2 }] },
  ],
  "high-protein": [
    { items: [{ name: "Egg white omelette (4 whites + 2 whole)", portion: "Full serving", cal: 250, prot: 30, carb: 4, fat: 12 }, { name: "Whole grain toast", portion: "2 slices", cal: 160, prot: 8, carb: 28, fat: 2 }] },
    { items: [{ name: "Protein shake", portion: "1 scoop in water", cal: 120, prot: 25, carb: 3, fat: 2 }, { name: "Banana", portion: "1 medium", cal: 105, prot: 1, carb: 27, fat: 0 }] },
    { items: [{ name: "Grilled chicken breast", portion: "200g", cal: 330, prot: 62, carb: 0, fat: 7 }, { name: "Quinoa", portion: "1 cup cooked", cal: 220, prot: 8, carb: 39, fat: 4 }, { name: "Steamed vegetables", portion: "2 cups", cal: 80, prot: 4, carb: 16, fat: 0 }] },
    { items: [{ name: "Tuna in water", portion: "1 can (130g)", cal: 120, prot: 28, carb: 0, fat: 1 }, { name: "Rice cakes", portion: "3 cakes", cal: 105, prot: 2, carb: 22, fat: 1 }] },
    { items: [{ name: "Lean beef mince", portion: "150g cooked", cal: 265, prot: 38, carb: 0, fat: 12 }, { name: "Mixed vegetables stir-fry", portion: "2 cups", cal: 100, prot: 4, carb: 18, fat: 2 }, { name: "Brown rice", portion: "¾ cup cooked", cal: 160, prot: 4, carb: 34, fat: 1 }] },
    { items: [{ name: "Greek yogurt with protein powder", portion: "200g + ½ scoop", cal: 200, prot: 35, carb: 11, fat: 1 }] },
  ],
  "low-carb": [
    { items: [{ name: "3 whole eggs, fried in butter", portion: "3 large + 1 tsp", cal: 285, prot: 19, carb: 2, fat: 22 }, { name: "Smoked salmon", portion: "60g", cal: 80, prot: 12, carb: 0, fat: 3 }] },
    { items: [{ name: "Almonds", portion: "30g", cal: 170, prot: 6, carb: 6, fat: 15 }, { name: "String cheese", portion: "1 stick (28g)", cal: 80, prot: 7, carb: 1, fat: 5 }] },
    { items: [{ name: "Grilled chicken thigh (boneless)", portion: "180g", cal: 380, prot: 42, carb: 0, fat: 22 }, { name: "Cauliflower rice", portion: "2 cups", cal: 56, prot: 4, carb: 12, fat: 0 }, { name: "Avocado", portion: "½ medium", cal: 120, prot: 1, carb: 6, fat: 11 }] },
    { items: [{ name: "Celery sticks with almond butter", portion: "4 stalks + 2 tbsp", cal: 210, prot: 7, carb: 8, fat: 18 }] },
    { items: [{ name: "Grass-fed steak", portion: "150g", cal: 295, prot: 40, carb: 0, fat: 14 }, { name: "Asparagus, roasted", portion: "200g", cal: 50, prot: 5, carb: 9, fat: 0 }, { name: "Olive oil dressing", portion: "1 tbsp", cal: 120, prot: 0, carb: 0, fat: 14 }] },
    { items: [{ name: "Casein protein shake", portion: "1 scoop in water", cal: 120, prot: 24, carb: 4, fat: 1 }] },
  ],
  keto: [
    { items: [{ name: "Bacon (3 slices) + 3 eggs", portion: "Full serving", cal: 400, prot: 28, carb: 1, fat: 32 }] },
    { items: [{ name: "Macadamia nuts", portion: "28g", cal: 204, prot: 2, carb: 4, fat: 22 }] },
    { items: [{ name: "Bulletproof chicken salad", portion: "200g chicken + greens + olive oil", cal: 520, prot: 44, carb: 4, fat: 36 }] },
    { items: [{ name: "Cheese cubes + pepperoni", portion: "50g + 30g", cal: 280, prot: 14, carb: 1, fat: 25 }] },
    { items: [{ name: "Ribeye steak", portion: "180g", cal: 490, prot: 43, carb: 0, fat: 34 }, { name: "Sautéed spinach in butter", portion: "150g + 1 tbsp", cal: 135, prot: 4, carb: 4, fat: 12 }] },
    { items: [{ name: "Keto fat bomb (cocoa + coconut oil)", portion: "2 pieces", cal: 200, prot: 2, carb: 2, fat: 22 }] },
  ],
};

const MEAL_LABELS = ["Breakfast", "Morning Snack", "Lunch", "Afternoon Snack", "Dinner", "Evening Snack"];
const DIET_LABELS: Record<Diet, string> = {
  balanced: "Balanced",
  "high-protein": "High Protein",
  "low-carb": "Low Carb",
  keto: "Keto",
};

function buildPlan(diet: Diet, mealCount: Meals): Meal[] {
  const templates = FOOD_TEMPLATES[diet];
  const selectedIndices: number[] = [];

  if (mealCount === 3) {
    selectedIndices.push(0, 2, 4);
  } else if (mealCount === 4) {
    selectedIndices.push(0, 1, 2, 4);
  } else if (mealCount === 5) {
    selectedIndices.push(0, 1, 2, 3, 4);
  } else {
    selectedIndices.push(0, 1, 2, 3, 4, 5);
  }

  return selectedIndices.map((idx) => ({
    label: MEAL_LABELS[idx],
    items: templates[idx]?.items ?? [],
  }));
}

export default function MealPlanGeneratorClientPage() {
  const [diet, setDiet] = useState<Diet>("balanced");
  const [meals, setMeals] = useState<Meals>(4);
  const [generated, setGenerated] = useState(false);

  const plan = buildPlan(diet, meals);

  const totals = plan.flatMap((m) => m.items).reduce(
    (acc, item) => ({
      cal: acc.cal + item.cal,
      prot: acc.prot + item.prot,
      carb: acc.carb + item.carb,
      fat: acc.fat + item.fat,
    }),
    { cal: 0, prot: 0, carb: 0, fat: 0 }
  );

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Meal Plan Generator</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Generate a structured daily meal plan based on your diet style and preferred number of meals.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Diet style</label>
          <div className="grid grid-cols-2 gap-2">
            {(["balanced", "high-protein", "low-carb", "keto"] as Diet[]).map((d) => (
              <button
                key={d}
                onClick={() => { setDiet(d); setGenerated(false); }}
                className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  diet === d
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {DIET_LABELS[d]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Meals per day</label>
          <div className="flex gap-2">
            {([3, 4, 5, 6] as Meals[]).map((m) => (
              <button
                key={m}
                onClick={() => { setMeals(m); setGenerated(false); }}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  meals === m
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setGenerated(true)}
          className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 text-sm transition-colors"
        >
          Generate Meal Plan
        </button>

        {generated && (
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
            {/* Daily totals */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              {[
                { label: "Calories", value: `${totals.cal} kcal` },
                { label: "Protein", value: `${totals.prot}g` },
                { label: "Carbs", value: `${totals.carb}g` },
                { label: "Fat", value: `${totals.fat}g` },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-lg bg-zinc-50 dark:bg-zinc-800/50 p-2">
                  <div className="text-zinc-500 dark:text-zinc-400">{label}</div>
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            {plan.map((meal) => (
              <div key={meal.label}>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mb-1.5">{meal.label}</p>
                <div className="space-y-1">
                  {meal.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-sm py-1 border-b border-zinc-50 dark:border-zinc-800/50 last:border-0">
                      <div>
                        <span className="text-zinc-700 dark:text-zinc-300">{item.name}</span>
                        <span className="ml-1.5 text-zinc-400 text-xs">({item.portion})</span>
                      </div>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs shrink-0 ml-2">
                        {item.cal} kcal · {item.prot}P · {item.carb}C · {item.fat}F
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-xs text-zinc-400">
              This is a template plan. Adjust portions to meet your exact calorie and macro targets from the TDEE Calculator.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
