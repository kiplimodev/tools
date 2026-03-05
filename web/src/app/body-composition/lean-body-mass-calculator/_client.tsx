"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { leanBodyMass } from "@/lib/calculators/bodyComposition/leanBodyMass";
import type { LeanBodyMassResult } from "@/lib/calculators/bodyComposition/leanBodyMass";

type Input = {
  sex: "male" | "female";
  weightKg: number;
  heightCm: number;
};

function calculate(input: Input): LeanBodyMassResult | null {
  if (!input.sex || !input.weightKg || !input.heightCm) return null;
  return leanBodyMass(input.sex, input.weightKg, input.heightCm);
}

export default function LeanBodyMassClientPage() {
  return (
    <CalculatorLayout<Input, LeanBodyMassResult>
      title="Lean Body Mass Calculator"
      description="Calculate your lean body mass using the Boer formula from weight and height."
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
        { name: "weightKg", label: "Weight", type: "number", min: 1, unitGroup: "weight" },
        { name: "heightCm", label: "Height", type: "number", min: 1, unitGroup: "height" },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Lean Body Mass</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.leanMass.toFixed(1)} kg</strong>
          </div>
        </div>
      )}
    />
  );
}
