// src/app/tools/calories/bike-calorie-calculator/BikeCalorieCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultDurationMinutes: number;
  defaultMet: number;
};

export default function BikeCalorieCalculatorForm({
  defaultWeightKg,
  defaultDurationMinutes,
  defaultMet,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [durationMinutes, setDurationMinutes] = useState(
    defaultDurationMinutes
  );
  const [met, setMet] = useState(defaultMet);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/bike-calorie-calculator?weightKg=${weightKg}&durationMinutes=${durationMinutes}&met=${met}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Body Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
        />
      </div>

      <div>
        <label>MET value</label>
        <input
          type="number"
          value={met}
          onChange={(e) => setMet(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
