// src/app/tools/trackers/weight-tracker/WeightTrackerCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultStartWeightKg: number;
  defaultCurrentWeightKg: number;
};

export default function WeightTrackerCalculatorForm({
  defaultStartWeightKg,
  defaultCurrentWeightKg,
}: Props) {
  const router = useRouter();

  const [startWeightKg, setStartWeightKg] = useState(defaultStartWeightKg);
  const [currentWeightKg, setCurrentWeightKg] =
    useState(defaultCurrentWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/trackers/weight-tracker?startWeightKg=${startWeightKg}&currentWeightKg=${currentWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Starting Weight (kg)</label>
        <input
          type="number"
          value={startWeightKg}
          onChange={(e) => setStartWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Current Weight (kg)</label>
        <input
          type="number"
          value={currentWeightKg}
          onChange={(e) => setCurrentWeightKg(Number(e.target.value))}
        />
      </div>

      <button type="submit">Track Weight</button>
    </form>
  );
}
