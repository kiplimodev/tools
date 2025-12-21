import CalculatorLayout from "@/components/CalculatorLayout";
import TdeeCalculatorForm from "./TdeeCalculatorForm";
import { getTdee } from "@/lib/composition/nutrition/tdee";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    heightCm?: string;
    age?: string;
    sex?: "male" | "female";
    activityMultiplier?: string;
  }>;
};

export default async function TdeeCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const heightCm = params.heightCm ? Number(params.heightCm) : undefined;
  const age = params.age ? Number(params.age) : undefined;
  const sex = params.sex ?? "male";
  const activityMultiplier = params.activityMultiplier
    ? Number(params.activityMultiplier)
    : undefined;

  const result =
    weightKg &&
    heightCm &&
    age &&
    activityMultiplier
      ? getTdee({
          weightKg,
          heightCm,
          age,
          sex,
          activityMultiplier,
        })
      : null;

  return (
    <CalculatorLayout
      title="TDEE Calculator"
      description="Estimate your total daily energy expenditure"
    >
      <TdeeCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultHeightCm={heightCm ?? 175}
        defaultAge={age ?? 30}
        defaultSex={sex}
        defaultActivityMultiplier={activityMultiplier ?? 1.55}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Total Daily Energy Expenditure: {result.tdeeCalories} kcal</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
