import CalculatorLayout from "@/components/CalculatorLayout";
import SplitCalculatorForm from "./SplitCalculatorForm";
import { getSplit } from "@/lib/composition/running/split";

type PageProps = {
  searchParams?: Promise<{
    distanceMeters?: string;
    timeSeconds?: string;
    splitMeters?: string;
  }>;
};

export default async function SplitCalculatorPage({
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
      ? getSplit({
          totalDistanceMeters: distanceMeters,
          totalTimeSeconds: timeSeconds,
          splitDistanceMeters: splitMeters,
        })
      : null;

  return (
    <CalculatorLayout
      title="Split Calculator"
      description="Calculate split time from distance and total time"
    >
      <SplitCalculatorForm
        defaultDistanceMeters={distanceMeters ?? 5000}
        defaultTimeSeconds={timeSeconds ?? 1500}
        defaultSplitMeters={splitMeters ?? 1000}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Split time: {result.splitTimeSeconds.toFixed(1)} seconds
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
