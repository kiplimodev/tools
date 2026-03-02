"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/powerlifting-calculator";
import type { Input, Output } from "@/lib/calculators/strength/powerlifting-calculator";

export default function PowerliftingClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Powerlifting Calculator"
      description="Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes."
      fields={[
        {
          name: "gender",
          label: "Gender",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        { name: "bodyWeightKg", label: "Body weight (kg)", type: "number", min: 1 },
        { name: "squatKg", label: "Squat (kg)", type: "number", min: 1 },
        { name: "benchKg", label: "Bench (kg)", type: "number", min: 1 },
        { name: "deadliftKg", label: "Deadlift (kg)", type: "number", min: 1 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Total</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.totalKg} kg</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">DOTS</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.dots.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Wilks</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.wilks.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">IPF GL</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.ipfGL.toFixed(2)}</strong>
          </div>
        </div>
      )}
    />
  );
}
