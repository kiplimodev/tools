import { calculateRunningPace } from "@/lib/calculators/running/pace";

export const metadata = {
  title: "Running Pace Calculator",
  description: "Calculate pace per km, per mile, and running speed.",
};

interface PaceSearchParams {
  distance?: string;
  time?: string;
}

export default function Page({
  searchParams,
}: {
  searchParams?: PaceSearchParams;
}) {
  const distance = searchParams?.distance
    ? parseFloat(searchParams.distance)
    : null;

  const time = searchParams?.time
    ? parseFloat(searchParams.time)
    : null;

  const result =
    distance !== null && time !== null
      ? calculateRunningPace(distance, time)
      : null;

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Running Pace Calculator</h1>

      <form className="space-y-4" method="GET">
        {/* Distance */}
        <div>
          <label className="block mb-1">Distance (km)</label>
          <input
            className="border p-2 w-full rounded"
            type="number"
            step="0.01"
            name="distance"
            defaultValue={distance ?? ""}
            required
          />
        </div>

        {/* Time */}
        <div>
          <label className="block mb-1">Time (minutes)</label>
          <input
            className="border p-2 w-full rounded"
            type="number"
            step="0.1"
            name="time"
            defaultValue={time ?? ""}
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          Calculate
        </button>
      </form>

      {result && (
        <div className="mt-8 p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <ul className="space-y-2">
            <li>
              Pace per km: <strong>{result.pacePerKm}</strong>
            </li>
            <li>
              Pace per mile: <strong>{result.pacePerMile}</strong>
            </li>
            <li>
              Speed: <strong>{result.speedKmh} km/h</strong>
            </li>
            <li>
              Speed: <strong>{result.speedMph} mph</strong>
            </li>
          </ul>
        </div>
      )}
    </main>
  );
}
