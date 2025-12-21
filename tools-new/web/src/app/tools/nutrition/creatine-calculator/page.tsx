import CalculatorLayout from "@/components/CalculatorLayout";
import CreatineCalculatorForm from "./CreatineCalculatorForm";
import { getCreatineIntake } from "@/lib/composition/nutrition/creatine";

type PageProps = {
  searchParams?: Promise<{
    weightKg?: string;
    protocol?: "loading" | "maintenance";
  }>;
};

export default async function CreatineCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const weightKg = params.weightKg ? Number(params.weightKg) : undefined;
  const protocol = params.protocol;

  const result =
    weightKg && protocol
      ? getCreatineIntake({
          weightKg,
          protocol,
        })
      : null;

  return (
    <CalculatorLayout
      title="Creatine Calculator"
      description="Calculate daily creatine intake based on body weight and protocol"
    >
      <CreatineCalculatorForm
        defaultWeightKg={weightKg ?? 70}
        defaultProtocol={protocol ?? "maintenance"}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Daily creatine intake: {result.creatineGramsPerDay} g
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
