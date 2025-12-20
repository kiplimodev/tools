import CalculatorLayout from "@/components/CalculatorLayout";
import { getTrainingVolume } from "@/lib/composition/strength";

export const metadata = {
  title: "Training Volume Calculator",
};

export default function TrainingVolumeCalculatorPage() {
  const result = getTrainingVolume({
    weightKg: 100,
    reps: 5,
    sets: 5,
  });

  return (
    <CalculatorLayout
      title="Training Volume Calculator"
      description="Proof that training volume composition is wired correctly"
    >
      {result ? (
        <p>Total volume: {result.totalVolumeKg} kg</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
