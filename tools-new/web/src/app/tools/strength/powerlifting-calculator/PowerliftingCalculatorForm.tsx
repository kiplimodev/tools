// src/app/tools/strength/powerlifting-calculator/PowerliftingCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultSquatKg: number;
  defaultBenchKg: number;
  defaultDeadliftKg: number;
};

export default function PowerliftingCalculatorForm({
  defaultSquatKg,
  defaultBenchKg,
  defaultDeadliftKg,
}: Props) {
  const router = useRouter();

  const [squatKg, setSquatKg] = useState(defaultSquatKg);
  const [benchKg, setBenchKg] = useState(defaultBenchKg);
  const [deadliftKg, setDeadliftKg] = useState(defaultDeadliftKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/powerlifting-calculator?squatKg=${squatKg}&benchKg=${benchKg}&deadliftKg=${deadliftKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Squat (kg)</label>
        <input
          type="number"
          value={squatKg}
          onChange={(e) => setSquatKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Bench Press (kg)</label>
        <input
          type="number"
          value={benchKg}
          onChange={(e) => setBenchKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Deadlift (kg)</label>
        <input
          type="number"
          value={deadliftKg}
          onChange={(e) => setDeadliftKg(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
