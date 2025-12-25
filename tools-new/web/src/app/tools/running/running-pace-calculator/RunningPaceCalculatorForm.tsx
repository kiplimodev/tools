// src/app/tools/running/running-pace-calculator/RunningPaceCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import DistanceKmInput from "@/components/inputs/DistanceKmInput";
import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";

type Props = {
  defaultDistance: number;
  defaultTimeMinutes: number;
};

export default function RunningPaceCalculatorForm({
  defaultDistance,
  defaultTimeMinutes,
}: Props) {
  const router = useRouter();

  const [distance, setDistance] = useState(defaultDistance);
  const [timeMinutes, setTimeMinutes] = useState(defaultTimeMinutes);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/running-pace-calculator?distance=${distance}&timeMinutes=${timeMinutes}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <DistanceKmInput
        value={distance}
        onChange={setDistance}
      />

      <TimeMinutesInput
        value={timeMinutes}
        onChange={setTimeMinutes}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
