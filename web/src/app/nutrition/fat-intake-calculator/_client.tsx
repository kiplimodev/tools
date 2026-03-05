"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { calculator } from "@/lib/calculators/nutrition/fat-intake-calculator";
import type { Input } from "@/lib/calculators/nutrition/fat-intake-calculator";

export default function FatIntakeClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Fat Intake Calculator"
      description="Estimate daily fat intake based on body weight and goal."
      fields={[
        { name: "weight", label: "Body Weight (kg)", type: "number" },
        {
          name: "goal",
          label: "Diet Goal",
          type: "select",
          options: [
            { label: "Minimum (0.6 g/kg)", value: "minimum" },
            { label: "Moderate (0.8 g/kg)", value: "moderate" },
            { label: "High (1.0 g/kg)", value: "high" },
          ],
        },
      ]}
      calculate={calculator}
      renderResult={(result) => (
        <p>
          <strong>Recommended fat intake:</strong> {result} g / day
        </p>
      )}
    />
  );
}
