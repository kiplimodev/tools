import CalculatorLayout from "@/components/CalculatorLayout";
import ProteinPowderCalculatorForm from "./ProteinPowderCalculatorForm";
import { getProteinPowder } from "@/lib/composition/nutrition/protein-powder";

type PageProps = {
  searchParams?: Promise<{
    proteinTargetGrams?: string;
    proteinPerScoopGrams?: string;
  }>;
};

export default async function ProteinPowderCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};

  const proteinTargetGrams = params.proteinTargetGrams
    ? Number(params.proteinTargetGrams)
    : undefined;

  const proteinPerScoopGrams = params.proteinPerScoopGrams
    ? Number(params.proteinPerScoopGrams)
    : undefined;

  const result =
    proteinTargetGrams && proteinPerScoopGrams
      ? getProteinPowder({
          proteinTargetGrams,
          proteinPerScoopGrams,
        })
      : null;

  return (
    <CalculatorLayout
      title="Protein Powder Calculator"
      description="Calculate how many protein powder scoops you need to hit your protein target"
    >
      <ProteinPowderCalculatorForm
        defaultProteinTargetGrams={proteinTargetGrams ?? 150}
        defaultProteinPerScoopGrams={proteinPerScoopGrams ?? 25}
      />

      {result && (
        <div className="mt-6 space-y-2">
          <p>
            Scoops required:{" "}
            {result.scoopsRequired.toFixed(1)}
          </p>
        </div>
      )}
    </CalculatorLayout>
  );
}
