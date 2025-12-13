import { calculateBmi } from "@/registry/tools/bmi";

export const metadata = {
  title: "BMI Calculator | Denstar Fitness Tools",
  description: "Calculate your Body Mass Index (BMI) using height and weight.",
};

type ParamValue = string | string[] | undefined;

function toNumber(value: ParamValue): number | null {
  if (!value) return null;
  const v = Array.isArray(value) ? value[0] : value;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export default async function BmiCalculatorPage({
  searchParams,
}: {
  searchParams: Promise<{
    weight?: ParamValue;
    height?: ParamValue;
  }>;
}) {
  // 🔑 THIS IS THE FIX
  const params = await searchParams;

  const weight = toNumber(params.weight);
  const height = toNumber(params.height);

  let result: { bmi: number; category: string } | null = null;

  if (weight && height) {
    result = calculateBmi({
      weightKg: weight,
      heightCm: height,
    });
  }

  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-xl font-semibold">BMI Calculator</h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Weight (kg)</label>
          <input
            name="weight"
            defaultValue={params.weight ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            name="height"
            defaultValue={params.height ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Calculate BMI
        </button>
      </form>

      {result ? (
        <div className="rounded border p-4">
          <p>
            <strong>BMI:</strong> {result.bmi}
          </p>
          <p>
            <strong>Category:</strong> {result.category}
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          Enter your height and weight to calculate your BMI.
        </p>
      )}
    </div>
  );
}
