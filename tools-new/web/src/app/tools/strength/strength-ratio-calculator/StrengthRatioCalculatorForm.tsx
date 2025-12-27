// src/app/tools/strength/strength-ratio-calculator/StrengthRatioCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultLiftA: number;
  defaultLiftB: number;
};

export default function StrengthRatioCalculatorForm({
  defaultLiftA,
  defaultLiftB,
}: Props) {
  const router = useRouter();

  const [liftA, setLiftA] = useState(defaultLiftA);
  const [liftB, setLiftB] = useState(defaultLiftB);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/strength-ratio-calculator?liftA=${liftA}&liftB=${liftB}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Primary Lift (kg)"
        value={liftA}
        onChange={setLiftA}
        min={0}
        step={2.5}
      />

      <NumberInput
        label="Secondary Lift (kg)"
        value={liftB}
        onChange={setLiftB}
        min={0}
        step={2.5}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
