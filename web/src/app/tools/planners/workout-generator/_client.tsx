"use client";

import { useState } from "react";

type Goal = "strength" | "hypertrophy" | "endurance";
type Days = 3 | 4 | 5 | 6;

type DayPlan = { day: string; focus: string; exercises: { name: string; sets: number; reps: string }[] };

function generatePlan(days: Days, goal: Goal): DayPlan[] {
  const setsReps: Record<Goal, { sets: number; reps: string }> = {
    strength: { sets: 4, reps: "3–5" },
    hypertrophy: { sets: 3, reps: "8–12" },
    endurance: { sets: 2, reps: "15–20" },
  };
  const { sets, reps } = setsReps[goal];

  const plans: Record<Days, DayPlan[]> = {
    3: [
      {
        day: "Day 1", focus: "Push (Chest, Shoulders, Triceps)",
        exercises: [
          { name: "Bench Press", sets, reps },
          { name: "Overhead Press", sets, reps },
          { name: "Incline Dumbbell Press", sets, reps },
          { name: "Lateral Raise", sets: 3, reps: "12–15" },
          { name: "Tricep Pushdown", sets: 3, reps: "10–12" },
        ],
      },
      {
        day: "Day 2", focus: "Pull (Back, Biceps)",
        exercises: [
          { name: "Deadlift", sets, reps },
          { name: "Barbell Row", sets, reps },
          { name: "Lat Pulldown", sets, reps },
          { name: "Face Pull", sets: 3, reps: "15" },
          { name: "Barbell Curl", sets: 3, reps: "10–12" },
        ],
      },
      {
        day: "Day 3", focus: "Legs (Quads, Hamstrings, Glutes, Calves)",
        exercises: [
          { name: "Squat", sets, reps },
          { name: "Romanian Deadlift", sets, reps },
          { name: "Leg Press", sets, reps },
          { name: "Leg Curl", sets: 3, reps: "10–12" },
          { name: "Calf Raise", sets: 4, reps: "15–20" },
        ],
      },
    ],
    4: [
      {
        day: "Day 1", focus: "Upper Body (Push)",
        exercises: [
          { name: "Bench Press", sets, reps },
          { name: "Overhead Press", sets, reps },
          { name: "Cable Fly", sets: 3, reps: "12" },
          { name: "Tricep Dip", sets: 3, reps: "10" },
          { name: "Lateral Raise", sets: 3, reps: "15" },
        ],
      },
      {
        day: "Day 2", focus: "Lower Body (Quad-dominant)",
        exercises: [
          { name: "Squat", sets, reps },
          { name: "Leg Press", sets, reps },
          { name: "Walking Lunge", sets: 3, reps: "10 each leg" },
          { name: "Leg Extension", sets: 3, reps: "12–15" },
          { name: "Calf Raise", sets: 4, reps: "20" },
        ],
      },
      {
        day: "Day 3", focus: "Upper Body (Pull)",
        exercises: [
          { name: "Deadlift", sets, reps },
          { name: "Pull-Up / Lat Pulldown", sets, reps },
          { name: "Seated Cable Row", sets, reps },
          { name: "Rear Delt Fly", sets: 3, reps: "15" },
          { name: "Hammer Curl", sets: 3, reps: "10–12" },
        ],
      },
      {
        day: "Day 4", focus: "Lower Body (Hip-dominant)",
        exercises: [
          { name: "Romanian Deadlift", sets, reps },
          { name: "Hip Thrust", sets, reps },
          { name: "Leg Curl", sets: 3, reps: "12" },
          { name: "Bulgarian Split Squat", sets: 3, reps: "8 each leg" },
          { name: "Calf Raise (seated)", sets: 4, reps: "20" },
        ],
      },
    ],
    5: [
      {
        day: "Day 1", focus: "Chest & Triceps",
        exercises: [
          { name: "Bench Press", sets, reps },
          { name: "Incline Dumbbell Press", sets, reps },
          { name: "Cable Fly", sets: 3, reps: "12–15" },
          { name: "Close-Grip Bench Press", sets: 3, reps: "8–10" },
          { name: "Tricep Pushdown", sets: 3, reps: "12" },
        ],
      },
      {
        day: "Day 2", focus: "Back & Biceps",
        exercises: [
          { name: "Deadlift", sets, reps },
          { name: "Pull-Up / Lat Pulldown", sets, reps },
          { name: "Barbell Row", sets, reps },
          { name: "Cable Row", sets: 3, reps: "12" },
          { name: "Barbell Curl", sets: 3, reps: "10" },
        ],
      },
      {
        day: "Day 3", focus: "Legs",
        exercises: [
          { name: "Squat", sets, reps },
          { name: "Romanian Deadlift", sets, reps },
          { name: "Leg Press", sets: 3, reps: "12" },
          { name: "Leg Curl", sets: 3, reps: "12" },
          { name: "Calf Raise", sets: 4, reps: "20" },
        ],
      },
      {
        day: "Day 4", focus: "Shoulders & Traps",
        exercises: [
          { name: "Overhead Press", sets, reps },
          { name: "Lateral Raise", sets: 4, reps: "15" },
          { name: "Front Raise", sets: 3, reps: "12" },
          { name: "Rear Delt Fly", sets: 3, reps: "15" },
          { name: "Barbell Shrug", sets: 4, reps: "15" },
        ],
      },
      {
        day: "Day 5", focus: "Arms & Abs",
        exercises: [
          { name: "EZ Bar Curl", sets: 4, reps: "10" },
          { name: "Hammer Curl", sets: 3, reps: "10" },
          { name: "Skull Crusher", sets: 4, reps: "10" },
          { name: "Tricep Overhead Extension", sets: 3, reps: "12" },
          { name: "Cable Crunch", sets: 3, reps: "15" },
        ],
      },
    ],
    6: [
      {
        day: "Day 1", focus: "Chest",
        exercises: [
          { name: "Bench Press", sets, reps },
          { name: "Incline Dumbbell Press", sets, reps },
          { name: "Decline Press", sets: 3, reps: "10" },
          { name: "Cable Fly", sets: 3, reps: "12" },
          { name: "Dumbbell Pullover", sets: 3, reps: "12" },
        ],
      },
      {
        day: "Day 2", focus: "Back",
        exercises: [
          { name: "Deadlift", sets, reps },
          { name: "Barbell Row", sets, reps },
          { name: "Pull-Up / Lat Pulldown", sets, reps },
          { name: "Seated Cable Row", sets: 3, reps: "12" },
          { name: "Straight-Arm Pulldown", sets: 3, reps: "15" },
        ],
      },
      {
        day: "Day 3", focus: "Shoulders",
        exercises: [
          { name: "Overhead Press", sets, reps },
          { name: "Arnold Press", sets: 3, reps: "10" },
          { name: "Lateral Raise", sets: 4, reps: "15" },
          { name: "Rear Delt Fly", sets: 4, reps: "15" },
          { name: "Barbell Shrug", sets: 4, reps: "15" },
        ],
      },
      {
        day: "Day 4", focus: "Legs",
        exercises: [
          { name: "Squat", sets, reps },
          { name: "Leg Press", sets, reps },
          { name: "Romanian Deadlift", sets, reps },
          { name: "Leg Curl", sets: 3, reps: "12" },
          { name: "Calf Raise", sets: 5, reps: "20" },
        ],
      },
      {
        day: "Day 5", focus: "Arms",
        exercises: [
          { name: "EZ Bar Curl", sets: 4, reps: "10" },
          { name: "Incline Dumbbell Curl", sets: 3, reps: "10" },
          { name: "Concentration Curl", sets: 3, reps: "12" },
          { name: "Skull Crusher", sets: 4, reps: "10" },
          { name: "Overhead Extension", sets: 3, reps: "12" },
        ],
      },
      {
        day: "Day 6", focus: "Glutes & Abs",
        exercises: [
          { name: "Hip Thrust", sets: 4, reps: "12" },
          { name: "Bulgarian Split Squat", sets: 3, reps: "10 each leg" },
          { name: "Cable Kickback", sets: 3, reps: "15 each leg" },
          { name: "Cable Crunch", sets: 3, reps: "15" },
          { name: "Hanging Leg Raise", sets: 3, reps: "12" },
        ],
      },
    ],
  };

  return plans[days];
}

const GOAL_LABELS: Record<Goal, string> = {
  strength: "Strength (3–5 reps)",
  hypertrophy: "Hypertrophy (8–12 reps)",
  endurance: "Muscular Endurance (15–20 reps)",
};

export default function WorkoutGeneratorClientPage() {
  const [days, setDays] = useState<Days>(4);
  const [goal, setGoal] = useState<Goal>("hypertrophy");
  const [generated, setGenerated] = useState(false);

  const plan = generatePlan(days, goal);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Workout Generator</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Generate a goal-based weekly gym workout plan. Select your training days per week and your primary goal.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-5">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Days per week
          </label>
          <div className="flex gap-2">
            {([3, 4, 5, 6] as Days[]).map((d) => (
              <button
                key={d}
                onClick={() => { setDays(d); setGenerated(false); }}
                className={`flex-1 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  days === d
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
            Training goal
          </label>
          <div className="flex flex-col gap-2">
            {(["strength", "hypertrophy", "endurance"] as Goal[]).map((g) => (
              <button
                key={g}
                onClick={() => { setGoal(g); setGenerated(false); }}
                className={`rounded-lg border px-4 py-2 text-sm text-left transition-colors ${
                  goal === g
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {GOAL_LABELS[g]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setGenerated(true)}
          className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 text-sm transition-colors"
        >
          Generate {days}-Day Plan
        </button>

        {generated && (
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 space-y-4">
            {plan.map((dayPlan) => (
              <div key={dayPlan.day}>
                <div className="flex items-baseline justify-between mb-2">
                  <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{dayPlan.day}</p>
                  <p className="text-xs text-zinc-400">{dayPlan.focus}</p>
                </div>
                <div className="space-y-1">
                  {dayPlan.exercises.map((ex, i) => (
                    <div key={i} className="flex justify-between items-center text-sm py-1 border-b border-zinc-50 dark:border-zinc-800/50 last:border-0">
                      <span className="text-zinc-700 dark:text-zinc-300">{ex.name}</span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs">{ex.sets} × {ex.reps}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="text-xs text-zinc-400 mt-2">Rest at least one day between sessions. Adjust weights progressively each week.</p>
          </div>
        )}
      </div>
    </div>
  );
}
