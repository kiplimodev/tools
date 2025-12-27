"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import WeightKgInput from "@/components/inputs/WeightKgInput";
import NumberInput from "@/components/inputs/NumberInput";
import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";

type Props = {
  defaultWeightKg: number;
  defaultSpeedKmh: number;
  defaultDurationMinutes: number;
};

export default function TreadmillCaloriesForm({
  defaultWeightKg,
  defaultSpeedKmh,
  defaultDurationMinutes,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [speedKmh, setSpeedKmh] = useState(defaultSpeedKmh);
  const [durationMinutes, setDurationMinutes] = useState(
    defaultDurationMinutes
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/treadmill-calorie-calculator?weightKg=${weightKg}&speedKmh=${speedKmh}&durationMinutes=${durationMinutes}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <WeightKgInput
        value={weightKg}
        onChange={setWeightKg}
      />

      <NumberInput
        label="Speed (km/h)"
        value={speedKmh}
        onChange={setSpeedKmh}
        min={0}
        step={0.1}
      />

      <TimeMinutesInput
        value={durationMinutes}
        onChange={setDurationMinutes}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
