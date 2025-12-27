"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import HeightCmInput from "@/components/inputs/HeightCmInput";
import AgeInput from "@/components/inputs/AgeInput";
import SexInput from "@/components/inputs/SexInput";

type Props = {
  defaultWeightKg: number;
  defaultHeightCm: number;
  defaultAge: number;
  defaultSex: "male" | "female";
};

export default function BodyFatCalculatorForm({
  defaultWeightKg,
  defaultHeightCm,
  defaultAge,
  defaultSex,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);
  const [age, setAge] = useState(defaultAge);
  const [sex, setSex] = useState<"male" | "female">(defaultSex);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/body-fat-calculator?weightKg=${weightKg}&heightCm=${heightCm}&age=${age}&sex=${sex}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput value={weightKg} onChange={setWeightKg} />
      <HeightCmInput value={heightCm} onChange={setHeightCm} />
      <AgeInput value={age} onChange={setAge} />
      <SexInput value={sex} onChange={setSex} />

      <button type="submit">Calculate</button>
    </form>
  );
}
