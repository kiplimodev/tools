import CalculatorLayout from "@/components/CalculatorLayout";
import RunningSplitsCalculatorForm from "./RunningSplitsCalculatorForm";
import { getRunningSplits } from "@/lib/composition/running";

type PageProps = {
  searchParams?: Promise<{
    distanceMeters?: string;
    timeSeconds?: string;
    splitMeters?: string;
  }>;
};

export default async function RunningSplitsCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const distanceMeters = params.distanceMeters
    ? Number(params.distanceMeters)
    : undefined;

  const timeSeconds = params.timeSeconds
    ? Number(params.timeSeconds)
    : undefined;

  const splitMeters = params.splitMeters
    ? Number(params.splitMeters)
    : undefined;

  const result =
    distanceMeters && timeSeconds && splitMeters
      ? getRunningSplits({
          distanceMeters,
          timeSeconds,
          splitMeters,
        })
      : null;

  return (
    <CalculatorLayout
      title="Running Splits Calculator"
      description="Calculate split times from total distance and time"
    >
      <RunningSplitsCalculatorForm
        defaultDistanceMeters={distanceMeters ?? 5000}
        defaultTimeSeconds={timeSeconds ?? 1500}
        defaultSplitMeters={splitMeters ?? 1000}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Split time: {result.splitSeconds.toFixed(1)} seconds</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
