"use client";

import { useSearchParams } from "next/navigation";
import { calculator } from "@/lib/calculators/nutrition/creatine-calculator";

export default function CreatineClientPage() {
  const searchParams = useSearchParams();

  const weightRaw = searchParams.get("weight");
  const protocol = searchParams.get("protocol") as "maintenance" | "loading" | null;

  const weight = weightRaw ? Number(weightRaw) : null;

  const result =
    weight && weight > 0 && protocol
      ? calculator({ weight, protocol })
      : null;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Creatine Calculator</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Calculate your daily creatine intake based on body weight and protocol.
        </p>
      </header>

      <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div>
          <label className="block text-sm font-medium mb-1">Body Weight (kg)</label>
          <input name="weight" type="number" min="1" defaultValue={weightRaw ?? ""} placeholder="80" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Protocol</label>
          <select name="protocol" defaultValue={protocol ?? ""} required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
            <option value="">Select…</option>
            <option value="maintenance">Maintenance (recommended)</option>
            <option value="loading">Loading phase</option>
          </select>
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          Calculate
        </button>
      </form>

      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 min-h-[60px]">
        {result ? (
          <ul className="text-sm space-y-1">
            <li><strong>Daily dose:</strong> {result.dailyDose} g</li>
            {result.loadingDose !== null && (
              <li><strong>Loading dose:</strong> {result.loadingDose} g / day for 5–7 days</li>
            )}
          </ul>
        ) : (
          <p className="text-zinc-400 dark:text-zinc-500">Enter your weight and protocol above.</p>
        )}
      </div>
    </div>
  );
}
