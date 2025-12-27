// src/app/tools/body-composition/waist-to-hip-ratio-calculator/WaistToHipRatioCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWaistCm: number;
  defaultHipCm: number;
};

export default function WaistToHipRatioCalculatorForm({
  defaultWaistCm,
  defaultHipCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [hipCm, setHipCm] = useState(defaultHipCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/waist-to-hip-ratio-calculator?waistCm=${waistCm}&hipCm=${hipCm}`
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

      <NumberInput
        label="Hip circumference (cm)"
        value={hipCm}
        onChange={setHipCm}
        min={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
