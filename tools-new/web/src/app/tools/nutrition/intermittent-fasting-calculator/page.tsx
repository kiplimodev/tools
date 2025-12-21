import CalculatorLayout from "@/components/CalculatorLayout";
import IntermittentFastingCalculatorForm from "./IntermittentFastingCalculatorForm";
import { getIntermittentFasting } from "@/lib/composition/nutrition/intermittent-fasting";

type PageProps = {
  searchParams?: Promise<{
    startHour?: string;
    endHour?: string;
  }>;
};

export default async function IntermittentFastingCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const startHour = params.startHour
    ? Number(params.startHour)
    : undefined;

  const endHour = params.endHour
    ? Number(params.endHour)
    : undefined;

  const result =
    startHour !== undefined && endHour !== undefined
      ? getIntermittentFasting({
          startHour,
          endHour,
        })
      : null;

  return (
    <CalculatorLayout
      title="Intermittent Fasting Calculator"
      description="Calculate fasting duration from eating window"
    >
      <IntermittentFastingCalculatorForm
        defaultStartHour={startHour ?? 12}
        defaultEndHour={endHour ?? 20}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Fasting duration: {result.fastingHours} hours</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
