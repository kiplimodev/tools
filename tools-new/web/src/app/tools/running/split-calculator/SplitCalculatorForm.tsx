"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultDistanceMeters: number;
  defaultTimeSeconds: number;
  defaultSplitMeters: number;
};

export default function SplitCalculatorForm({
  defaultDistanceMeters,
  defaultTimeSeconds,
  defaultSplitMeters,
}: Props) {
  const router = useRouter();

  const [distanceMeters, setDistanceMeters] = useState(defaultDistanceMeters);
  const [timeSeconds, setTimeSeconds] = useState(defaultTimeSeconds);
  const [splitMeters, setSplitMeters] = useState(defaultSplitMeters);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/split-calculator?distanceMeters=${distanceMeters}&timeSeconds=${timeSeconds}&splitMeters=${splitMeters}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Total Distance (meters)"
        value={distanceMeters}
        onChange={setDistanceMeters}
        min={1}
      />

      <NumberInput
        label="Total Time (seconds)"
        value={timeSeconds}
        onChange={setTimeSeconds}
        min={1}
      />

      <NumberInput
        label="Split Length (meters)"
        value={splitMeters}
        onChange={setSplitMeters}
        min={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
