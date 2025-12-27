// src/app/tools/activity/move-goal-calculator/MoveGoalCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultCurrentStepsPerDay: number;
  defaultIncreasePercent: number;
};

export default function MoveGoalCalculatorForm({
  defaultCurrentStepsPerDay,
  defaultIncreasePercent,
}: Props) {
  const router = useRouter();

  const [currentStepsPerDay, setCurrentStepsPerDay] = useState(
    defaultCurrentStepsPerDay
  );
  const [increasePercent, setIncreasePercent] = useState(
    defaultIncreasePercent
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/activity/move-goal-calculator?currentStepsPerDay=${currentStepsPerDay}&increasePercent=${increasePercent}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Current Steps per Day"
        value={currentStepsPerDay}
        onChange={setCurrentStepsPerDay}
        min={0}
        step={100}
      />

      <NumberInput
        label="Increase Percentage (%)"
        value={increasePercent}
        onChange={setIncreasePercent}
        min={0}
        step={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
