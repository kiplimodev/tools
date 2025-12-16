"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import {
  calculateIntermittentFasting,
} from "@/lib/calculators/nutrition/intermittent-fasting-calculator/intermittent-fasting";

type Inputs = {
  protocol: "16:8" | "18:6" | "20:4" | "omad";
  dailyCalories: number;
  meals: number;
};

export default function IntermittentFastingCalculatorPage() {
  return (
    <CalculatorLayout<Inputs, string>
      title="Intermittent Fasting Calculator"
      description="Plan your eating window and calories per meal."
      fields={[
        {
          name: "protocol",
          label: "Fasting Protocol",
          type: "select",
          required: true,
          options: [
            { label: "16:8", value: "16:8" },
            { label: "18:6", value: "18:6" },
            { label: "20:4", value: "20:4" },
            { label: "OMAD (23:1)", value: "omad" },
          ],
        },
        {
          name: "dailyCalories",
          label: "Daily Calories (kcal)",
          type: "number",
          required: true,
        },
        {
          name: "meals",
          label: "Meals in Eating Window",
          type: "number",
          min: 1,
          required: true,
        },
      ]}
      calculate={calculateIntermittentFasting}
      renderResult={(result) => <p>{result}</p>}
    />
  );
}
