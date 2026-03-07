import type { Metadata } from "next";
import Link from "next/link";
import { planRunSplits } from "@/lib/calculators/running/splits";

export const metadata: Metadata = {
  title: "Running Splits Calculator — Per-Kilometre Split Times for Any Pace | Denstar Fitness",
  description: "Use our free running splits calculator to generate per-kilometre and per-mile split times for your target race pace and distance.",
  openGraph: {
    title: "Running Splits Calculator — Per-Kilometre Split Times for Any Pace | Denstar Fitness",
    description: "Use our free running splits calculator to generate per-kilometre and per-mile split times for your target race pace and distance.",
    url: "https://tools.denstarfitness.com/running/running-splits-calculator",
    images: [{ url: "/api/og?tool=running-splits-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Splits Calculator | Denstar Fitness",
    description: "Generate per-kilometre split times for your target race pace.",
    images: ["/api/og?tool=running-splits-calculator"],
  },
};

type ParamValue = string | string[] | null | undefined;

interface SplitsSearchParams {
  distance?: ParamValue;
  pace?: ParamValue;
}

type SplitsSearchParamsInput =
  | SplitsSearchParams
  | URLSearchParams
  | Promise<SplitsSearchParams>
  | undefined;

const toSingleValue = (value: ParamValue): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  if (typeof value === "string") return value;
  return value ?? null;
};

const parsePositiveNumber = (value: string | null): number | null => {
  if (!value) return null;
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
};

async function normalizeSearchParams(
  input: SplitsSearchParamsInput
): Promise<SplitsSearchParams> {
  if (!input) return {};
  if (input instanceof Promise) return input;
  if (input instanceof URLSearchParams) {
    return {
      distance: input.get("distance"),
      pace: input.get("pace"),
    };
  }
  return input;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: SplitsSearchParamsInput;
}) {
  const params = await normalizeSearchParams(searchParams);

  const distance = parsePositiveNumber(toSingleValue(params.distance));
  const pace = parsePositiveNumber(toSingleValue(params.pace));

  const hasValues = distance !== null && pace !== null;

  const result = hasValues ? planRunSplits(distance, pace) : null;

  return (
    <>
      <main className="space-y-10">
        <div className="space-y-3">
          <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
            Running
          </div>

          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Running Splits Calculator
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Generate cumulative kilometer splits based on your target running pace.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <form
            method="GET"
            className="space-y-5 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Distance
                </span>
                <input
                  type="number"
                  name="distance"
                  step="0.1"
                  min="0.1"
                  defaultValue={distance ?? ""}
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-white"
                  placeholder="10"
                  required
                />
                <p className="text-xs text-zinc-500">Kilometers</p>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Pace
                </span>
                <input
                  type="number"
                  name="pace"
                  step="0.01"
                  min="1"
                  defaultValue={pace ?? ""}
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-white"
                  placeholder="5.0"
                  required
                />
                <p className="text-xs text-zinc-500">Minutes per km</p>
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              Generate splits
            </button>

            <p className="text-sm text-zinc-500">
              Example: 4 minutes 30 seconds → enter <strong>4.5</strong>
            </p>
          </form>

          <div className="space-y-4 rounded-2xl border bg-white/70 p-6 shadow-lg dark:bg-zinc-950/60">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Results
            </h2>

            {!result && (
              <p className="text-sm text-zinc-500">
                Enter distance and pace to generate splits.
              </p>
            )}

            {result && (
              <>
                <div className="rounded border p-4 text-sm">
                  <p>
                    <strong>Total Time:</strong> {result.formatted}
                  </p>
                </div>

                <ul className="space-y-2 text-sm">
                  {result.splits.map((split, index) => (
                    <li
                      key={index}
                      className="flex justify-between rounded border px-3 py-2"
                    >
                      <span>Split {index + 1}</span>
                      <span className="font-medium">{split}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </main>

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a running splits calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">running splits calculator</strong> takes your target pace and total distance and generates the cumulative time at each kilometre (or mile) mark. Race officials use split times to measure runners at intermediate checkpoints; athletes use projected splits to set their pacing strategy before a race and track whether they are on course during it.
          </p>
          <p>
            Even-split running — maintaining the same pace per kilometre throughout — is the most efficient pacing strategy for most runners. A slight negative split (running the second half slightly faster) is associated with the best performances at the marathon distance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Target splits for common race distances</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Race</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal time</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Required pace</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">5K split</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["5K", "25:00", "5:00/km", "25:00"],
                  ["10K", "50:00", "5:00/km", "25:00"],
                  ["Half marathon", "1:45:00", "4:59/km", "24:55"],
                  ["Marathon", "3:30:00", "4:58/km", "24:50"],
                ].map(([race, goal, pace, split]) => (
                  <tr key={race} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{race}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{pace}</td>
                    <td className="px-4 py-3 font-mono text-zinc-500 dark:text-zinc-400">{split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is a negative split in running?", a: "A negative split means running the second half of a race faster than the first half. It is associated with better performance because it avoids early glycogen depletion and the 'wall' phenomenon in longer races. For a 10K, a negative split might mean running the first 5K in 26 minutes and the second in 24 minutes. For most recreational runners, an even split is a more realistic target." },
            { q: "How do I use splits to pace a race?", a: "Print your target splits and wear them on your wrist or memorise the key checkpoints. For a 10K at 5:00/km pace, you should pass the 5K mark at 25:00 and the 8K mark at 40:00. If you reach 5K in 23:30, you are running too fast and should slow down — early excess speed is the single most common cause of race implosion, particularly at the marathon." },
            { q: "Why do my splits vary even when I try to run even pace?", a: "Terrain, wind, elevation, and fatigue all affect split times regardless of effort level. Running by perceived effort (or heart rate) rather than GPS pace on hilly or windy courses often produces more evenly-distributed physiological output, even if the km splits look variable. For flat road races, GPS pace is a reliable guide." },
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
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
              { label: "Split Calculator", href: "/running/split-calculator" },
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
