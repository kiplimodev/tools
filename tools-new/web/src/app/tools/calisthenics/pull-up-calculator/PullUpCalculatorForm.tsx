// src/app/tools/calisthenics/pull-up-calculator/PullUpCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import RepsInput from "@/components/inputs/RepsInput";

type Props = {
  defaultReps: number;
};

export default function PullUpCalculatorForm({
  defaultReps,
}: Props) {
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
      <RepsInput
        value={reps}
        onChange={setReps}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
