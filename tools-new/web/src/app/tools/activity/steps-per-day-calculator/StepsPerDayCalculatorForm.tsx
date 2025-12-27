"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

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
      <NumberInput
        label="Active Calories (kcal)"
        value={activeCalories}
        onChange={setActiveCalories}
        min={0}
        step={1}
      />

      <NumberInput
        label="Calories per Step"
        value={caloriesPerStep}
        onChange={setCaloriesPerStep}
        min={0}
        step={0.001}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
