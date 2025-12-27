// src/app/tools/strength/training-volume-calculator/TrainingVolumeCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import RepsInput from "@/components/inputs/RepsInput";
import SetsInput from "@/components/inputs/SetsInput";

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

      <SetsInput
        value={sets}
        onChange={setSets}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
