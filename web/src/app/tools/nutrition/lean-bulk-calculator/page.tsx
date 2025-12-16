"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import {
  calculateLeanBulk,
  type LeanBulkInput,
} from "@/lib/calculators/nutrition/lean-bulk-calculator";

export default function LeanBulkCalculatorPage() {
  return (
    <CalculatorLayout<LeanBulkInput>
      title="Lean Bulk Calculator"
      description="Calculate calories for a controlled lean bulk."
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
        { name: "age", label: "Age (years)", type: "number" },
        { name: "height", label: "Height (cm)", type: "number" },
        { name: "weight", label: "Weight (kg)", type: "number" },
        {
          name: "activity",
          label: "Activity Level",
          type: "select",
          options: [
            { label: "Sedentary", value: "sedentary" },
            { label: "Light", value: "light" },
            { label: "Moderate", value: "moderate" },
            { label: "Very active", value: "very" },
            { label: "Extra active", value: "extra" },
          ],
        },
        {
          name: "rate",
          label: "Lean Bulk Rate",
          type: "select",
          options: [
            { label: "Conservative", value: "conservative" },
            { label: "Moderate", value: "moderate" },
          ],
        },
      ]}
      calculate={calculateLeanBulk}
      renderResult={(result) => (
        <p>
          <strong>Lean bulk calories:</strong> {result} kcal / day
        </p>
      )}
    />
  );
}
