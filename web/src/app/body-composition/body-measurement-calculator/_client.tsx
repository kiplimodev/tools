"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/body-composition/body-measurement-calculator";
import type { Input, Output } from "@/lib/calculators/body-composition/body-measurement-calculator";

export default function BodyMeasurementClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Body Measurement Calculator"
      description="Estimate your body fat percentage, fat mass, and lean mass from waist and weight using the YMCA circumference method."
      fields={[
        {
          name: "sex",
          label: "Sex",
          type: "select",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
          ],
        },
        { name: "weightKg", label: "Body Weight", type: "number", min: 20, unitGroup: "weight" },
        { name: "waistCm", label: "Waist Circumference", type: "number", min: 40, unitGroup: "shortDistance" },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Body Fat</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.bodyFatPercent.toFixed(1)}%</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Fat Mass</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.fatMassKg.toFixed(1)} kg</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Lean Mass</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.leanMassKg.toFixed(1)} kg</strong>
          </div>
        </div>
      )}
    />
  );
}
