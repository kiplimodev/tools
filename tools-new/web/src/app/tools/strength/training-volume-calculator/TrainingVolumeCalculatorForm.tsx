"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultReps: number;
  defaultSets: number;
};

export default function TrainingVolumeCalculatorForm({
  defaultWeightKg,
  defaultReps,
  defaultSets,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [reps, setReps] = useState(defaultReps);
  const [sets, setSets] = useState(defaultSets);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/training-volume-calculator?weightKg=${weightKg}&reps=${reps}&sets=${sets}`
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
        <label>Sets</label>
        <input
          type="number"
          value={sets}
          onChange={(e) => setSets(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
