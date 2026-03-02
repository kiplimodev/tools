"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { weightKg: number; timeMinutes: number; intensity: string };

function calculate(input: Input): number | null {
  if (!input.weightKg || !input.timeMinutes || !input.intensity) return null;
  const met = input.intensity === "light" ? 4.5 : input.intensity === "moderate" ? 7.0 : 8.5;
  return Math.round((met * 3.5 * input.weightKg * (input.timeMinutes / 60)) / 1);
}

export default function RowingCaloriesClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Rowing Calories Calculator"
      description="Estimate calories burned rowing based on weight, duration, and effort level."
      fields={[
        { name: "weightKg", label: "Body weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "timeMinutes", label: "Duration (minutes)", type: "number", min: 1, placeholder: "30" },
        {
          name: "intensity",
          label: "Intensity",
          type: "select",
          options: [
            { label: "Light", value: "light" },
            { label: "Moderate", value: "moderate" },
            { label: "Vigorous", value: "vigorous" },
          ],
        },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {result} <span className="text-base font-normal text-zinc-500">kcal</span>
        </p>
      )}
    />
  );
}
