"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { steps: number; weightKg: number };

function calculate(input: Input): number | null {
  if (!input.steps || !input.weightKg) return null;
  // ~0.04 kcal per step per kg / 70kg reference
  return Math.round(input.steps * 0.04 * (input.weightKg / 70));
}

export default function StepsToCaloriesClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Steps to Calories Calculator"
      description="Convert your daily step count into estimated calories burned based on body weight."
      fields={[
        { name: "steps", label: "Daily steps", type: "number", min: 1, placeholder: "10000" },
        { name: "weightKg", label: "Body weight", type: "number", min: 20, unitGroup: "weight" },
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
