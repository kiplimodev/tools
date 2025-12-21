"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultGoal: "low" | "moderate" | "high";
};

export default function FatIntakeCalculatorForm({
  defaultWeightKg,
  defaultGoal,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [goal, setGoal] = useState<"low" | "moderate" | "high">(defaultGoal);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/fat-intake-calculator?weightKg=${weightKg}&goal=${goal}`
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
        <label>Fat Intake Goal</label>
        <select
          value={goal}
          onChange={(e) =>
            setGoal(e.target.value as "low" | "moderate" | "high")
          }
        >
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
