import CalculatorLayout from "@/components/CalculatorLayout";
import LeanBulkCalculatorForm from "./LeanBulkCalculatorForm";
import { getLeanBulkCalories } from "@/lib/composition/nutrition/lean-bulk";

type PageProps = {
  searchParams?: Promise<{
    maintenanceCalories?: string;
    surplusCalories?: string;
  }>;
};

export default async function LeanBulkCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const maintenanceCalories = params.maintenanceCalories
    ? Number(params.maintenanceCalories)
    : undefined;

  const surplusCalories = params.surplusCalories
    ? Number(params.surplusCalories)
    : undefined;

  const result =
    maintenanceCalories && surplusCalories
      ? getLeanBulkCalories({
          maintenanceCalories,
          surplusCalories,
        })
      : null;

  return (
    <CalculatorLayout
      title="Lean Bulk Calorie Calculator"
      description="Calculate calories for a controlled lean bulk"
    >
      <LeanBulkCalculatorForm
        defaultMaintenanceCalories={maintenanceCalories ?? 2500}
        defaultSurplusCalories={surplusCalories ?? 200}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Total calories per day:{" "}
            {result.totalCalories}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
