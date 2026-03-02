"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/nutrition/carnivore-macro-calculator";
import type { Input, Output } from "@/lib/calculators/nutrition/carnivore-macro-calculator";

export default function CarnivoreClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Carnivore Macro Calculator"
      description="Calculate your daily protein and fat targets on a carnivore diet. Zero carbs — all calories from animal-sourced protein and fat."
      fields={[
        {
          name: "sex",
          label: "Sex",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        { name: "age", label: "Age (years)", type: "number", min: 15, max: 100, placeholder: "30" },
        { name: "weightKg", label: "Weight (kg)", type: "number", min: 20, max: 300, placeholder: "80" },
        { name: "heightCm", label: "Height (cm)", type: "number", min: 100, max: 250, placeholder: "178" },
        {
          name: "activityLevel",
          label: "Activity Level",
          type: "select",
          options: [
            { label: "Sedentary (desk job, no exercise)", value: "sedentary" },
            { label: "Light (1–3 days/week)", value: "light" },
            { label: "Moderate (3–5 days/week)", value: "moderate" },
            { label: "Very active (6–7 days/week)", value: "very" },
            { label: "Extra active (physical job + exercise)", value: "extra" },
          ],
        },
        {
          name: "goal",
          label: "Goal",
          type: "select",
          options: [
            { label: "Lose fat", value: "lose" },
            { label: "Maintain weight", value: "maintain" },
            { label: "Gain muscle", value: "gain" },
          ],
        },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {result.calories} <span className="text-base font-normal text-zinc-500">kcal/day</span>
          </p>
          <div className="pt-1 space-y-1.5">
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Protein</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.proteinG} g</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Fat</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.fatG} g</strong>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Carbohydrates</span>
              <strong className="text-zinc-900 dark:text-zinc-100">0 g</strong>
            </div>
          </div>
        </div>
      )}
    />
  );
}
