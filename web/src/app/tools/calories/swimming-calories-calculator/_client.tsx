"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { weightKg: number; timeMinutes: number; stroke: string };

function calculate(input: Input): number | null {
  if (!input.weightKg || !input.timeMinutes || !input.stroke) return null;
  const met =
    input.stroke === "freestyle" ? 8.3
    : input.stroke === "breaststroke" ? 5.3
    : input.stroke === "backstroke" ? 4.8
    : 13.8; // butterfly
  return Math.round((met * 3.5 * input.weightKg * (input.timeMinutes / 60)) / 1);
}

export default function SwimmingCaloriesClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Swimming Calories Calculator"
      description="Estimate calories burned swimming based on stroke type, weight, and duration."
      fields={[
        { name: "weightKg", label: "Body weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "timeMinutes", label: "Duration (minutes)", type: "number", min: 1, placeholder: "30" },
        {
          name: "stroke",
          label: "Stroke",
          type: "select",
          options: [
            { label: "Freestyle", value: "freestyle" },
            { label: "Breaststroke", value: "breaststroke" },
            { label: "Backstroke", value: "backstroke" },
            { label: "Butterfly", value: "butterfly" },
          ],
        },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          {result} <span className="text-base font-normal text-zinc-500">kcal</span>
        </p>
      )}
    />
  );
}
