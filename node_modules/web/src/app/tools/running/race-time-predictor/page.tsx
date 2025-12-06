import { CalculatorLayout } from "@/components/CalculatorLayout";
import { predictRaceTime } from "@/lib/calculators/running/raceTime";

export const metadata = {
  title: "Race Time Predictor | Denstar Fitness Tools",
  description: "Estimate finishing time for a target distance using the Riegel formula.",
};

export default function Page({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  return (
    <CalculatorLayout
      category="Running"
      title="Race Time Predictor"
      description="Project finishing time for a new race based on a recent performance. Uses the Riegel pacing model to scale your effort."
      searchParams={searchParams}
      fields={[
        { name: "distance", label: "Recent distance (km)", type: "number", min: 0.1, step: 0.01, placeholder: "10" },
        { name: "time", label: "Recent time (minutes)", type: "number", min: 1, step: 0.1, placeholder: "50" },
        { name: "target", label: "Target distance (km)", type: "number", min: 0.1, step: 0.01, placeholder: "21.1" },
      ]}
      compute={(values) => {
        const distance = Number(values.distance);
        const time = Number(values.time);
        const target = Number(values.target);
        if (!Number.isFinite(distance + time + target) || distance <= 0 || time <= 0 || target <= 0) return null;
        return predictRaceTime(distance, time, target);
      }}
      renderResults={(result) => (
        <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <p>Predict your performance on a new race distance using your latest effort.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Projected finish</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result ? result.formatted : "—"}</p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Average pace</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result ? result.pacePerKm : "—"}</p>
            </div>
          </div>
          {!result && <p className="text-sm text-zinc-500 dark:text-zinc-400">Enter your last race details to project the next one.</p>}
        </div>
      )}
    />
  );
}
