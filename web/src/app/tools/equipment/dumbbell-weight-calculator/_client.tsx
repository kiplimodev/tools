"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/equipment/dumbbell-weight-calculator";
import type { Input, Output } from "@/lib/calculators/equipment/dumbbell-weight-calculator";

export default function DumbbellWeightClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Dumbbell Weight Calculator"
      description="Calculate total volume lifted with dumbbells across sets and exercises."
      fields={[
        { name: "targetWeightKg", label: "Target dumbbell weight (kg)", type: "number", min: 0.5, step: 0.5 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Nearest available weight</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.selectedWeight} kg</strong>
          </div>
          {result.missingWeight !== null && result.missingWeight > 0 && (
            <p className="text-amber-600 dark:text-amber-400">
              Difference from target: <strong>{result.missingWeight.toFixed(2)} kg</strong>
            </p>
          )}
        </div>
      )}
    />
  );
}
