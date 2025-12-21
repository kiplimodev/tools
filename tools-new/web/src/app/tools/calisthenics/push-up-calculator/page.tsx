import CalculatorLayout from "@/components/CalculatorLayout";
import PushUpCalculatorForm from "./PushUpCalculatorForm";
import { getPushUpScore } from "@/lib/composition/calisthenics/push-up";

type PageProps = {
  searchParams?: Promise<{
    reps?: string;
  }>;
};

export default async function PushUpCalculatorPage({
  searchParams,
}: PageProps) {
  const params = (await searchParams) ?? {};
  const reps = params.reps ? Number(params.reps) : undefined;

  const result = reps
    ? getPushUpScore({ reps })
    : null;

  return (
    <CalculatorLayout
      title="Push-Up Calculator"
      description="Evaluate push-up performance based on repetitions"
    >
      <PushUpCalculatorForm defaultReps={reps ?? 30} />

      {result && (
        <div className="mt-6 space-y-2">
          <p>Score: {result.score}</p>
        </div>
      )}
    </CalculatorLayout>
  );
}
