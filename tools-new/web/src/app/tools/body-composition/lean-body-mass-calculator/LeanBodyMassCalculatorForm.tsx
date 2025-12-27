// src/app/tools/body-composition/lean-body-mass-calculator/LeanBodyMassCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWeightKg: number;
  defaultBodyFatPercentage: number;
};

export default function LeanBodyMassCalculatorForm({
  defaultWeightKg,
  defaultBodyFatPercentage,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(
    defaultBodyFatPercentage
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/lean-body-mass-calculator?weightKg=${weightKg}&bodyFatPercentage=${bodyFatPercentage}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput value={weightKg} onChange={setWeightKg} />

      <NumberInput
        label="Body Fat Percentage (%)"
        value={bodyFatPercentage}
        onChange={setBodyFatPercentage}
        min={1}
        max={70}
        step={0.1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
