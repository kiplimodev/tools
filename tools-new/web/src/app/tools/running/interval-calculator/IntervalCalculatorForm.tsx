// src/app/tools/running/interval-calculator/IntervalCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultRunSeconds: number;
  defaultRestSeconds: number;
  defaultRepeats: number;
};

export default function IntervalCalculatorForm({
  defaultRunSeconds,
  defaultRestSeconds,
  defaultRepeats,
}: Props) {
  const router = useRouter();

  const [runSeconds, setRunSeconds] = useState(defaultRunSeconds);
  const [restSeconds, setRestSeconds] = useState(defaultRestSeconds);
  const [repeats, setRepeats] = useState(defaultRepeats);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/interval-calculator?runSeconds=${runSeconds}&restSeconds=${restSeconds}&repeats=${repeats}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Run Interval (seconds)</label>
        <input
          type="number"
          value={runSeconds}
          onChange={(e) => setRunSeconds(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Rest Interval (seconds)</label>
        <input
          type="number"
          value={restSeconds}
          onChange={(e) => setRestSeconds(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Repetitions</label>
        <input
          type="number"
          value={repeats}
          onChange={(e) => setRepeats(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
