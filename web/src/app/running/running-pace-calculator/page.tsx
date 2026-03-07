import type { Metadata } from "next";
import Link from "next/link";
import { calculator } from "@/lib/calculators/running/running-pace-calculator";

function formatPace(secondsPerKm: number): string {
  const minutes = Math.floor(secondsPerKm / 60);
  const seconds = Math.round(secondsPerKm % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")} /km`;
}

export const metadata: Metadata = {
  title: "Running Pace Calculator — Pace, Speed & Finish Time for Any Distance | Denstar Fitness",
  description: "Use our free running pace calculator to convert race distance and time into pace per kilometer, speed in km/h, and finish time for any running distance.",
  openGraph: {
    title: "Running Pace Calculator — Pace, Speed & Finish Time for Any Distance | Denstar Fitness",
    description: "Use our free running pace calculator to convert race distance and time into pace per kilometer, speed in km/h, and finish time for any running distance.",
    url: "https://tools.denstarfitness.com/running/running-pace-calculator",
    images: [{ url: "/api/og?tool=running-pace-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Pace Calculator | Denstar Fitness",
    description: "Convert race distance and time into pace per kilometer and speed.",
    images: ["/api/og?tool=running-pace-calculator"],
  },
};

type ParamValue = string | string[] | null | undefined;

interface PaceSearchParams {
  distance?: ParamValue;
  time?: ParamValue;
}

type PaceSearchParamsInput =
  | PaceSearchParams
  | URLSearchParams
  | Promise<PaceSearchParams>
  | undefined;

const toSingleValue = (value: ParamValue): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  if (typeof value === "string") return value;
  return value ?? null;
};

const parsePositiveNumber = (value: string | null): number | null => {
  if (!value) return null;
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue) || numericValue <= 0) return null;
  return numericValue;
};

async function normalizeSearchParams(
  input: PaceSearchParamsInput
): Promise<PaceSearchParams> {
  if (!input) return {};
  if (input instanceof Promise) return input;
  if (input instanceof URLSearchParams) {
    return {
      distance: input.get("distance"),
      time: input.get("time"),
    };
  }
  return input;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: PaceSearchParamsInput;
}) {
  const params = await normalizeSearchParams(searchParams);

  const distance = parsePositiveNumber(
    toSingleValue(params.distance)
  );
  const time = parsePositiveNumber(
    toSingleValue(params.time)
  );

  const hasValues = distance !== null && time !== null;

  const result = hasValues
    ? calculator({
        distance,
        distanceUnit: "km",
        timeSeconds: time * 60,
      })
    : null;

  return (
    <>
      <main className="space-y-10">
        <div className="space-y-3">
          <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
            Running
          </div>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Running Pace Calculator
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Convert race distance and time into pace per kilometer.
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
                  step="0.01"
                  name="distance"
                  min="0.1"
                  defaultValue={distance ?? ""}
                  placeholder="10"
                  required
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-50 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/40"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Kilometers
                </p>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Time
                </span>
                <input
                  type="number"
                  step="0.1"
                  name="time"
                  min="1"
                  defaultValue={time ?? ""}
                  placeholder="50"
                  required
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner transition focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-50 dark:focus:border-emerald-400 dark:focus:ring-emerald-500/40"
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Minutes
                </p>
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Calculate pace
            </button>
          </form>

          <div className="space-y-4 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Result
            </h2>

            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                Pace
              </p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
                {result !== null ? formatPace(result) : "—"}
              </p>
            </div>

            {!result && (
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Enter a distance and time to calculate your pace.
              </p>
            )}
          </div>
        </div>
      </main>

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a running pace calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">running pace calculator</strong> converts your total race distance and finish time into pace per kilometer (or mile), and can also solve for finish time given a target pace or for distance given time and pace. Pace is the fundamental metric for planning training loads, comparing runs of different distances, and setting race goals.
          </p>
          <p>
            Pace (min/km) = Total time (minutes) ÷ Distance (km). A runner completing 10 km in 50 minutes runs at exactly 5:00 min/km.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Common race distances and pace benchmarks</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Distance</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Beginner finish</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intermediate</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["5K", "35–45 min (7–9 min/km)", "25–35 min (5–7 min/km)", "Under 25 min (< 5 min/km)"],
                  ["10K", "70–90 min", "50–70 min", "Under 50 min"],
                  ["Half marathon", "2:30–3:00 hr", "1:50–2:30 hr", "Under 1:45 hr"],
                  ["Marathon", "5:00–6:00 hr", "3:45–5:00 hr", "Under 3:30 hr"],
                ].map(([dist, beg, int_, adv]) => (
                  <tr key={dist} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{dist}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{beg}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{int_}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is a good running pace for beginners?", a: "A comfortable conversational pace for beginners is typically 7–9 min/km (approximately 6.5–8.5 km/h). At this pace you should be able to hold a conversation. The goal for your first months of running is building aerobic base and running consistency — not pace. As fitness develops, pace naturally improves without consciously trying to run faster." },
            { q: "How do I convert pace between km and miles?", a: "To convert min/km to min/mile, multiply by 1.609. A 5:00 min/km pace is equivalent to approximately 8:03 min/mile. To convert min/mile to min/km, divide by 1.609. Most running pace calculators handle this conversion automatically — just ensure you are using consistent units for distance and pace." },
            { q: "Why does my GPS watch show a different pace than my calculated pace?", a: "GPS pace is instantaneous (updated every second) while calculated pace is your average over the full run. Short-term GPS pace fluctuates based on terrain, turning, and signal accuracy. Your watch's average pace at the end of the run should match the value from a pace calculator within a few seconds per km for most routes." },
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
              { label: "Running Splits Calculator", href: "/running/running-splits-calculator" },
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
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
