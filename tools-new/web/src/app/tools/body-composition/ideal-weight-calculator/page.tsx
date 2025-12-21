import CalculatorLayout from "@/components/CalculatorLayout";
import IdealWeightCalculatorForm from "./IdealWeightCalculatorForm";
import { getIdealWeight } from "@/lib/composition/body-composition/ideal-weight";

type PageProps = {
  searchParams?: Promise<{
    heightCm?: string;
    sex?: "male" | "female";
  }>;
};

export default async function IdealWeightCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const heightCm = params.heightCm
    ? Number(params.heightCm)
    : undefined;

  const sex =
    params.sex === "male" || params.sex === "female"
      ? params.sex
      : undefined;

  const result =
    heightCm && sex
      ? getIdealWeight({ heightCm, sex })
      : null;

  return (
    <CalculatorLayout
      title="Ideal Weight Calculator"
      description="Estimate ideal body weight based on height and sex"
    >
      <IdealWeightCalculatorForm
        defaultHeightCm={heightCm ?? 175}
        defaultSex={sex ?? "male"}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Ideal weight: {result.idealWeightKg.toFixed(1)} kg</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
