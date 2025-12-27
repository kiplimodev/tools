// src/app/tools/nutrition/tdee-calculator/TdeeCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import HeightCmInput from "@/components/inputs/HeightCmInput";
import AgeInput from "@/components/inputs/AgeInput";
import SexInput from "@/components/inputs/SexInput";
import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWeightKg: number;
  defaultHeightCm: number;
  defaultAge: number;
  defaultSex: "male" | "female";
  defaultActivityMultiplier: number;
};

export default function TdeeCalculatorForm({
  defaultWeightKg,
  defaultHeightCm,
  defaultAge,
  defaultSex,
  defaultActivityMultiplier,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);
  const [age, setAge] = useState(defaultAge);
  const [sex, setSex] = useState<"male" | "female">(defaultSex);
  const [activityMultiplier, setActivityMultiplier] = useState(
    defaultActivityMultiplier
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/tdee-calculator?weightKg=${weightKg}&heightCm=${heightCm}&age=${age}&sex=${sex}&activityMultiplier=${activityMultiplier}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput value={weightKg} onChange={setWeightKg} />
      <HeightCmInput value={heightCm} onChange={setHeightCm} />
      <AgeInput value={age} onChange={setAge} />
      <SexInput value={sex} onChange={setSex} />

      <NumberInput
        label="Activity Multiplier"
        value={activityMultiplier}
        onChange={setActivityMultiplier}
        min={1}
        max={2.5}
        step={0.05}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
