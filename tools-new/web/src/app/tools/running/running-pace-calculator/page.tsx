// src/app/tools/running/running-pace-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import RunningPaceCalculatorForm from "./RunningPaceCalculatorForm";
import { getRunningPace } from "@/lib/composition/running/pace";

type PageProps = {
  searchParams?: Promise<{
    distance?: string;
    timeMinutes?: string;
  }>;
};

export default async function RunningPaceCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const distanceKm = params.distance ? Number(params.distance) : undefined;
  const timeMinutes = params.timeMinutes ? Number(params.timeMinutes) : undefined;

  const result =
    distanceKm && timeMinutes
      ? getRunningPace({
          distanceMeters: distanceKm * 1000,
          timeSeconds: timeMinutes * 60,
        })
      : null;

  return (
    <CalculatorLayout
      title="Running Pace Calculator"
      description="Calculate your running pace from distance and time"
    >
      <RunningPaceCalculatorForm
        defaultDistance={distanceKm ?? 10}
        defaultTimeMinutes={timeMinutes ?? 45}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Pace: {result.paceMinPerKm.toFixed(2)} min/km</p>
          <p>Speed: {result.speedKmPerHour.toFixed(2)} km/h</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
