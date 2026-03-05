"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { weightKg: number; timeMinutes: number };

function calculate(input: Input): number | null {
  if (!input.weightKg || !input.timeMinutes) return null;
  // MET 3.5 for moderate walking (~5 km/h); standard formula: MET × 3.5 × kg × min / 200
  return Math.round((3.5 * 3.5 * input.weightKg * input.timeMinutes) / 200);
}

export default function WalkingCalorieClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Walking Calorie Calculator"
      description="Estimate calories burned walking at a moderate pace based on weight and duration."
      fields={[
        { name: "weightKg", label: "Body weight", type: "number", min: 20, unitGroup: "weight" },
        { name: "timeMinutes", label: "Duration (minutes)", type: "number", min: 1, placeholder: "45" },
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
