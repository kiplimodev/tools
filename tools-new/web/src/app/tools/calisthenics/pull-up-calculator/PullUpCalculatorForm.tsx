"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultReps: number;
};

export default function PullUpCalculatorForm({ defaultReps }: Props) {
  const router = useRouter();
  const [reps, setReps] = useState(defaultReps);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calisthenics/pull-up-calculator?reps=${reps}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Pull-ups (reps)</label>
        <input
          type="number"
          value={reps}
          onChange={(e) => setReps(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
