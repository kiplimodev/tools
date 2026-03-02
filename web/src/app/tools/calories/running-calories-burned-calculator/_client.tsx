"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/running/running-calories-calculator";
import type { Input, Output } from "@/lib/calculators/running/running-calories-calculator";

export default function RunningCaloriesClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Running Calories Burned"
      description="Estimate total calories burned running based on weight, distance, and time."
      fields={[
        { name: "weightKg", label: "Body weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "distanceKm", label: "Distance (km)", type: "number", min: 0.1, step: 0.1, placeholder: "5" },
        { name: "timeMinutes", label: "Time (minutes)", type: "number", min: 1, placeholder: "30" },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {result.calories} <span className="text-base font-normal text-zinc-500">kcal</span>
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">MET: {result.met.toFixed(1)}</p>
        </div>
      )}
    />
  );
}
