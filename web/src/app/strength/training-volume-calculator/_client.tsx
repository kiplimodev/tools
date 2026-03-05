"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/training-volume-calculator";
import type { Input, Output } from "@/lib/calculators/strength/training-volume-calculator";

export default function TrainingVolumeClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Training Volume Calculator"
      description="Calculate total training volume in sets, reps, and tonnage for any workout."
      fields={[
        { name: "sets", label: "Sets", type: "number", min: 1 },
        { name: "reps", label: "Reps per set", type: "number", min: 1 },
        { name: "weightKg", label: "Weight", type: "number", min: 0, unitGroup: "weight" },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Total Volume</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.totalVolume.toFixed(1)} kg</strong>
          </div>
          {result.volumePerSet !== null && (
            <div className="flex justify-between items-center">
              <span className="text-zinc-500 dark:text-zinc-400">Volume per Set</span>
              <strong className="text-zinc-900 dark:text-zinc-100">{result.volumePerSet.toFixed(1)} kg</strong>
            </div>
          )}
        </div>
      )}
    />
  );
}
