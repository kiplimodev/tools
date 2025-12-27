"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Goal = "strength" | "hypertrophy" | "endurance";
type Level = "beginner" | "intermediate" | "advanced";

type Props = {
  defaultGoal: Goal;
  defaultLevel: Level;
};

export default function WorkoutGeneratorForm({
  defaultGoal,
  defaultLevel,
}: Props) {
  const router = useRouter();

  const [goal, setGoal] = useState<Goal>(defaultGoal);
  const [level, setLevel] = useState<Level>(defaultLevel);

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
          onChange={(e) => setGoal(e.target.value as Goal)}
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
          onChange={(e) => setLevel(e.target.value as Level)}
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
