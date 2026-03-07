import type { Metadata } from "next";
import Link from "next/link";
import { predictRaceTime } from "@/lib/calculators/running/raceTime";

export const metadata: Metadata = {
  title: "Race Time Predictor — Predict Finish Time Using the Riegel Formula | Denstar Fitness",
  description: "Use our free race time predictor to estimate your finishing time for a target race distance using the Riegel formula from a recent race performance.",
  openGraph: {
    title: "Race Time Predictor — Predict Finish Time Using the Riegel Formula | Denstar Fitness",
    description: "Use our free race time predictor to estimate your finishing time for a target race distance using the Riegel formula from a recent race performance.",
    url: "https://tools.denstarfitness.com/running/race-time-predictor",
    images: [{ url: "/api/og?tool=race-time-predictor", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Race Time Predictor | Denstar Fitness",
    description: "Estimate finishing time for a target race distance using the Riegel formula.",
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
    <>
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

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How does a race time predictor work?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">race time predictor</strong> uses the Riegel formula — developed by Pete Riegel in 1977 — to project your finish time for a new distance based on a recent race result. The formula is: T₂ = T₁ × (D₂ / D₁)^1.06, where T₁ is your known time, D₁ your known distance, and D₂ your target distance. The exponent 1.06 captures the physiological cost of running longer distances at proportionally slower paces.
          </p>
          <p>
            The formula is most accurate for distances within a similar range (e.g., predicting a half marathon from a 10K) and loses accuracy when projecting across very different distances (e.g., 5K to marathon). For marathon predictions, a fatigue-adjusted version of the formula (exponent closer to 1.10–1.15) may be more realistic.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Predicted finish times from a 45-minute 10K</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Target race</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Predicted time</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Predicted pace</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["5K", "~21:20", "~4:16/km"],
                  ["10K", "45:00 (baseline)", "4:30/km"],
                  ["Half marathon", "~1:40:00", "~4:44/km"],
                  ["Marathon", "~3:30:00", "~4:58/km"],
                ].map(([race, time, pace]) => (
                  <tr key={race} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{race}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{time}</td>
                    <td className="px-4 py-3 font-mono text-zinc-500 dark:text-zinc-400">{pace}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Projections using the Riegel formula (exponent 1.06). Marathon prediction assumes adequate marathon-specific training; without it, actual time will be slower.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How accurate is the Riegel race time predictor?", a: "The Riegel formula is highly accurate for predicting times between similar distances (5K ↔ 10K, 10K ↔ half marathon) when the recent race was run at maximum effort. Accuracy decreases for very long distances (marathon) because the formula does not account for glycogen depletion, pacing strategy, or training specificity. For the marathon, add 5–10% to the predicted time unless you have done specific long-run training." },
            { q: "What race should I use as the input?", a: "Use your most recent race run at maximum effort, ideally within the past 8–12 weeks. A training run time will underestimate your fitness. A race where you ran conservatively will also underestimate. The closer the input race distance is to the target distance, the more accurate the prediction — predicting a half marathon from a 10K is more reliable than predicting it from a 5K." },
            { q: "Why is my predicted marathon time too optimistic?", a: "The Riegel formula (exponent 1.06) slightly underestimates the physiological challenge of the marathon. The glycogen wall, cumulative fatigue, and the sheer duration of the race all make marathon performance harder to predict from shorter races. Most runners find their actual marathon time is 3–8% slower than the Riegel prediction unless they have done very specific marathon training with multiple long runs over 30 km." },
          ].map(({ q, a }) => (
            <div key={q} className="space-y-1 rounded-xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-semibold text-zinc-800 dark:text-zinc-200">{q}</p>
              <p>{a}</p>
            </div>
          ))}
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Related calculators</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
              { label: "Running Splits Calculator", href: "/running/running-splits-calculator" },
              { label: "Interval Calculator", href: "/running/interval-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
