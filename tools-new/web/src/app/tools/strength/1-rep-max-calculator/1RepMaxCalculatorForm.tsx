// src/app/tools/strength/1-rep-max-calculator/1RepMaxCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import RepsInput from "@/components/inputs/RepsInput";

type Props = {
  defaultWeightKg: number;
  defaultReps: number;
};

export default function RepMaxCalculatorForm({
  defaultWeightKg,
  defaultReps,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [reps, setReps] = useState(defaultReps);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/1-rep-max-calculator?weightKg=${weightKg}&reps=${reps}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Weight Lifted (kg)"
        value={weightKg}
        onChange={setWeightKg}
        min={0}
        step={2.5}
      />

      <RepsInput
        value={reps}
        onChange={setReps}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
