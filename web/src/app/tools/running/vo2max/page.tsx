import { CalculatorLayout } from "@/components/CalculatorLayout";
import { estimateRunningVo2 } from "@/lib/calculators/running/vo2max";

export const metadata = {
  title: "Running VO2 Max Estimator | Denstar Fitness Tools",
  description: "Estimate VO2 max from a recent run using speed-based approximations.",
};

export default function Page({ searchParams }: { searchParams?: Record<string, string | string[] | undefined> }) {
  return (
    <CalculatorLayout
      category="Running"
      title="Running VO2 Max"
      description="Use distance and time to approximate VO2 max and pace readiness."
      searchParams={searchParams}
      fields={[
        { name: "distance", label: "Distance (km)", type: "number", min: 0.5, step: 0.01, placeholder: "5" },
        { name: "time", label: "Time (minutes)", type: "number", min: 1, step: 0.1, placeholder: "25" },
      ]}
      compute={(values) => {
        const distance = Number(values.distance);
        const time = Number(values.time);
        if (!Number.isFinite(distance + time) || distance <= 0 || time <= 0) return null;
        return estimateRunningVo2(distance, time);
      }}
      renderResults={(result) => (
        <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
          <p>Speed-driven VO2 estimate to benchmark your aerobic capacity.</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">VO2 max</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result ? `${result.vo2max} ml/kg/min` : "—"}</p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Speed</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result ? `${result.speedKmh} km/h` : "—"}</p>
            </div>
            <div className="rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-inner dark:border-zinc-800 dark:bg-zinc-900/60">
              <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Category</p>
              <p className="text-2xl font-semibold text-zinc-900 dark:text-white">{result ? result.category : "—"}</p>
            </div>
          </div>
          {!result && <p className="text-sm text-zinc-500 dark:text-zinc-400">Provide a run effort to estimate VO2 max.</p>}
        </div>
      )}
    />
  );
}
