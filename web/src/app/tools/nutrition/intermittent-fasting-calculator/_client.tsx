"use client";

import { useSearchParams } from "next/navigation";
import { calculator } from "@/lib/calculators/nutrition/intermittent-fasting-calculator";
import type { Input } from "@/lib/calculators/nutrition/intermittent-fasting-calculator";

const PROTOCOLS: { label: string; value: Input["protocol"] }[] = [
  { label: "16:8", value: "16:8" },
  { label: "18:6", value: "18:6" },
  { label: "20:4", value: "20:4" },
  { label: "OMAD (23:1)", value: "omad" },
];

export default function IntermittentFastingClientPage() {
  const searchParams = useSearchParams();

  const protocol = searchParams.get("protocol") as Input["protocol"] | null;
  const caloriesRaw = searchParams.get("dailyCalories");
  const mealsRaw = searchParams.get("meals");

  const dailyCalories = caloriesRaw ? Number(caloriesRaw) : null;
  const meals = mealsRaw ? Number(mealsRaw) : null;

  const result =
    protocol && dailyCalories && meals && dailyCalories > 0 && meals >= 1
      ? calculator({ protocol, dailyCalories, meals })
      : null;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Intermittent Fasting Calculator</h1>
        <p className="text-zinc-600 dark:text-zinc-400">Plan your eating window and calories per meal.</p>
      </header>

      <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div>
          <label className="block text-sm font-medium mb-1">Fasting Protocol</label>
          <select name="protocol" defaultValue={protocol ?? ""} required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900">
            <option value="">Select…</option>
            {PROTOCOLS.map((p) => (
              <option key={p.value} value={p.value}>{p.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Daily Calories (kcal)</label>
          <input name="dailyCalories" type="number" min="500" defaultValue={caloriesRaw ?? ""} placeholder="2000" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Meals in Eating Window</label>
          <input name="meals" type="number" min="1" defaultValue={mealsRaw ?? ""} placeholder="2" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          Calculate
        </button>
      </form>

      <div className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 min-h-[60px] flex items-center">
        {result ? (
          <div className="text-sm space-y-1">
            <p><strong>Fasting window:</strong> {result.fastingHours} hours</p>
            <p><strong>Eating window:</strong> {result.eatingHours} hours</p>
            <p><strong>Calories per meal:</strong> {result.caloriesPerMeal} kcal</p>
          </div>
        ) : (
          <p className="text-zinc-400 dark:text-zinc-500">Select a protocol and enter your calories above.</p>
        )}
      </div>
    </div>
  );
}
