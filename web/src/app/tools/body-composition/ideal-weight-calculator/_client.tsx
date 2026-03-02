"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { idealBodyWeight } from "@/lib/calculators/bodyComposition/idealBodyWeight";
import type { IdealBodyWeightResult } from "@/lib/calculators/bodyComposition/idealBodyWeight";

type Input = {
  sex: "male" | "female";
  heightCm: number;
};

function calculate(input: Input): IdealBodyWeightResult | null {
  if (!input.sex || !input.heightCm) return null;
  return idealBodyWeight(input.sex, input.heightCm);
}

export default function IdealWeightClientPage() {
  return (
    <CalculatorLayout<Input, IdealBodyWeightResult>
      title="Ideal Weight Calculator"
      description="Find your ideal weight range using Devine and Robinson formulas."
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
        { name: "heightCm", label: "Height (cm)", type: "number", min: 1 },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Devine formula</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.devine.toFixed(1)} kg</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Robinson formula</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.robinson.toFixed(1)} kg</strong>
          </div>
        </div>
      )}
    />
  );
}
