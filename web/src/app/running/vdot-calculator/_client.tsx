"use client";

import { useSearchParams } from "next/navigation";
import { calculator } from "@/lib/calculators/running/vdot-calculator";

function formatTime(minutes: number): string {
  const h = Math.floor(minutes / 60);
  const m = Math.floor(minutes % 60);
  const s = Math.round((minutes - Math.floor(minutes)) * 60);
  return h > 0
    ? `${h}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
    : `${m}:${s.toString().padStart(2, "0")}`;
}

export default function VdotClientPage() {
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
        <h1 className="text-3xl font-semibold">VDOT Calculator</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Estimate your VDOT score and predicted race times from a recent performance.
        </p>
      </header>

      <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div>
          <label className="block text-sm font-medium mb-1">Distance (km)</label>
          <input
            name="distance"
            type="number"
            step="0.1"
            min="0.1"
            defaultValue={distanceRaw ?? ""}
            placeholder="10"
            required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Time (minutes)</label>
          <input
            name="time"
            type="number"
            step="1"
            min="1"
            defaultValue={timeRaw ?? ""}
            placeholder="45"
            required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900"
          />
        </div>
        <button type="submit" className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
          Calculate VDOT
        </button>
      </form>

      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 min-h-[80px]">
        {result ? (
          <div className="space-y-2 text-sm">
            <p><strong>VDOT:</strong> {result.vdot}</p>
            <div>
              <strong>Predicted Race Times</strong>
              <ul className="list-disc list-inside mt-1 text-zinc-600 dark:text-zinc-400">
                <li>5K: {formatTime(result.fiveKMinutes)}</li>
                <li>10K: {formatTime(result.tenKMinutes)}</li>
                <li>Half Marathon: {formatTime(result.halfMarathonMinutes)}</li>
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-zinc-400 dark:text-zinc-500">Enter distance and time to see your VDOT score.</p>
        )}
      </div>
    </div>
  );
}
