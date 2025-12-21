import CalculatorLayout from "@/components/CalculatorLayout";
import BodyFatCalculatorForm from "./BodyFatCalculatorForm";
import { getBodyFat } from "@/lib/composition/body-composition/body-fat";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    heightCm?: string;
    age?: string;
    sex?: "male" | "female";
  }>;
};

export default async function BodyFatCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const heightCm = params.heightCm ? Number(params.heightCm) : undefined;
  const age = params.age ? Number(params.age) : undefined;
  const sex = params.sex === "female" ? "female" : "male";

  const result =
    weightKg && heightCm && age && sex
      ? getBodyFat({
          weightKg,
          heightCm,
          age,
          sex,
        })
      : null;

  return (
    <CalculatorLayout
      title="Body Fat Calculator"
      description="Estimate body fat percentage based on weight, height, age, and sex"
    >
      <BodyFatCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultHeightCm={heightCm ?? 175}
        defaultAge={age ?? 30}
        defaultSex={sex}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Body fat percentage: {result.bodyFatPercentage.toFixed(1)}%</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
