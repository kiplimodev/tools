// src/app/tools/nutrition/starbucks-macro-calculator/StarbucksMacroCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultCalories: number;
  defaultProteinGrams: number;
  defaultCarbsGrams: number;
  defaultFatGrams: number;
};

export default function StarbucksMacroCalculatorForm({
  defaultCalories,
  defaultProteinGrams,
  defaultCarbsGrams,
  defaultFatGrams,
}: Props) {
  const router = useRouter();

  const [calories, setCalories] = useState(defaultCalories);
  const [proteinGrams, setProteinGrams] = useState(defaultProteinGrams);
  const [carbsGrams, setCarbsGrams] = useState(defaultCarbsGrams);
  const [fatGrams, setFatGrams] = useState(defaultFatGrams);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/starbucks-macro-calculator?calories=${calories}&proteinGrams=${proteinGrams}&carbsGrams=${carbsGrams}&fatGrams=${fatGrams}`
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

      <NumberInput
        label="Carbohydrates (g)"
        value={carbsGrams}
        onChange={setCarbsGrams}
        min={0}
        step={1}
      />

      <NumberInput
        label="Fat (g)"
        value={fatGrams}
        onChange={setFatGrams}
        min={0}
        step={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
