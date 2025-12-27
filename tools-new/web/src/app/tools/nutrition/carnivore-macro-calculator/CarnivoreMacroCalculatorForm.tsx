// src/app/tools/nutrition/carnivore-macro-calculator/CarnivoreMacroCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultCalories: number;
  defaultProteinGrams: number;
};

export default function CarnivoreMacroCalculatorForm({
  defaultCalories,
  defaultProteinGrams,
}: Props) {
  const router = useRouter();

  const [calories, setCalories] = useState(defaultCalories);
  const [proteinGrams, setProteinGrams] = useState(defaultProteinGrams);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/carnivore-macro-calculator?calories=${calories}&proteinGrams=${proteinGrams}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Calories"
        value={calories}
        onChange={setCalories}
        min={0}
        step={1}
      />

      <NumberInput
        label="Protein (g)"
        value={proteinGrams}
        onChange={setProteinGrams}
        min={0}
        step={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
