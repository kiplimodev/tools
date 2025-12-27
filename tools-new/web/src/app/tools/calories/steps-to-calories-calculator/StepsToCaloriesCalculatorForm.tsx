// src/app/tools/calories/steps-to-calories-calculator/StepsToCaloriesCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import WeightKgInput from "@/components/inputs/WeightKgInput";

type Props = {
  defaultSteps: number;
  defaultWeightKg: number;
};

export default function StepsToCaloriesCalculatorForm({
  defaultSteps,
  defaultWeightKg,
}: Props) {
  const router = useRouter();

  const [steps, setSteps] = useState(defaultSteps);
  const [weightKg, setWeightKg] = useState(defaultWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/steps-to-calories-calculator?steps=${steps}&weightKg=${weightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Steps"
        value={steps}
        onChange={setSteps}
        min={1}
        step={1}
      />

      <WeightKgInput value={weightKg} onChange={setWeightKg} />

      <button type="submit">Calculate</button>
    </form>
  );
}
