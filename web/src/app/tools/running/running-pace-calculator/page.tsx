import { calculateRunningPace } from "@/lib/calculators/running/pace";

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

  const distance = parsePositiveNumber(toSingleValue(params.distance));
  const time = parsePositiveNumber(toSingleValue(params.time));

  const hasValues = distance !== null && time !== null;

  const result = hasValues
    ? calculateRunningPace(distance, time)
    : null;

  return (
    <main className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-3">
        <div className="inline-flex rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
          Running
        </div>
        <h1 className="text-4xl font-semibold tracking-tight">
          Running Pace Calculator
        </h1>
        <p className="text-lg text-zinc-600">
          Convert race distance and time into pace per kilometer, pace per
          mile, and average speed. Submit the form to see results instantly.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="space-y-5 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
          method="GET"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">
                Distance
              </span>
              <input
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                type="number"
                step="0.01"
                name="distance"
                min="0.1"
                defaultValue={distance ?? ""}
                placeholder="10"
                required
              />
              <p className="text-xs text-zinc-500">Kilometers</p>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">
                Time
              </span>
              <input
                className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-200"
                type="number"
                step="0.1"
                name="time"
                min="1"
                defaultValue={time ?? ""}
                placeholder="50"
                required
              />
              <p className="text-xs text-zinc-500">Minutes</p>
            </label>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Calculate pace
          </button>
          <p className="text-sm text-zinc-500">
            Use decimals for seconds (e.g., 4 minutes 30 seconds → 4.5
            minutes).
          </p>
        </form>

        <div className="space-y-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-zinc-900">
            Results
          </h2>
          <div className="space-y-3 text-sm text-zinc-600">
            <p>
              Track-ready metrics for planning splits, workouts, and race
              pacing.
            </p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Pace per km
                </p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? result.pacePerKm : "—"}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Pace per mile
                </p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? result.pacePerMile : "—"}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Speed (km/h)
                </p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? `${result.speedKmh} km/h` : "—"}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-100 bg-zinc-50 p-4">
                <p className="text-xs uppercase tracking-wide text-zinc-500">
                  Speed (mph)
                </p>
                <p className="text-2xl font-semibold text-zinc-900">
                  {result ? `${result.speedMph} mph` : "—"}
                </p>
              </div>
            </div>

            {!result && (
              <p className="text-sm text-zinc-500">
                Enter a distance and time to generate pace and speed
                metrics.
              </p>
            )}

            <p className="text-xs text-zinc-500">
              Pace formatting uses mm:ss for quick readability.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
