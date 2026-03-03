"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/body-composition/waist-to-height-ratio-calculator";
import type { Output } from "@/lib/calculators/body-composition/waist-to-height-ratio-calculator";

type Input = {
  waistCm: number;
  heightCm: number;
};

function calculate(input: Input): Output | null {
  if (!input.waistCm || !input.heightCm) return null;
  return calculator({ waistCm: input.waistCm, heightCm: input.heightCm });
}

export default function WaistToHeightClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Waist-to-Height Ratio Calculator"
      description="Calculate your waist-to-height ratio and assess cardiovascular health risk."
      fields={[
        { name: "waistCm", label: "Waist", type: "number", min: 1, unitGroup: "shortDistance" },
        { name: "heightCm", label: "Height", type: "number", min: 1, unitGroup: "height" },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-3 text-sm">
          <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
            <span className="text-zinc-500 dark:text-zinc-400">Waist-to-Height Ratio</span>
            <strong className="text-2xl text-zinc-900 dark:text-zinc-100">{result.ratio.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Category</span>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">{result.category}</span>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500 pt-1">
            A ratio under 0.5 is generally considered healthy.
          </p>
        </div>
      )}
    />
  );
}
