"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultLevel: "beginner" | "intermediate" | "advanced";
  defaultDurationMinutes: number;
};

export default function HomeWorkoutGeneratorForm({
  defaultLevel,
  defaultDurationMinutes,
}: Props) {
  const router = useRouter();

  const [level, setLevel] = useState(defaultLevel);
  const [durationMinutes, setDurationMinutes] = useState(
    defaultDurationMinutes
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calisthenics/home-workout-generator?level=${level}&durationMinutes=${durationMinutes}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Fitness Level</label>
        <select
          value={level}
          onChange={(e) =>
            setLevel(e.target.value as "beginner" | "intermediate" | "advanced")
          }
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label>Workout Duration (minutes)</label>
        <input
          type="number"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
        />
      </div>

      <button type="submit">Generate Workout</button>
    </form>
  );
}
