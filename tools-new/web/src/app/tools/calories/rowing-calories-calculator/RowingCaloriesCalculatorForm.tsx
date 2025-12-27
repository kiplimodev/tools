"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";
import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultWeightKg: number;
  defaultDurationMinutes: number;
  defaultMets: number;
};

export default function RowingCaloriesCalculatorForm({
  defaultWeightKg,
  defaultDurationMinutes,
  defaultMets,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [durationMinutes, setDurationMinutes] = useState(defaultDurationMinutes);
  const [mets, setMets] = useState(defaultMets);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/rowing-calories-calculator?weightKg=${weightKg}&durationMinutes=${durationMinutes}&mets=${mets}`
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
        label="METs"
        value={mets}
        onChange={setMets}
        min={1}
        step={0.1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
