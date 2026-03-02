"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/barbell-calculator";
import type { Input, Output } from "@/lib/calculators/strength/barbell-calculator";

export default function BarbellClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Barbell Calculator"
      description="Calculate the weight plates needed on each side of a barbell for any target load."
      fields={[
        { name: "barWeightKg", label: "Bar weight (kg)", type: "number", min: 1, placeholder: "20" },
        { name: "targetWeightKg", label: "Target total weight (kg)", type: "number", min: 1 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Weight per side</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.perSideWeight.toFixed(2)} kg</strong>
          </div>
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 mb-1">Plates per side</p>
            {result.platesPerSide.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {result.platesPerSide.map((plate, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700"
                  >
                    {plate} kg
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-zinc-400">No standard plates needed</span>
            )}
          </div>
          {result.missingWeight !== null && result.missingWeight > 0 && (
            <p className="text-amber-600 dark:text-amber-400">
              Missing weight: <strong>{result.missingWeight.toFixed(2)} kg</strong> (not achievable with standard plates)
            </p>
          )}
        </div>
      )}
    />
  );
}
