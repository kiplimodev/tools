import { calculateWaistToHeightRatio } from "@/registry/tools/waistToHeightRatio";

export const metadata = {
  title: "Waist to Height Ratio Calculator | Denstar Fitness Tools",
  description:
    "Calculate your waist-to-height ratio to assess health and body composition risk.",
};

type ParamValue = string | string[] | undefined;

function toNumber(value: ParamValue): number | null {
  if (!value) return null;
  const v = Array.isArray(value) ? value[0] : value;
  const n = Number(v);
  return Number.isFinite(n) ? n : null;
}

export default function WaistToHeightRatioCalculatorPage({
  searchParams,
}: {
  searchParams: {
    waist?: ParamValue;
    height?: ParamValue;
  };
}) {
  const waist = toNumber(searchParams.waist);
  const height = toNumber(searchParams.height);

  let result:
    | {
        ratio: number;
        category: string;
      }
    | null = null;

  if (waist !== null && height !== null) {
    result = calculateWaistToHeightRatio({
      waistCm: waist,
      heightCm: height,
    });
  }

  return (
    <div className="max-w-md space-y-6">
      <h1 className="text-xl font-semibold">
        Waist to Height Ratio Calculator
      </h1>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Waist (cm)</label>
          <input
            name="waist"
            defaultValue={searchParams.waist ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Height (cm)</label>
          <input
            name="height"
            defaultValue={searchParams.height ?? ""}
            className="w-full rounded border px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="rounded bg-black px-4 py-2 text-white"
        >
          Calculate Ratio
        </button>
      </form>

      {result ? (
        <div className="rounded border p-4 space-y-1">
          <p>
            <strong>Waist-to-Height Ratio:</strong>{" "}
            {result.ratio.toFixed(2)}
          </p>
          <p>
            <strong>Category:</strong> {result.category}
          </p>
          <p className="text-sm text-gray-600">
            A ratio under <strong>0.5</strong> is generally considered healthy.
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
