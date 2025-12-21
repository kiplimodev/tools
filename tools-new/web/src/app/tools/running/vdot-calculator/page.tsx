import CalculatorLayout from "@/components/CalculatorLayout";
import VdotCalculatorForm from "./VdotCalculatorForm";
import { getVdot } from "@/lib/composition/running/vdot";

type PageProps = {
  searchParams?: Promise<{
    distanceMeters?: string;
    timeSeconds?: string;
  }>;
};

export default async function VdotCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const distanceMeters = params.distanceMeters
    ? Number(params.distanceMeters)
    : undefined;

  const timeSeconds = params.timeSeconds
    ? Number(params.timeSeconds)
    : undefined;

  const result =
    distanceMeters && timeSeconds
      ? getVdot({ distanceMeters, timeSeconds })
      : null;

  return (
    <CalculatorLayout
      title="VDOT Calculator"
      description="Calculate VDOT and training paces from race performance"
    >
      <VdotCalculatorForm
        defaultDistanceMeters={distanceMeters ?? 5000}
        defaultTimeSeconds={timeSeconds ?? 1500}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p><strong>VDOT:</strong> {result.vdot.toFixed(2)}</p>

          <p>
            <strong>Race Pace:</strong>{" "}
            {result.racePaceSecondsPerKm} sec/km
          </p>

          <div className="mt-4">
            <p><strong>Training Paces (sec/km)</strong></p>
            <ul className="list-disc ml-5">
              <li>Easy: {result.trainingPaces.easyMin} – {result.trainingPaces.easyMax}</li>
              <li>Threshold: {result.trainingPaces.threshold}</li>
              <li>Interval: {result.trainingPaces.interval}</li>
            </ul>
          </div>
        </div>
      )}
    </CalculatorLayout>
  );
}
