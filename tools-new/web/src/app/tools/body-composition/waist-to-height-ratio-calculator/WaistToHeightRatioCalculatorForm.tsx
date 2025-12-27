// src/app/tools/body-composition/waist-to-height-ratio-calculator/WaistToHeightRatioCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import HeightCmInput from "@/components/inputs/HeightCmInput";

type Props = {
  defaultWaistCm: number;
  defaultHeightCm: number;
};

export default function WaistToHeightRatioCalculatorForm({
  defaultWaistCm,
  defaultHeightCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/waist-to-height-ratio-calculator?waistCm=${waistCm}&heightCm=${heightCm}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Waist circumference (cm)"
        value={waistCm}
        onChange={setWaistCm}
        min={1}
      />

      <HeightCmInput value={heightCm} onChange={setHeightCm} />

      <button type="submit">Calculate</button>
    </form>
  );
}
