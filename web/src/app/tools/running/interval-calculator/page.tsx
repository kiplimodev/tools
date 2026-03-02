import type { Metadata } from "next";
import { calculateIntervals } from "@/lib/calculators/running/interval";

export const metadata: Metadata = {
  title: "Interval Calculator | Denstar Fitness",
  description: "Calculate interval times, rest periods, and total workout duration for structured training.",
  openGraph: {
    title: "Interval Calculator | Denstar Fitness",
    description: "Calculate interval times, rest periods, and total workout duration for structured training.",
    url: "https://denstar.fitness/tools/running/interval-calculator",
    images: [{ url: "/api/og?tool=interval-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Interval Calculator | Denstar Fitness",
    description: "Calculate interval times, rest periods, and total workout duration for structured training.",
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
  );
}
