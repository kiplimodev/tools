import CalculatorLayout from "@/components/CalculatorLayout";
import { getTdee } from "@/lib/composition/nutrition";

export const metadata = {
  title: "TDEE Calculator",
};

export default function TdeeCalculatorPage() {
  const result = getTdee({
    weightKg: 80,
    heightCm: 180,
    age: 30,
    sex: "male",
    activityMultiplier: 1.55,
  });

  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Proof that TDEE composition is wired correctly"
    >
      {result ? (
        <p>Total Daily Energy Expenditure: {result.tdeeCalories.toFixed(0)} kcal</p>
      ) : (
        <p>Invalid input</p>
      )}
    </CalculatorLayout>
  );
}
