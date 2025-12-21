// src/app/tools/activity/steps-per-day-calculator/StepsPerDayCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultActiveCalories: number;
  defaultCaloriesPerStep: number;
};

export default function StepsPerDayCalculatorForm({
  defaultActiveCalories,
  defaultCaloriesPerStep,
}: Props) {
  const router = useRouter();

  const [activeCalories, setActiveCalories] = useState(defaultActiveCalories);
  const [caloriesPerStep, setCaloriesPerStep] = useState(
    defaultCaloriesPerStep
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/activity/steps-per-day-calculator?activeCalories=${activeCalories}&caloriesPerStep=${caloriesPerStep}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Active Calories (kcal)</label>
        <input
          type="number"
          value={activeCalories}
          onChange={(e) => setActiveCalories(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Calories per Step</label>
        <input
          type="number"
          step="0.001"
          value={caloriesPerStep}
          onChange={(e) => setCaloriesPerStep(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
