"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/nutrition/tdee-calculator";
import type { Input } from "@/lib/calculators/nutrition/tdee-calculator";

export default function TDEEClientPage() {
  return (
    <CalculatorLayout<Input>
      title="TDEE Calculator"
      description="Estimate your Total Daily Energy Expenditure based on your body metrics and activity level."
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
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <p>
          <strong>Estimated TDEE:</strong> {result} kcal / day
        </p>
      )}
    />
  );
}
