// src/app/tools/running/interval-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import IntervalCalculatorForm from "./IntervalCalculatorForm";
import { getIntervalWorkout } from "@/lib/composition/running/interval";

type PageProps = {
  searchParams?: Promise<{
    runSeconds?: string;
    restSeconds?: string;
    repeats?: string;
  }>;
};

export default async function IntervalCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const runSeconds = params.runSeconds
    ? Number(params.runSeconds)
    : undefined;

  const restSeconds = params.restSeconds
    ? Number(params.restSeconds)
    : undefined;

  const repeats = params.repeats
    ? Number(params.repeats)
    : undefined;

  const result =
    runSeconds && restSeconds && repeats
      ? getIntervalWorkout({
          runSeconds,
          restSeconds,
          repeats,
        })
      : null;

  return (
    <CalculatorLayout
      title="Interval Calculator"
      description="Calculate total workout time from interval structure"
    >
      <IntervalCalculatorForm
        defaultRunSeconds={runSeconds ?? 60}
        defaultRestSeconds={restSeconds ?? 60}
        defaultRepeats={repeats ?? 10}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Total time: {result.totalSeconds} seconds</p>
          <p>Total time: {result.totalMinutes.toFixed(1)} minutes</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
