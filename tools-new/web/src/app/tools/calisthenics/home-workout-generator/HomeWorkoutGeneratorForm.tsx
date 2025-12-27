// src/app/tools/calisthenics/home-workout-generator/HomeWorkoutGeneratorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import TimeMinutesInput from "@/components/inputs/TimeMinutesInput";

type Props = {
  defaultLevel: "beginner" | "intermediate" | "advanced";
  defaultDurationMinutes: number;
};

export default function HomeWorkoutGeneratorForm({
  defaultLevel,
  defaultDurationMinutes,
}: Props) {
  const router = useRouter();

  const [level, setLevel] = useState<
    "beginner" | "intermediate" | "advanced"
  >(defaultLevel);

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
        <label className="block text-sm font-medium">
          Fitness Level
        </label>
        <select
          className="w-full rounded border px-2 py-1"
          value={level}
          onChange={(e) =>
            setLevel(
              e.target.value as "beginner" | "intermediate" | "advanced"
            )
          }
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <TimeMinutesInput
        value={durationMinutes}
        onChange={setDurationMinutes}
      />

      <button type="submit">Generate Workout</button>
    </form>
  );
}
