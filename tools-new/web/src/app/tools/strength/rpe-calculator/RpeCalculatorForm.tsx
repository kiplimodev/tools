// src/app/tools/strength/rpe-calculator/RpeCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import RepsInput from "@/components/inputs/RepsInput";

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
      <NumberInput
        label="Weight (kg)"
        value={weightKg}
        onChange={setWeightKg}
        min={0}
        step={2.5}
      />

      <RepsInput
        value={reps}
        onChange={setReps}
      />

      <NumberInput
        label="RPE"
        value={rpe}
        onChange={setRpe}
        min={1}
        max={10}
        step={0.5}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
