// src/app/tools/nutrition/protein-powder-calculator/ProteinPowderCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultProteinTargetGrams: number;
  defaultProteinPerScoopGrams: number;
};

export default function ProteinPowderCalculatorForm({
  defaultProteinTargetGrams,
  defaultProteinPerScoopGrams,
}: Props) {
  const router = useRouter();

  const [proteinTargetGrams, setProteinTargetGrams] = useState(
    defaultProteinTargetGrams
  );
  const [proteinPerScoopGrams, setProteinPerScoopGrams] = useState(
    defaultProteinPerScoopGrams
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/protein-powder-calculator?proteinTargetGrams=${proteinTargetGrams}&proteinPerScoopGrams=${proteinPerScoopGrams}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Protein Target (grams)"
        value={proteinTargetGrams}
        onChange={setProteinTargetGrams}
        min={0}
        step={1}
      />

      <NumberInput
        label="Protein per Scoop (grams)"
        value={proteinPerScoopGrams}
        onChange={setProteinPerScoopGrams}
        min={1}
        step={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
