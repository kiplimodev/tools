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

      <form method="GET" className="space-y-4">
        <input name="work" type="number" placeholder="Work (minutes)" defaultValue={work ?? ""} />
        <input name="rest" type="number" placeholder="Rest (minutes)" defaultValue={rest ?? ""} />
        <input name="reps" type="number" placeholder="Repeats" defaultValue={reps ?? ""} />
        <button type="submit">Calculate workout</button>
      </form>

      <section>
        <h2 className="text-xl font-semibold">Results</h2>

        {!result && (
          <p className="text-zinc-500">
            Enter work, rest, and repeats to calculate your interval workout.
          </p>
        )}

        {result && (
          <div className="space-y-2">
            <p>Total time: {result.totalMinutes} minutes</p>
            <ul className="list-disc pl-5">
              {result.intervals.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}
