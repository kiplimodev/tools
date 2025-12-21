"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultDistanceMeters: number;
  defaultTimeSeconds: number;
};

export default function VdotCalculatorForm({
  defaultDistanceMeters,
  defaultTimeSeconds,
}: Props) {
  const router = useRouter();

  const [distanceMeters, setDistanceMeters] = useState(defaultDistanceMeters);
  const [timeSeconds, setTimeSeconds] = useState(defaultTimeSeconds);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/running/vdot-calculator?distanceMeters=${distanceMeters}&timeSeconds=${timeSeconds}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Distance (meters)</label>
        <input
          type="number"
          value={distanceMeters}
          onChange={(e) => setDistanceMeters(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Time (seconds)</label>
        <input
          type="number"
          value={timeSeconds}
          onChange={(e) => setTimeSeconds(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
