// src/app/tools/planners/workout-generator/WorkoutGeneratorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultGoal: "strength" | "hypertrophy" | "endurance";
  defaultLevel: "beginner" | "intermediate" | "advanced";
};

export default function WorkoutGeneratorForm({
  defaultGoal,
  defaultLevel,
}: Props) {
  const router = useRouter();

  const [goal, setGoal] = useState(defaultGoal);
  const [level, setLevel] = useState(defaultLevel);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/planners/workout-generator?goal=${goal}&level=${level}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Training Goal</label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value as Props["defaultGoal"])}
        >
          <option value="strength">Strength</option>
          <option value="hypertrophy">Hypertrophy</option>
          <option value="endurance">Endurance</option>
        </select>
      </div>

      <div>
        <label>Experience Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as Props["defaultLevel"])}
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <button type="submit">Generate Workout</button>
    </form>
  );
}
