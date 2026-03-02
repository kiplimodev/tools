"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { fatLossTime } from "@/lib/calculators/bodyComposition/fatLoss";
import type { FatLossResult } from "@/lib/calculators/bodyComposition/fatLoss";

type Input = {
  currentWeightKg: number;
  targetWeightKg: number;
  dailyDeficit: number;
};

function calculate(input: Input): FatLossResult | null {
  if (!input.currentWeightKg || !input.targetWeightKg || !input.dailyDeficit) return null;
  return fatLossTime(input.currentWeightKg, input.targetWeightKg, input.dailyDeficit);
}

export default function BodyRecompositionClientPage() {
  return (
    <CalculatorLayout<Input, FatLossResult>
      title="Body Recomposition Calculator"
      description="Project changes to fat mass and lean mass over time with a recomposition plan."
      fields={[
        { name: "currentWeightKg", label: "Current weight (kg)", type: "number", min: 1 },
        { name: "targetWeightKg", label: "Target weight (kg)", type: "number", min: 1 },
        { name: "dailyDeficit", label: "Daily caloric deficit (kcal)", type: "number", min: 100, placeholder: "500" },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Weekly loss rate</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.weeklyLossKg.toFixed(2)} kg/week</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Estimated time to goal</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.weeksRequired} weeks</strong>
          </div>
        </div>
      )}
    />
  );
}
