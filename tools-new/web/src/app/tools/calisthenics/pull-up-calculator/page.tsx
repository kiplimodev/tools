import CalculatorLayout from "@/components/CalculatorLayout";
import PullUpCalculatorForm from "./PullUpCalculatorForm";
import { getPullUp } from "@/lib/composition/calisthenics/pull-up";

type PageProps = {
  searchParams?: Promise<{
    reps?: string;
  }>;
};

export default async function PullUpCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};
  const reps = params.reps ? Number(params.reps) : undefined;

  const result = reps
    ? getPullUp({ reps })
    : null;

  return (
    <CalculatorLayout
      title="Pull-Up Calculator"
      description="Evaluate pull-up performance based on repetitions"
    >
      <PullUpCalculatorForm defaultReps={reps ?? 10} />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Reps score: {result.reps}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
