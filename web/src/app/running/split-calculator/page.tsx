import type { Metadata } from "next";
import Link from "next/link";
import { planRunSplits } from "@/lib/calculators/running/splits";

export const metadata: Metadata = {
  title: "Split Calculator — Even & Negative Splits for Any Race Distance | Denstar Fitness",
  description: "Use our free split calculator to calculate even or negative running splits per kilometre for any race distance and goal finish time.",
  openGraph: {
    title: "Split Calculator — Even & Negative Splits for Any Race Distance | Denstar Fitness",
    description: "Use our free split calculator to calculate even or negative running splits per kilometre for any race distance and goal finish time.",
    url: "https://tools.denstarfitness.com/running/split-calculator",
    images: [{ url: "/api/og?tool=split-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Split Calculator | Denstar Fitness",
    description: "Calculate even or negative splits for any race distance and goal time.",
    images: ["/api/og?tool=split-calculator"],
  },
};

type ParamValue = string | string[] | null | undefined;

interface SplitSearchParams {
  distance?: ParamValue;
  pace?: ParamValue;
}

type SplitSearchParamsInput =
  | SplitSearchParams
  | URLSearchParams
  | Promise<SplitSearchParams>
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
  input: SplitSearchParamsInput
): Promise<SplitSearchParams> {
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
  searchParams?: SplitSearchParamsInput;
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
            Split Calculator
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Calculate per-kilometer running splits and total finish time based on your pace.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <form
            method="GET"
            className="space-y-5 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Distance
                </span>
                <input
                  type="number"
                  step="0.1"
                  min="0.1"
                  name="distance"
                  defaultValue={distance ?? ""}
                  placeholder="10"
                  required
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-white"
                />
                <p className="text-xs text-zinc-500">Kilometers</p>
              </label>

              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                  Pace
                </span>
                <input
                  type="number"
                  step="0.01"
                  min="1"
                  name="pace"
                  defaultValue={pace ?? ""}
                  placeholder="5"
                  required
                  className="w-full rounded-lg border border-zinc-200/70 bg-white/80 px-3 py-2 text-sm shadow-inner focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-white"
                />
                <p className="text-xs text-zinc-500">Minutes per km</p>
              </label>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            >
              Calculate splits
            </button>
          </form>

          <div className="space-y-4 rounded-2xl border border-white/40 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
              Results
            </h2>

            {!result && (
              <p className="text-sm text-zinc-500">
                Enter distance and pace to generate splits.
              </p>
            )}

            {result && (
              <div className="space-y-4 text-sm">
                <div className="rounded-xl border p-4 dark:border-zinc-800">
                  <p className="text-xs uppercase text-zinc-500">Total Time</p>
                  <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {result.formatted}
                  </p>
                </div>

                <div className="space-y-2">
                  {result.splits.map((split, index) => (
                    <div
                      key={index}
                      className="rounded-lg border px-4 py-2 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300"
                    >
                      {split}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a split calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">split calculator</strong> generates the per-kilometre split times you need to run in order to finish a race at your goal time. Unlike a pace calculator (which gives you a single average pace), a split calculator maps your pace to each kilometre marker — giving you a pacing card you can use during a race to stay on target.
          </p>
          <p>
            Splits are the building block of race strategy. Knowing that you need to hit the 5K mark at 25:00 in a 10K race gives you an actionable, real-time checkpoint — not just an abstract average pace.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Even split vs. negative split strategy</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Strategy</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Description</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Even split", "Same pace every km throughout the race", "Beginners and shorter races (5K, 10K)"],
                  ["Negative split", "Second half slightly faster than first half", "Marathon; maximises aerobic efficiency"],
                  ["Positive split", "First half faster, second half slower", "Avoid — indicates too-fast start, leads to fatigue"],
                  ["Surging strategy", "Deliberate pace variations to break competitors", "Tactical track/cross-country racing — not recommended for recreational runners"],
                ].map(([strategy, desc, use]) => (
                  <tr key={strategy} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{strategy}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{desc}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is the difference between a split calculator and a pace calculator?", a: "A pace calculator gives you a single pace figure (e.g., 5:00/km) from your total time and distance. A split calculator takes that pace and maps it to each kilometre checkpoint — telling you what time you should see at km 1, km 2, km 3, and so on. Both tools give equivalent information, but splits are more actionable during a race." },
            { q: "How should I use split times during a race?", a: "Write your target splits on your wrist with a marker, or load them into a GPS watch as a target pace. At each kilometre marker, check your actual time against your target split. If you are 30 seconds ahead at km 3 of a 10K, slow down — banking time early is one of the most reliable ways to blow up in the second half of a race." },
            { q: "How do hills affect my splits?", a: "Even if you maintain the same perceived effort on hills, your km splits will be slower on climbs and faster on descents. To account for elevation, experienced runners use grade-adjusted pace (GAP) — many GPS watches calculate this automatically. On hilly courses, focus on maintaining consistent effort rather than consistent km split times." },
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
              { label: "Running Splits Calculator", href: "/running/running-splits-calculator" },
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
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
