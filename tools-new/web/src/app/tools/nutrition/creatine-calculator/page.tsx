import CalculatorLayout from "@/components/CalculatorLayout";
import { getCreatineIntake } from "@/lib/composition/nutrition";

export const metadata = {
  title: "Creatine Calculator",
};

export default function CreatineCalculatorPage() {
  const result = getCreatineIntake({
    weightKg: 80,
    protocol: "maintenance",
  });

  return (
    <CalculatorLayout
      title="Creatine Calculator"
      description="Proof that creatine composition is wired correctly"
    >
      {result ? (
        <p>Daily creatine intake: {result.creatineGramsPerDay} g</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
