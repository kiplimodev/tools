"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultDistanceMeters: number;
  defaultTimeSeconds: number;
};

export default function VdotCalculatorForm({
  defaultDistanceMeters,
  defaultTimeSeconds,
}: Props) {
  const router = useRouter();

  const [distanceMeters, setDistanceMeters] = useState(
    defaultDistanceMeters
  );
  const [timeSeconds, setTimeSeconds] = useState(defaultTimeSeconds);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/vdot-calculator?distanceMeters=${distanceMeters}&timeSeconds=${timeSeconds}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Distance (meters)"
        value={distanceMeters}
        onChange={setDistanceMeters}
        min={100}
        step={100}
      />

      <NumberInput
        label="Time (seconds)"
        value={timeSeconds}
        onChange={setTimeSeconds}
        min={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
