// tools-new/web/src/app/tools/calories/swimming-calories-calculator/SwimmingCaloriesCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";
import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWeightKg: number;
  defaultDurationMinutes: number;
  defaultMet: number;
};

export default function SwimmingCaloriesCalculatorForm({
  defaultWeightKg,
  defaultDurationMinutes,
  defaultMet,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [durationMinutes, setDurationMinutes] = useState(
    defaultDurationMinutes
  );
  const [met, setMet] = useState(defaultMet);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/swimming-calories-calculator?weightKg=${weightKg}&durationMinutes=${durationMinutes}&met=${met}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput value={weightKg} onChange={setWeightKg} />

      <TimeMinutesInput
        value={durationMinutes}
        onChange={setDurationMinutes}
      />

      <NumberInput
        label="MET value"
        value={met}
        onChange={setMet}
        step={0.1}
        min={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
