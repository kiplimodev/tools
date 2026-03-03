import type { Metadata } from "next";
import { planRunSplits } from "@/lib/calculators/running/splits";

export const metadata: Metadata = {
  title: "Split Calculator | Denstar Fitness",
  description: "Calculate even or negative splits for any race distance and goal time.",
  openGraph: {
    title: "Split Calculator | Denstar Fitness",
    description: "Calculate even or negative splits for any race distance and goal time.",
    url: "https://denstarfitness.com/tools/running/split-calculator",
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
  );
}
