// tools-new/web/src/app/tools/body-composition/bmi-calculator/page.tsx
import CalculatorLayout from "@/components/CalculatorLayout";
import BmiCalculatorForm from "./BmiCalculatorForm";
import { getBmi } from "@/lib/composition/body-composition/bmi";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    heightCm?: string;
  }>;
};

export default async function BmiCalculatorPage({ searchParams }: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const heightCm = params.heightCm ? Number(params.heightCm) : undefined;

  const result =
    weightKg && heightCm
      ? getBmi({ weightKg, heightCm })
      : null;

  return (
    <CalculatorLayout
      title="BMI Calculator"
      description="Calculate your Body Mass Index (BMI)"
    >
      <BmiCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultHeightCm={heightCm ?? 175}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>BMI: {result.bmi.toFixed(1)}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
