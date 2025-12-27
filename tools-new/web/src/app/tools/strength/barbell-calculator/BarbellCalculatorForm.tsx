// src/app/tools/strength/barbell-calculator/BarbellCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultTargetWeightKg: number;
  defaultBarWeightKg: number;
};

export default function BarbellCalculatorForm({
  defaultTargetWeightKg,
  defaultBarWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(
    defaultTargetWeightKg
  );
  const [barWeightKg, setBarWeightKg] = useState(defaultBarWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/barbell-calculator?targetWeightKg=${targetWeightKg}&barWeightKg=${barWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Target Weight (kg)"
        value={targetWeightKg}
        onChange={setTargetWeightKg}
        min={0}
        step={0.5}
      />

      <NumberInput
        label="Bar Weight (kg)"
        value={barWeightKg}
        onChange={setBarWeightKg}
        min={0}
        step={0.5}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
