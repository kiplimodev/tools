"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultCalories: number;
  defaultProteinGrams: number;
  defaultMealsPerDay: number;
};

export default function MealPlanGeneratorForm({
  defaultCalories,
  defaultProteinGrams,
  defaultMealsPerDay,
}: Props) {
  const router = useRouter();

  const [calories, setCalories] = useState(defaultCalories);
  const [proteinGrams, setProteinGrams] = useState(defaultProteinGrams);
  const [mealsPerDay, setMealsPerDay] = useState(defaultMealsPerDay);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/planners/meal-plan-generator?calories=${calories}&proteinGrams=${proteinGrams}&mealsPerDay=${mealsPerDay}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Daily Calories</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Protein (g)</label>
        <input
          type="number"
          value={proteinGrams}
          onChange={(e) => setProteinGrams(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Meals per Day</label>
        <input
          type="number"
          value={mealsPerDay}
          onChange={(e) => setMealsPerDay(Number(e.target.value))}
        />
      </div>

      <button type="submit">Generate Plan</button>
    </form>
  );
}
