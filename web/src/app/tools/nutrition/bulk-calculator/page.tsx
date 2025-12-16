"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import {
  calculateBulk,
  type BulkInput,
} from "@/lib/calculators/nutrition/bulk-calculator";

export default function BulkCalculatorPage() {
  return (
    <CalculatorLayout<BulkInput>
      title="Bulk Calculator"
      description="Estimate daily calories needed for bulking."
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
          name: "surplus",
          label: "Calorie Surplus",
          type: "select",
          options: [
            { label: "Small (+250 kcal)", value: "small" },
            { label: "Medium (+500 kcal)", value: "medium" },
            { label: "Large (+750 kcal)", value: "large" },
          ],
        },
      ]}
      calculate={calculateBulk}
      renderResult={(result) => (
        <p>
          <strong>Daily bulk calories:</strong> {result} kcal / day
        </p>
      )}
    />
  );
}
