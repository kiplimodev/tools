// src/app/tools/strength/powerlifting-calculator/PowerliftingCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

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
      <NumberInput
        label="Squat (kg)"
        value={squatKg}
        onChange={setSquatKg}
        min={0}
        step={2.5}
      />

      <NumberInput
        label="Bench Press (kg)"
        value={benchKg}
        onChange={setBenchKg}
        min={0}
        step={2.5}
      />

      <NumberInput
        label="Deadlift (kg)"
        value={deadliftKg}
        onChange={setDeadliftKg}
        min={0}
        step={2.5}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
