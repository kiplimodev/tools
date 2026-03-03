"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/plate-weight-calculator";
import type { Input, Output } from "@/lib/calculators/strength/plate-weight-calculator";

export default function PlateWeightClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Plate Weight Calculator"
      description="Find the exact plate combination needed to load a barbell to your target weight."
      fields={[
        { name: "targetPerSideKg", label: "Target weight per side", type: "number", min: 0.5, unitGroup: "weight" },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-3 text-sm">
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 mb-1">Plates per side</p>
            {result.plates.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {result.plates.map((plate, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:ring-emerald-700"
                  >
                    {plate} kg
                  </span>
                ))}
              </div>
            ) : (
              <span className="text-zinc-400">No plates needed</span>
            )}
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Total loaded per side</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.totalLoaded.toFixed(2)} kg</strong>
          </div>
          {result.missingWeight !== null && result.missingWeight > 0 && (
            <p className="text-amber-600 dark:text-amber-400">
              Missing: <strong>{result.missingWeight.toFixed(2)} kg</strong> (not achievable with standard plates)
            </p>
          )}
        </div>
      )}
    />
  );
}
