import { calculator } from "@/lib/calculators/running/running-pace-calculator";

export const metadata = {
  title: "Running Pace Calculator | Denstar Fitness Tools",
  description: "Calculate pace per km, per mile, and running speed.",
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
              Pace (seconds per km)
            </p>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-white">
              {result !== null ? Math.round(result) : "—"}
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
  );
}
