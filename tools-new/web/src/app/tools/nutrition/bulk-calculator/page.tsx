import CalculatorLayout from "@/components/CalculatorLayout";
import BulkCalculatorForm from "./BulkCalculatorForm";
import { getBulkCalories } from "@/lib/composition/nutrition/bulk";

type PageProps = {
  searchParams?: Promise<{
    maintenanceCalories?: string;
    surplusCalories?: string;
  }>;
};

export default async function BulkCalculatorPage({
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
      ? getBulkCalories({
          maintenanceCalories,
          surplusCalories,
        })
      : null;

  return (
    <CalculatorLayout
      title="Bulk Calorie Calculator"
      description="Calculate daily calories needed for bulking"
    >
      <BulkCalculatorForm
        defaultMaintenanceCalories={maintenanceCalories ?? 2500}
        defaultSurplusCalories={surplusCalories ?? 300}
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
