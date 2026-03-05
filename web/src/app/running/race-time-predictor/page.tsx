import type { Metadata } from "next";
import { predictRaceTime } from "@/lib/calculators/running/raceTime";

export const metadata: Metadata = {
  title: "Race Time Predictor | Denstar Fitness",
  description: "Estimate finishing time for a target distance using the Riegel formula.",
  openGraph: {
    title: "Race Time Predictor | Denstar Fitness",
    description: "Estimate finishing time for a target distance using the Riegel formula.",
    url: "https://tools.denstarfitness.com/tools/running/race-time-predictor",
    images: [{ url: "/api/og?tool=race-time-predictor", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race Time Predictor | Denstar Fitness",
    description: "Estimate finishing time for a target distance using the Riegel formula.",
    images: ["/api/og?tool=race-time-predictor"],
  },
};

type SearchParams = Promise<{ distance?: string; time?: string; target?: string }>;

export default async function Page({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;

  const distance = params.distance ? Number(params.distance) : null;
  const time = params.time ? Number(params.time) : null;
  const target = params.target ? Number(params.target) : null;

  const result =
    distance && time && target &&
    distance > 0 && time > 0 && target > 0
      ? predictRaceTime(distance, time, target)
      : null;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-semibold">Race Time Predictor</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          Project your finish time for a new race based on a recent performance.
        </p>
      </header>

      <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 dark:border-zinc-800 dark:bg-zinc-950/60">
        <div>
          <label className="block text-sm font-medium mb-1">Recent distance (km)</label>
          <input name="distance" type="number" step="0.01" min="0.1" defaultValue={params.distance ?? ""} placeholder="10" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Recent time (minutes)</label>
          <input name="time" type="number" step="0.1" min="1" defaultValue={params.time ?? ""} placeholder="50" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Target distance (km)</label>
          <input name="target" type="number" step="0.01" min="0.1" defaultValue={params.target ?? ""} placeholder="21.1" required
            className="w-full border border-zinc-200 rounded-lg px-3 py-2 dark:border-zinc-700 dark:bg-zinc-900" />
        </div>
        <button type="submit" className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50">
          Predict race time
        </button>
      </form>

      <div className="grid gap-4 sm:grid-cols-2 rounded-xl border border-zinc-200 p-4 dark:border-zinc-800 min-h-[80px]">
        {result ? (
          <>
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Projected finish</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result.formatted}</p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Average pace</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result.pacePerKm}</p>
            </div>
          </>
        ) : (
          <p className="text-zinc-400 dark:text-zinc-500 col-span-2">Enter your last race details to project the next one.</p>
        )}
      </div>
    </div>
  );
}
