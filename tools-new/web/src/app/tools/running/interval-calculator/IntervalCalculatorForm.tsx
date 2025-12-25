"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";
import RepsInput from "@/components/inputs/RepsInput";

type Props = {
  defaultRunSeconds: number;
  defaultRestSeconds: number;
  defaultRepeats: number;
};

export default function IntervalCalculatorForm({
  defaultRunSeconds,
  defaultRestSeconds,
  defaultRepeats,
}: Props) {
  const router = useRouter();

  const [runSeconds, setRunSeconds] = useState(defaultRunSeconds);
  const [restSeconds, setRestSeconds] = useState(defaultRestSeconds);
  const [repeats, setRepeats] = useState(defaultRepeats);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/interval-calculator?runSeconds=${runSeconds}&restSeconds=${restSeconds}&repeats=${repeats}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Run Interval (seconds)"
        value={runSeconds}
        onChange={setRunSeconds}
        min={1}
      />

      <NumberInput
        label="Rest Interval (seconds)"
        value={restSeconds}
        onChange={setRestSeconds}
        min={0}
      />

      <RepsInput
        value={repeats}
        onChange={setRepeats}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
