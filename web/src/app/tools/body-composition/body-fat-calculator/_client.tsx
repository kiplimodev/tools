"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { navyBodyFat } from "@/lib/calculators/bodyComposition/navyBodyFat";
import type { NavyBodyFatResult } from "@/lib/calculators/bodyComposition/navyBodyFat";

type Input = {
  sex: "male" | "female";
  waistCm: number;
  neckCm: number;
  heightCm: number;
  hipCm?: number;
};

function calculate(input: Input): NavyBodyFatResult | null {
  if (!input.sex || !input.waistCm || !input.neckCm || !input.heightCm) return null;
  return navyBodyFat(input.sex, input.waistCm, input.neckCm, input.heightCm, input.hipCm);
}

export default function BodyFatClientPage() {
  return (
    <CalculatorLayout<Input, NavyBodyFatResult>
      title="Body Fat Calculator"
      description="Estimate your body fat percentage using the US Navy tape measurement method."
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
        { name: "waistCm", label: "Waist (cm)", type: "number", min: 1 },
        { name: "neckCm", label: "Neck (cm)", type: "number", min: 1 },
        { name: "heightCm", label: "Height (cm)", type: "number", min: 1 },
        { name: "hipCm", label: "Hip (cm) — females only", type: "number", min: 1, required: false },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Body Fat Percentage</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.bodyFatPercent.toFixed(1)}%</strong>
          </div>
        </div>
      )}
    />
  );
}
