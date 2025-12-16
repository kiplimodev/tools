"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import {
  calculateFatIntake,
  type FatIntakeInput,
} from "@/lib/calculators/nutrition/fat-intake-calculator";

export default function FatIntakeCalculatorPage() {
  return (
    <CalculatorLayout<FatIntakeInput>
      title="Fat Intake Calculator"
      description="Estimate daily fat intake based on body weight and goal."
      fields={[
        { name: "weight", label: "Body Weight (kg)", type: "number" },
        {
          name: "goal",
          label: "Diet Goal",
          type: "select",
          options: [
            { label: "Low fat", value: "low" },
            { label: "Moderate fat", value: "moderate" },
            { label: "High fat", value: "high" },
          ],
        },
      ]}
      calculate={calculateFatIntake}
      renderResult={(result) => (
        <p>
          <strong>Recommended fat intake:</strong> {result} g / day
        </p>
      )}
    />
  );
}
