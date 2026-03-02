"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = {
  sex: "male" | "female";
  waistCm: number;
  hipCm: number;
};

type Output = {
  ratio: number;
  risk: string;
};

function calculate(input: Input): Output | null {
  if (!input.sex || !input.waistCm || !input.hipCm) return null;
  const ratio = input.waistCm / input.hipCm;
  let risk: string;
  if (input.sex === "male") {
    if (ratio < 0.9) risk = "Low";
    else if (ratio < 1.0) risk = "Moderate";
    else risk = "High";
  } else {
    if (ratio < 0.8) risk = "Low";
    else if (ratio < 0.85) risk = "Moderate";
    else risk = "High";
  }
  return { ratio, risk };
}

export default function WaistToHipClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Waist-to-Hip Ratio Calculator"
      description="Calculate your waist-to-hip ratio and determine health risk classification."
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
        { name: "hipCm", label: "Hip (cm)", type: "number", min: 1 },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Waist-to-Hip Ratio</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.ratio.toFixed(2)}</strong>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Health Risk Level</span>
            <strong
              className={
                result.risk === "Low"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : result.risk === "Moderate"
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-red-600 dark:text-red-400"
              }
            >
              {result.risk}
            </strong>
          </div>
        </div>
      )}
    />
  );
}
