import { calculateWaistToHeightRatio } from "@/registry/tools/waistToHeightRatio";

export const metadata = {
  title: "Waist-to-Height Ratio Calculator | Denstar Fitness Tools",
  description:
    "Calculate your waist-to-height ratio to assess health and cardiometabolic risk.",
};

type ParamValue = string | string[] | undefined;

function toNumber(value: ParamValue): number | null {
  if (!value) return null;
  const v = Array.isArray(value) ? value[0] : value;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export default async function WaistToHeightRatioPage({
  searchParams,
}: {
  searchParams: Promise<{
    waist?: ParamValue;
    height?: ParamValue;
  }>;
}) {
  const params = await searchParams;

  const waist = toNumber(params.waist);
  const height = toNumber(params.height);

  let result: { ratio: number; category: string } | null = null;

  if (waist && height) {
    result = calculateWaistToHeightRatio({
      waistCm: waist,
      heightCm: height,
    });
  }

  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-xl font-semibold">Waist-to-Height Ratio</h1>

      <form className="space-y-4" method="get">
        <div>
          <label className="block text-sm font-medium">
            Waist circumference (cm)
          </label>
          <input
            name="waist"
            type="number"
            step="0.1"
            defaultValue={params.waist ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            name="height"
            type="number"
            step="0.1"
            defaultValue={params.height ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Calculate
        </button>
      </form>

      {result ? (
        <div className="rounded border p-4 space-y-1">
          <p>
            <strong>Ratio:</strong> {result.ratio}
          </p>
          <p>
            <strong>Category:</strong> {result.category}
          </p>
        </div>
      ) : (
        <p className="text-sm text-gray-500">
          Enter your waist and height to calculate your ratio.
        </p>
      )}
    </div>
  );
}
