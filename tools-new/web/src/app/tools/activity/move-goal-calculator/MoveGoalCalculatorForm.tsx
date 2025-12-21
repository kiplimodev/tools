// src/app/tools/activity/move-goal-calculator/MoveGoalCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <div>
        <label>Current Steps per Day</label>
        <input
          type="number"
          value={currentStepsPerDay}
          onChange={(e) => setCurrentStepsPerDay(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Increase Percentage (%)</label>
        <input
          type="number"
          value={increasePercent}
          onChange={(e) => setIncreasePercent(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
