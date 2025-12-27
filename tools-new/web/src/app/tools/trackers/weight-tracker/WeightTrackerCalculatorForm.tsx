"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";

type Props = {
  defaultStartWeightKg: number;
  defaultCurrentWeightKg: number;
};

export default function WeightTrackerCalculatorForm({
  defaultStartWeightKg,
  defaultCurrentWeightKg,
}: Props) {
  const router = useRouter();

  const [startWeightKg, setStartWeightKg] = useState(defaultStartWeightKg);
  const [currentWeightKg, setCurrentWeightKg] = useState(
    defaultCurrentWeightKg
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/trackers/weight-tracker?startWeightKg=${startWeightKg}&currentWeightKg=${currentWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput
        value={startWeightKg}
        onChange={setStartWeightKg}
      />

      <WeightKgInput
        value={currentWeightKg}
        onChange={setCurrentWeightKg}
      />

      <button type="submit">Track Weight</button>
    </form>
  );
}
