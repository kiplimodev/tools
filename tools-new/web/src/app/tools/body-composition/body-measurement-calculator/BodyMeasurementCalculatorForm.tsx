// src/app/tools/body-composition/body-measurement-calculator/BodyMeasurementCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWaistCm: number;
  defaultHipCm: number;
  defaultChestCm: number;
};

export default function BodyMeasurementCalculatorForm({
  defaultWaistCm,
  defaultHipCm,
  defaultChestCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [hipCm, setHipCm] = useState(defaultHipCm);
  const [chestCm, setChestCm] = useState(defaultChestCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/body-measurement-calculator?waistCm=${waistCm}&hipCm=${hipCm}&chestCm=${chestCm}`
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

      <NumberInput
        label="Chest circumference (cm)"
        value={chestCm}
        onChange={setChestCm}
        min={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
