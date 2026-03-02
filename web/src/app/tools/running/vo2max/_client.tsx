"use client";

import { useSearchParams } from "next/navigation";
import { calculator } from "@/lib/calculators/running/vo2max-calculator";

export default function VO2MaxClientPage() {
  const searchParams = useSearchParams();

  const distanceRaw = searchParams.get("distance");
  const timeRaw = searchParams.get("time");

  const distance = distanceRaw ? Number(distanceRaw) : null;
  const time = timeRaw ? Number(timeRaw) : null;

  const result =
    distance && time && distance > 0 && time > 0
      ? calculator({ distanceKm: distance, timeMinutes: time })
      : null;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Running VO2 Max</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Estimate your VO2 max from distance and time.
        </p>
      </header>

      <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div>
          <label className="block text-sm font-medium mb-1">Distance (km)</label>
          <input name="distance" type="number" step="0.1" min="0.1" defaultValue={distanceRaw ?? ""} placeholder="5" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time (minutes)</label>
          <input name="time" type="number" step="1" min="1" defaultValue={timeRaw ?? ""} placeholder="25" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          Estimate VO2 Max
        </button>
      </form>

      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 min-h-[80px]">
        {result ? (
          <div className="space-y-1 text-sm">
            <p><strong>VO2 Max:</strong> {result.vo2max} mL/kg/min</p>
            <p><strong>Speed:</strong> {result.speedKmh} km/h</p>
            <p><strong>Category:</strong> {result.category}</p>
          </div>
        ) : (
          <p className="text-zinc-400 dark:text-zinc-500">Enter distance and time above.</p>
        )}
      </div>
    </div>
  );
}
