// src/app/tools/body-composition/ideal-weight-calculator/IdealWeightCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HeightCmInput from "@/components/inputs/HeightCmInput";
import SexInput from "@/components/inputs/SexInput";

type Props = {
  defaultHeightCm: number;
  defaultSex: "male" | "female";
};

export default function IdealWeightCalculatorForm({
  defaultHeightCm,
  defaultSex,
}: Props) {
  const router = useRouter();

  const [heightCm, setHeightCm] = useState(defaultHeightCm);
  const [sex, setSex] = useState<"male" | "female">(defaultSex);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/ideal-weight-calculator?heightCm=${heightCm}&sex=${sex}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <HeightCmInput value={heightCm} onChange={setHeightCm} />
      <SexInput value={sex} onChange={setSex} />

      <button type="submit">Calculate</button>
    </form>
  );
}
