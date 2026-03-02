"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/body-composition/bmi-calculator";
import type { Output } from "@/lib/calculators/body-composition/bmi-calculator";

type Input = {
  weightKg: number;
  heightCm: number;
};

function calculate(input: Input): Output | null {
  if (!input.weightKg || !input.heightCm) return null;
  return calculator({ weightKg: input.weightKg, heightCm: input.heightCm });
}

export default function BmiClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="BMI Calculator"
      description="Calculate your Body Mass Index from weight and height with health classification."
      fields={[
        { name: "weightKg", label: "Weight (kg)", type: "number", min: 1, step: 0.1, placeholder: "70" },
        { name: "heightCm", label: "Height (cm)", type: "number", min: 1, step: 0.1, placeholder: "175" },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
            <span className="text-zinc-500 dark:text-zinc-400">BMI</span>
            <strong className="text-2xl text-zinc-900 dark:text-zinc-100">{result.bmi.toFixed(1)}</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Category</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{result.category}</span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 pt-1">
            Healthy range: 18.5 – 24.9
          </p>
        </div>
      )}
    />
  );
}
