"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultReps: number;
  defaultRpe: number;
};

export default function RpeCalculatorForm({
  defaultWeightKg,
  defaultReps,
  defaultRpe,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [reps, setReps] = useState(defaultReps);
  const [rpe, setRpe] = useState(defaultRpe);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/rpe-calculator?weightKg=${weightKg}&reps=${reps}&rpe=${rpe}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Reps</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
      </div>

      <div>
        <label>RPE</label>
        <input
          type="number"
          step="0.5"
          value={rpe}
          onChange={(e) => setRpe(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
