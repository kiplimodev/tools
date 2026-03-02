"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { weightKg: number; speedKmh: number; timeMinutes: number };

function calculate(input: Input): number | null {
  if (!input.weightKg || !input.speedKmh || !input.timeMinutes) return null;
  // MET increases with speed: ~6 at 8km/h, ~8 at 10km/h, ~11 at 13km/h
  const met = input.speedKmh < 8 ? 5.0 : input.speedKmh < 10 ? 7.0 : input.speedKmh < 13 ? 9.0 : 11.5;
  return Math.round((met * 3.5 * input.weightKg * (input.timeMinutes / 60)) / 1);
}

export default function TreadmillCalorieClientPage() {
  return (
    <CalculatorLayout<Input>
      title="Treadmill Calorie Calculator"
      description="Estimate calories burned on the treadmill based on speed, duration, and body weight."
      fields={[
        { name: "weightKg", label: "Body weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "speedKmh", label: "Speed (km/h)", type: "number", min: 1, step: 0.5, placeholder: "9" },
        { name: "timeMinutes", label: "Duration (minutes)", type: "number", min: 1, placeholder: "30" },
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
