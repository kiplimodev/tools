// src/app/tools/equipment/dumbbell-weight-calculator/DumbbellWeightCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";

type Props = {
  defaultTargetWeightKg: number;
  defaultHandleWeightKg: number;
};

export default function DumbbellWeightCalculatorForm({
  defaultTargetWeightKg,
  defaultHandleWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(
    defaultTargetWeightKg
  );
  const [handleWeightKg, setHandleWeightKg] = useState(
    defaultHandleWeightKg
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/equipment/dumbbell-weight-calculator?targetWeightKg=${targetWeightKg}&handleWeightKg=${handleWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput
        value={targetWeightKg}
        onChange={setTargetWeightKg}
      />

      <WeightKgInput
        value={handleWeightKg}
        onChange={setHandleWeightKg}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
