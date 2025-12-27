// tools-new/web/src/app/tools/body-composition/bmi-calculator/BmiCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import HeightCmInput from "@/components/inputs/HeightCmInput";

type Props = {
  defaultWeightKg: number;
  defaultHeightCm: number;
};

export default function BmiCalculatorForm({
  defaultWeightKg,
  defaultHeightCm,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/bmi-calculator?weightKg=${weightKg}&heightCm=${heightCm}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput value={weightKg} onChange={setWeightKg} />
      <HeightCmInput value={heightCm} onChange={setHeightCm} />

      <button type="submit">Calculate</button>
    </form>
  );
}
