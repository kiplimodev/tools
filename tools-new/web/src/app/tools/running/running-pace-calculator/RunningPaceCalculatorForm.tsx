// src/app/tools/running/running-pace-calculator/RunningPaceCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <div>
        <label>Distance (km)</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Time (minutes)</label>
        <input
          type="number"
          value={timeMinutes}
          onChange={(e) => setTimeMinutes(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
