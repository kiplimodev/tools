import CalculatorLayout from "@/components/CalculatorLayout";
import { getVdot } from "@/lib/composition/running";

export const metadata = {
  title: "VDOT Calculator",
};

export default function VdotCalculatorPage() {
  const result = getVdot({
    distanceMeters: 5000,
    timeSeconds: 1500, // 25 minutes
  });

  return (
    <CalculatorLayout
      title="VDOT Calculator"
      description="Proof that VDOT composition is wired correctly"
    >
      {result ? (
        <>
          <p>VDOT: {result.vdot}</p>
          <p>Race pace (sec/km): {result.racePaceSecondsPerKm}</p>

          <h3>Training Paces (sec/km)</h3>
          <p>
            Easy: {result.trainingPaces.easyMin} –{" "}
            {result.trainingPaces.easyMax}
          </p>
          <p>Threshold: {result.trainingPaces.threshold}</p>
          <p>Interval: {result.trainingPaces.interval}</p>
        </>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
