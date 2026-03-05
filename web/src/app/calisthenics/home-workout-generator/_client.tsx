"use client";

import { useState } from "react";

type Level = "beginner" | "intermediate" | "advanced";
type Focus = "full-body" | "upper" | "lower" | "core";

type Exercise = { name: string; sets: number; reps: string };

const WORKOUTS: Record<Level, Record<Focus, Exercise[]>> = {
  beginner: {
    "full-body": [
      { name: "Jumping Jacks", sets: 3, reps: "30 sec" },
      { name: "Bodyweight Squat", sets: 3, reps: "12" },
      { name: "Push-Up (on knees if needed)", sets: 3, reps: "8" },
      { name: "Glute Bridge", sets: 3, reps: "12" },
      { name: "Plank", sets: 3, reps: "20 sec" },
      { name: "Mountain Climber", sets: 2, reps: "20 sec" },
    ],
    upper: [
      { name: "Push-Up", sets: 3, reps: "8" },
      { name: "Pike Push-Up", sets: 3, reps: "8" },
      { name: "Tricep Dip (on chair)", sets: 3, reps: "10" },
      { name: "Superman Hold", sets: 3, reps: "30 sec" },
      { name: "Arm Circle", sets: 2, reps: "30 sec" },
    ],
    lower: [
      { name: "Bodyweight Squat", sets: 3, reps: "15" },
      { name: "Reverse Lunge", sets: 3, reps: "10 each leg" },
      { name: "Glute Bridge", sets: 3, reps: "15" },
      { name: "Standing Calf Raise", sets: 3, reps: "20" },
      { name: "Wall Sit", sets: 3, reps: "30 sec" },
    ],
    core: [
      { name: "Plank", sets: 3, reps: "20 sec" },
      { name: "Dead Bug", sets: 3, reps: "8 each side" },
      { name: "Bicycle Crunch", sets: 3, reps: "12 each side" },
      { name: "Reverse Crunch", sets: 3, reps: "12" },
      { name: "Superman", sets: 3, reps: "10" },
    ],
  },
  intermediate: {
    "full-body": [
      { name: "Burpee", sets: 3, reps: "10" },
      { name: "Jump Squat", sets: 3, reps: "12" },
      { name: "Push-Up", sets: 4, reps: "12" },
      { name: "Walking Lunge", sets: 3, reps: "10 each leg" },
      { name: "Plank to Down-Dog", sets: 3, reps: "10" },
      { name: "Mountain Climber", sets: 3, reps: "30 sec" },
      { name: "Hip Thrust", sets: 3, reps: "15" },
    ],
    upper: [
      { name: "Diamond Push-Up", sets: 3, reps: "10" },
      { name: "Wide Push-Up", sets: 3, reps: "12" },
      { name: "Pike Push-Up", sets: 3, reps: "10" },
      { name: "Tricep Dip (parallel)", sets: 3, reps: "12" },
      { name: "Inverted Row (under table)", sets: 3, reps: "10" },
      { name: "Shoulder Tap Plank", sets: 3, reps: "20 sec" },
    ],
    lower: [
      { name: "Bulgarian Split Squat", sets: 3, reps: "10 each leg" },
      { name: "Jump Squat", sets: 3, reps: "12" },
      { name: "Romanian Deadlift (single leg)", sets: 3, reps: "8 each leg" },
      { name: "Lateral Lunge", sets: 3, reps: "10 each side" },
      { name: "Glute Bridge March", sets: 3, reps: "10 each leg" },
      { name: "Standing Calf Raise", sets: 4, reps: "20" },
    ],
    core: [
      { name: "L-Sit Hold (on chairs)", sets: 3, reps: "10 sec" },
      { name: "Hollow Body Hold", sets: 3, reps: "20 sec" },
      { name: "Dragon Flag Negative", sets: 3, reps: "5" },
      { name: "Russian Twist", sets: 3, reps: "15 each side" },
      { name: "Side Plank", sets: 3, reps: "30 sec each side" },
      { name: "Bicycle Crunch", sets: 3, reps: "15 each side" },
    ],
  },
  advanced: {
    "full-body": [
      { name: "Burpee Pull-Up", sets: 4, reps: "8" },
      { name: "Pistol Squat", sets: 3, reps: "5 each leg" },
      { name: "Archer Push-Up", sets: 3, reps: "8 each side" },
      { name: "Jump Lunge", sets: 3, reps: "10 each leg" },
      { name: "Typewriter Push-Up", sets: 3, reps: "6 each side" },
      { name: "Tuck Planche Hold", sets: 3, reps: "5 sec" },
      { name: "V-Up", sets: 3, reps: "12" },
    ],
    upper: [
      { name: "One-Arm Push-Up Progression", sets: 3, reps: "5 each arm" },
      { name: "Archer Push-Up", sets: 3, reps: "8 each side" },
      { name: "Pseudo Planche Push-Up", sets: 3, reps: "10" },
      { name: "Pike Push-Up (elevated feet)", sets: 3, reps: "12" },
      { name: "Planche Lean Hold", sets: 3, reps: "10 sec" },
    ],
    lower: [
      { name: "Pistol Squat", sets: 4, reps: "6 each leg" },
      { name: "Jump Squat (weighted if available)", sets: 4, reps: "12" },
      { name: "Nordic Hamstring Curl", sets: 3, reps: "5" },
      { name: "Shrimp Squat", sets: 3, reps: "6 each leg" },
      { name: "Calf Raise (single leg)", sets: 4, reps: "20 each leg" },
    ],
    core: [
      { name: "Dragon Flag", sets: 3, reps: "8" },
      { name: "Human Flag Progression", sets: 3, reps: "5 sec" },
      { name: "L-Sit Hold", sets: 3, reps: "15 sec" },
      { name: "Windshield Wiper", sets: 3, reps: "8 each side" },
      { name: "Hollow Body Rock", sets: 3, reps: "30 sec" },
    ],
  },
};

const LEVEL_LABELS: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const FOCUS_LABELS: Record<Focus, string> = {
  "full-body": "Full Body",
  upper: "Upper Body",
  lower: "Lower Body",
  core: "Core",
};

export default function HomeWorkoutClientPage() {
  const [level, setLevel] = useState<Level>("beginner");
  const [focus, setFocus] = useState<Focus>("full-body");
  const [generated, setGenerated] = useState(false);

  const workout = WORKOUTS[level][focus];
  const totalSets = workout.reduce((sum, ex) => sum + ex.sets, 0);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">Home Workout Generator</h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-6">
        Generate a bodyweight workout plan based on your fitness level and target muscle group. No equipment needed.
      </p>

      <div className="rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-800 dark:bg-zinc-950/60 p-6 shadow-sm space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Fitness Level</label>
          <div className="flex gap-2">
            {(["beginner", "intermediate", "advanced"] as Level[]).map((l) => (
              <button
                key={l}
                onClick={() => { setLevel(l); setGenerated(false); }}
                className={`flex-1 rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                  level === l
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {LEVEL_LABELS[l]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Focus</label>
          <div className="flex gap-2 flex-wrap">
            {(["full-body", "upper", "lower", "core"] as Focus[]).map((f) => (
              <button
                key={f}
                onClick={() => { setFocus(f); setGenerated(false); }}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                  focus === f
                    ? "border-emerald-500 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-600"
                    : "border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300"
                }`}
              >
                {FOCUS_LABELS[f]}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => setGenerated(true)}
          className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium py-2.5 text-sm transition-colors"
        >
          Generate Workout
        </button>

        {generated && (
          <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <div className="flex justify-between items-center mb-3">
              <p className="font-semibold text-zinc-800 dark:text-zinc-200 text-sm">
                {LEVEL_LABELS[level]} · {FOCUS_LABELS[focus]}
              </p>
              <span className="text-xs text-zinc-400">{workout.length} exercises · {totalSets} total sets</span>
            </div>
            <div className="space-y-2">
              {workout.map((ex, i) => (
                <div key={i} className="flex justify-between items-center text-sm py-1.5 border-b border-zinc-50 dark:border-zinc-800/50 last:border-0">
                  <span className="text-zinc-700 dark:text-zinc-300">{ex.name}</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-xs font-medium">
                    {ex.sets} × {ex.reps}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-zinc-400">Rest 60–90 sec between sets. Warm up for 5 min before starting.</p>
          </div>
        )}
      </div>
    </div>
  );
}
