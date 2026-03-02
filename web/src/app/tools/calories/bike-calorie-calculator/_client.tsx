"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { cyclingCalories, type CyclingCaloriesResult } from "@/lib/calculators/cycling/calories";

type Input = { speedKmh: number; timeMinutes: number; weightKg: number };

function calculate(input: Input): CyclingCaloriesResult | null {
  if (!input.speedKmh || !input.timeMinutes || !input.weightKg) return null;
  return cyclingCalories(input.speedKmh, input.timeMinutes, input.weightKg);
}

export default function BikeCalorieClientPage() {
  return (
    <CalculatorLayout<Input, CyclingCaloriesResult>
      title="Bike Calorie Calculator"
      description="Estimate calories burned cycling based on speed, duration, and body weight."
      fields={[
        { name: "weightKg", label: "Body weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "speedKmh", label: "Average speed (km/h)", type: "number", min: 5, placeholder: "20" },
        { name: "timeMinutes", label: "Duration (minutes)", type: "number", min: 1, placeholder: "60" },
      ]}
      calculate={calculate}
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
