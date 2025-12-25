// tools-new/web/src/app/tools/calories/treadmill-calorie-calculator/TreadmillCaloriesForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <div>
        <label>Body Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Speed (km/h)</label>
        <input
          type="number"
          value={speedKmh}
          onChange={(e) => setSpeedKmh(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
