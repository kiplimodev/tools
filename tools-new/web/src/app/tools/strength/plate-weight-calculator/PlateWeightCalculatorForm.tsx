// src/app/tools/strength/plate-weight-calculator/PlateWeightCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultTargetWeightKg: number;
  defaultBarbellWeightKg: number;
};

export default function PlateWeightCalculatorForm({
  defaultTargetWeightKg,
  defaultBarbellWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(
    defaultTargetWeightKg
  );
  const [barbellWeightKg, setBarbellWeightKg] = useState(
    defaultBarbellWeightKg
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/plate-weight-calculator?targetWeightKg=${targetWeightKg}&barbellWeightKg=${barbellWeightKg}`
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
        label="Barbell Weight (kg)"
        value={barbellWeightKg}
        onChange={setBarbellWeightKg}
        min={0}
        step={0.5}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
