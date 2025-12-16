"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import {
  calculateCreatine,
  CreatineResult,
} from "@/lib/calculators/nutrition/creatine-calculator";

export default function CreatineCalculatorPage() {
  return (
    <CalculatorLayout
      title="Creatine Calculator"
      description="Calculate your daily creatine intake based on body weight and protocol."
      fields={[
        {
          name: "weight",
          label: "Body Weight (kg)",
          type: "number",
          required: true,
        },
        {
          name: "protocol",
          label: "Supplementation Protocol",
          type: "select",
          required: true,
          options: [
            { label: "Maintenance (recommended)", value: "maintenance" },
            { label: "Loading phase", value: "loading" },
          ],
        },
      ]}
      calculate={calculateCreatine}
      renderResult={(result: CreatineResult) => (
        <ul className="text-sm space-y-1">
          <li>
            <strong>Daily dose:</strong> {result.dailyDose} g
          </li>
          {result.loadingDose && (
            <li>
              <strong>Loading dose:</strong>{" "}
              {result.loadingDose} g / day
            </li>
          )}
        </ul>
      )}
    />
  );
}
