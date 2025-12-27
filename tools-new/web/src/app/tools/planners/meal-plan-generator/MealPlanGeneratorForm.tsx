// src/app/tools/planners/meal-plan-generator/MealPlanGeneratorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

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
      <NumberInput
        label="Daily Calories"
        value={calories}
        onChange={setCalories}
        min={0}
        step={1}
      />

      <NumberInput
        label="Protein (g)"
        value={proteinGrams}
        onChange={setProteinGrams}
        min={0}
        step={1}
      />

      <NumberInput
        label="Meals per Day"
        value={mealsPerDay}
        onChange={setMealsPerDay}
        min={1}
        step={1}
      />

      <button type="submit">Generate Plan</button>
    </form>
  );
}
