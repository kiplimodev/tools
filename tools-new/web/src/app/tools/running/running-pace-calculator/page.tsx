import CalculatorLayout from "@/components/CalculatorLayout";
import { getRunningPace } from "@/lib/composition/running";

export const metadata = {
  title: "Running Pace Calculator",
};

export default function RunningPaceCalculatorPage() {
  const result = getRunningPace({
    distanceMeters: 5000,
    timeSeconds: 1800,
  });

  return (
    <CalculatorLayout title="Running Pace Calculator">
      <p>Composition layer is now wired correctly.</p>

      {result ? (
        <>
          <p>Pace per km (seconds): {result.pacePerKmSeconds}</p>
          <p>Pace per mile (seconds): {result.pacePerMileSeconds}</p>
          <p>Speed (km/h): {result.speedKmh}</p>
          <p>Speed (mph): {result.speedMph}</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
