"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultSteps: number;
  defaultWeightKg: number;
};

export default function StepsToCaloriesCalculatorForm({
  defaultSteps,
  defaultWeightKg,
}: Props) {
  const router = useRouter();

  const [steps, setSteps] = useState(defaultSteps);
  const [weightKg, setWeightKg] = useState(defaultWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/steps-to-calories-calculator?steps=${steps}&weightKg=${weightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Steps</label>
        <input
          type="number"
          value={steps}
          onChange={(e) => setSteps(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Body Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
