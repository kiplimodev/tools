"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";

type Props = {
  defaultWeightKg: number;
  defaultDurationMinutes: number;
};

export default function RunningCaloriesBurnedCalculatorForm({
  defaultWeightKg,
  defaultDurationMinutes,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [durationMinutes, setDurationMinutes] = useState(
    defaultDurationMinutes
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/running-calories-burned-calculator?weightKg=${weightKg}&durationMinutes=${durationMinutes}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput
        value={weightKg}
        onChange={setWeightKg}
      />

      <TimeMinutesInput
        value={durationMinutes}
        onChange={setDurationMinutes}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
