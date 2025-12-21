// src/app/tools/equipment/dumbbell-weight-calculator/DumbbellWeightCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultTargetWeightKg: number;
  defaultHandleWeightKg: number;
};

export default function DumbbellWeightCalculatorForm({
  defaultTargetWeightKg,
  defaultHandleWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(defaultTargetWeightKg);
  const [handleWeightKg, setHandleWeightKg] =
    useState(defaultHandleWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/equipment/dumbbell-weight-calculator?targetWeightKg=${targetWeightKg}&handleWeightKg=${handleWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Target Dumbbell Weight (kg)</label>
        <input
          type="number"
          value={targetWeightKg}
          onChange={(e) => setTargetWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Handle Weight (kg)</label>
        <input
          type="number"
          value={handleWeightKg}
          onChange={(e) => setHandleWeightKg(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
