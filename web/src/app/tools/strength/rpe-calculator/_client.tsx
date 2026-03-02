"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/rpe-calculator";
import type { Input, Output } from "@/lib/calculators/strength/rpe-calculator";

export default function RpeClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="RPE Calculator"
      description="Predict your working weight or rep count at any RPE based on your training max."
      fields={[
        { name: "weightKg", label: "Weight lifted (kg)", type: "number", min: 1 },
        { name: "reps", label: "Reps performed", type: "number", min: 1 },
        { name: "rpe", label: "RPE (6–10)", type: "number", min: 6, max: 10, step: 0.5 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          {result.estimated1RM !== null && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Estimated 1RM</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.estimated1RM.toFixed(1)} kg</strong>
            </div>
          )}
          {result.percent1RM !== null && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">% of 1RM</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.percent1RM.toFixed(1)}%</strong>
            </div>
          )}
          {result.rir !== null && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Reps in Reserve (RIR)</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.rir}</strong>
            </div>
          )}
          {result.recommendedTrainingMax !== null && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Recommended Training Max</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.recommendedTrainingMax.toFixed(1)} kg</strong>
            </div>
          )}
        </div>
      )}
    />
  );
}
