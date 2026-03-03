"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/strength/1-rep-max-calculator";
import type { Input, Output } from "@/lib/calculators/strength/1-rep-max-calculator";

export default function OneRepMaxClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="1 Rep Max Calculator"
      description="Estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas."
      fields={[
        { name: "weightKg", label: "Weight", type: "number", min: 1, unitGroup: "weight" },
        { name: "reps", label: "Reps performed", type: "number", min: 1 },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <p className="font-semibold text-zinc-700 dark:text-zinc-300 mb-3">Estimated 1RM by formula:</p>
          <div className="divide-y divide-zinc-100 dark:divide-zinc-800 rounded-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden">
            {[
              { label: "Epley", value: result.epley },
              { label: "Brzycki", value: result.brzycki },
              { label: "Lombardi", value: result.lombardi },
              { label: "O'Conner", value: result.oconner },
              { label: "Lander", value: result.lander },
            ].map(({ label, value }) => (
              <div key={label} className="flex justify-between items-center px-4 py-2.5 bg-white dark:bg-zinc-900">
                <span className="text-zinc-500 dark:text-zinc-400">{label}</span>
                <strong className="text-zinc-900 dark:text-zinc-100">{value.toFixed(1)} kg</strong>
              </div>
            ))}
          </div>
        </div>
      )}
    />
  );
}
