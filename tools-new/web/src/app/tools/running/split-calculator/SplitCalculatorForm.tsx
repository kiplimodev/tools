"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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

  const [distanceMeters, setDistanceMeters] = useState(
    defaultDistanceMeters
  );
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
      <div>
        <label>Total Distance (meters)</label>
        <input
          type="number"
          value={distanceMeters}
          onChange={(e) => setDistanceMeters(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Total Time (seconds)</label>
        <input
          type="number"
          value={timeSeconds}
          onChange={(e) => setTimeSeconds(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Split Length (meters)</label>
        <input
          type="number"
          value={splitMeters}
          onChange={(e) => setSplitMeters(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
