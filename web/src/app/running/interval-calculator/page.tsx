import type { Metadata } from "next";
import Link from "next/link";
import { calculateIntervals } from "@/lib/calculators/running/interval";

export const metadata: Metadata = {
  title: "Interval Calculator — Work, Rest & Workout Duration for Structured Training | Denstar Fitness",
  description: "Use our free interval calculator to compute interval times, rest periods, and total workout duration for structured running and cardio training sessions.",
  openGraph: {
    title: "Interval Calculator — Work, Rest & Workout Duration for Structured Training | Denstar Fitness",
    description: "Use our free interval calculator to compute interval times, rest periods, and total workout duration for structured running and cardio training sessions.",
    url: "https://tools.denstarfitness.com/running/interval-calculator",
    images: [{ url: "/api/og?tool=interval-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interval Calculator | Denstar Fitness",
    description: "Calculate interval times, rest periods, and total workout duration.",
    images: ["/api/og?tool=interval-calculator"],
  },
};

type ParamValue = string | string[] | null | undefined;

interface IntervalSearchParams {
  work?: ParamValue;
  rest?: ParamValue;
  reps?: ParamValue;
}

type IntervalSearchParamsInput =
  | IntervalSearchParams
  | URLSearchParams
  | Promise<IntervalSearchParams>
  | undefined;

const toSingleValue = (value: ParamValue): string | null => {
  if (Array.isArray(value)) return value[0] ?? null;
  if (typeof value === "string") return value;
  return value ?? null;
};

const parsePositiveNumber = (value: string | null): number | null => {
  if (!value) return null;
  const num = Number(value);
  if (!Number.isFinite(num) || num <= 0) return null;
  return num;
};

async function normalizeSearchParams(
  input: IntervalSearchParamsInput
): Promise<IntervalSearchParams> {
  if (!input) return {};
  if (input instanceof Promise) return input;
  if (input instanceof URLSearchParams) {
    return {
      work: input.get("work"),
      rest: input.get("rest"),
      reps: input.get("reps"),
    };
  }
  return input;
}

export default async function Page({
  searchParams,
}: {
  searchParams?: IntervalSearchParamsInput;
}) {
  const params = await normalizeSearchParams(searchParams);

  const work = parsePositiveNumber(toSingleValue(params.work));
  const rest = parsePositiveNumber(toSingleValue(params.rest));
  const reps = parsePositiveNumber(toSingleValue(params.reps));

  const hasValues = work !== null && rest !== null && reps !== null;

  const result = hasValues
    ? calculateIntervals(work, rest, reps)
    : null;

  return (
    <>
      <main className="space-y-10">
        <div className="space-y-3">
          <div className="inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700">
            Running
          </div>
          <h1 className="text-3xl font-semibold">Interval Calculator</h1>
          <p className="text-zinc-600">
            Build interval workouts using work and rest durations.
          </p>
        </div>

        <form method="GET" className="space-y-4 rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60">
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Work interval (minutes)</label>
            <input
              name="work"
              type="number"
              step="0.5"
              min="0.5"
              placeholder="2"
              defaultValue={work ?? ""}
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Rest interval (minutes)</label>
            <input
              name="rest"
              type="number"
              step="0.5"
              min="0"
              placeholder="1"
              defaultValue={rest ?? ""}
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">Repeats</label>
            <input
              name="reps"
              type="number"
              step="1"
              min="1"
              placeholder="8"
              defaultValue={reps ?? ""}
              required
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
          >
            Calculate workout
          </button>
        </form>

        <div className="rounded-2xl border border-zinc-200 bg-white/70 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/60 min-h-[80px]">
          {!result && (
            <p className="text-sm text-zinc-400 dark:text-zinc-500">
              Enter work, rest, and repeats to calculate your interval workout.
            </p>
          )}

          {result && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-zinc-100 dark:border-zinc-800">
                <span className="text-zinc-500 dark:text-zinc-400">Total workout time</span>
                <strong className="text-zinc-900 dark:text-zinc-100">{result.totalMinutes} min</strong>
              </div>
              <ul className="space-y-1">
                {result.intervals.map((line, i) => (
                  <li key={i} className="text-zinc-600 dark:text-zinc-400">{line}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is an interval calculator?</h2>
          <p>
            An <strong className="text-zinc-800 dark:text-zinc-200">interval calculator</strong> structures your interval training session by computing the total workout duration, cumulative work time, cumulative rest time, and a rep-by-rep breakdown. Interval training alternates between high-intensity work periods and lower-intensity recovery periods — one of the most effective methods for improving VO2 max, running economy, and cardiovascular fitness.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Common interval training protocols</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protocol</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Work</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Rest</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Reps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Tabata", "0:20", "0:10", "8", "Anaerobic power, metabolic conditioning"],
                  ["VO2 max intervals", "3:00", "3:00", "5–6", "Aerobic capacity improvement"],
                  ["Lactate threshold", "5:00", "1:00", "4–6", "Raise the pace you can sustain"],
                  ["Hill sprints", "0:30", "2:00", "6–10", "Speed, power, injury prevention"],
                  ["Long intervals", "8:00", "2:00", "3–4", "Marathon-specific aerobic development"],
                ].map(([protocol, work, rest, reps, goal]) => (
                  <tr key={protocol} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{protocol}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{work}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{rest}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{reps}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{goal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How often should I do interval training?", a: "One to two interval sessions per week is optimal for most runners. More than two hard sessions per week increases injury risk and impairs recovery from easy aerobic runs. The classic 80/20 rule applies: 80% of weekly running should be easy effort, and 20% should be at higher intensities including intervals and threshold work." },
            { q: "What pace should I run intervals at?", a: "For VO2 max intervals (3–5 minute work periods), target approximately 5K race pace — an intensity you could sustain for 10–15 minutes maximum. For shorter intervals (30–90 seconds), effort can be higher — mile race pace or faster. Jack Daniels' VDOT tables provide specific pace targets for each intensity zone based on your recent race times." },
            { q: "Should beginners do interval training?", a: "Beginners should establish an aerobic base of consistent easy running (3–4 days per week for 8–12 weeks) before introducing interval training. Running without a base makes intervals disproportionately stressful on the musculoskeletal system. Once you can run 30 minutes continuously at a comfortable pace, introducing one gentle interval session per week is safe and productive." },
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
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
              { label: "Running Calories Calculator", href: "/calories/running-calories-burned-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
