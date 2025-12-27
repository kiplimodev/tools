import CalculatorLayout from "@/components/CalculatorLayout";
import BodyFatCalculatorForm from "./BodyFatCalculatorForm";
import { getBodyFat } from "@/lib/composition/body-composition/body-fat";
import { getBmi } from "@/lib/composition/body-composition/bmi";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    heightCm?: string;
    age?: string;
    sex?: string;
  }>;
};

export default async function BodyFatCalculatorPage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const heightCm = params.heightCm ? Number(params.heightCm) : undefined;
  const age = params.age ? Number(params.age) : undefined;
  const sex =
    params.sex === "male" || params.sex === "female"
      ? params.sex
      : undefined;

  const bmiResult =
    weightKg && heightCm ? getBmi({ weightKg, heightCm }) : null;

  const result =
    bmiResult && age && sex
      ? getBodyFat({
          bmi: bmiResult.bmi,
          age,
          sex,
        })
      : null;

  return (
    <CalculatorLayout
      title="Body Fat Percentage Calculator"
      description="Estimate body fat percentage using BMI, age, and sex"
    >
      <BodyFatCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultHeightCm={heightCm ?? 175}
        defaultAge={age ?? 30}
        defaultSex={sex ?? "male"}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Body fat percentage: {result.bodyFatPercentage.toFixed(1)}%</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
