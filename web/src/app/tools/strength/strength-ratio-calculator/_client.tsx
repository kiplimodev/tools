"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/strength-ratio-calculator";
import type { Input, Output } from "@/lib/calculators/strength/strength-ratio-calculator";

export default function StrengthRatioClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Strength Ratio Calculator"
      description="Assess your push, pull, and leg strength ratios relative to your bodyweight."
      fields={[
        { name: "bodyWeightKg", label: "Body weight (kg)", type: "number", min: 1 },
        { name: "benchKg", label: "Bench press 1RM (kg)", type: "number", min: 1 },
        { name: "squatKg", label: "Squat 1RM (kg)", type: "number", min: 1 },
        { name: "deadliftKg", label: "Deadlift 1RM (kg)", type: "number", min: 1 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Bench / Bodyweight</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.benchToBody.toFixed(2)}x</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Squat / Bodyweight</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.squatToBody.toFixed(2)}x</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Deadlift / Bodyweight</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.deadliftToBody.toFixed(2)}x</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Squat : Deadlift ratio</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.squatDeadliftRatio.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <span className="text-zinc-500 dark:text-zinc-400">Upper/Lower Balance</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.upperLowerBalance}</strong>
          </div>
        </div>
      )}
    />
  );
}
