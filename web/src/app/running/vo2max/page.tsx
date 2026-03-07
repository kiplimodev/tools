import type { Metadata } from "next";
import Link from "next/link";
import VO2MaxClientPage from "./_client";

export const metadata: Metadata = {
  title: "VO2 Max Calculator — Estimate Aerobic Fitness from Running Performance | Denstar Fitness",
  description: "Use our free VO2 max calculator to estimate your maximal oxygen uptake and aerobic fitness category from a timed running performance test.",
  openGraph: {
    title: "VO2 Max Calculator — Estimate Aerobic Fitness from Running Performance | Denstar Fitness",
    description: "Use our free VO2 max calculator to estimate your maximal oxygen uptake and aerobic fitness category from a timed running performance test.",
    url: "https://tools.denstarfitness.com/running/vo2max",
    images: [{ url: "/api/og?tool=vo2max", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VO2 Max Calculator | Denstar Fitness",
    description: "Estimate your VO2 max and aerobic fitness category from a running performance test.",
    images: ["/api/og?tool=vo2max"],
  },
};

export default function VO2MaxPage() {
  return (
    <>
      <VO2MaxClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is VO2 max?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">VO2 max</strong> (maximal oxygen uptake) is the maximum rate at which your body can consume oxygen during exhaustive exercise, expressed in millilitres of oxygen per kilogram of bodyweight per minute (mL/kg/min). It is the gold standard measure of aerobic fitness and a strong predictor of cardiovascular health, athletic performance, and longevity.
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">VO2 max calculator</strong> estimates your aerobic capacity from a field test — typically a Cooper 12-minute run or timed 1.5-mile test — without the need for laboratory equipment. While less precise than laboratory measurement, field-test estimates correlate well with lab values for most people.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">VO2 max fitness categories by age (men)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Age 20–29</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Age 30–39</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Age 40–49</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Poor", "< 38", "< 34", "< 30"],
                  ["Fair", "38–43", "34–38", "30–35"],
                  ["Good", "44–50", "39–45", "36–41"],
                  ["Excellent", "51–56", "46–52", "42–47"],
                  ["Superior", "> 56", "> 52", "> 47"],
                ].map(([category, age20, age30, age40]) => (
                  <tr key={category} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{category}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{age20}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{age30}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{age40}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Values in mL/kg/min. Women&apos;s categories are typically 10–15% lower at each level. Source: ACSM Guidelines for Exercise Testing and Prescription.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Can I improve my VO2 max?", a: "Yes. VO2 max is trainable, especially in untrained and moderately-trained individuals. The most effective methods are: high-intensity interval training (HIIT) at 90–100% of maximum heart rate, 3–4 days per week; and high-volume aerobic training (increasing weekly mileage by 10% per week). Untrained individuals can increase VO2 max by 15–25% in 3–6 months of consistent training. Highly trained athletes see smaller improvements (3–5%) from additional training." },
            { q: "What is the difference between VO2 max and VDOT?", a: "VO2 max is an absolute physiological measurement of oxygen utilisation capacity. VDOT (Jack Daniels' system) is a performance-based equivalent derived from race times — it represents the VO2 max that would predict your race performance, accounting for running economy as well as aerobic capacity. Two runners can have the same VO2 max but different VDOT values if one runs more economically. VDOT is more useful for setting training paces; VO2 max is more useful for understanding cardiovascular health." },
            { q: "How accurate are field-test VO2 max estimates?", a: "Field-test estimates (Cooper test, beep test, 1.5-mile run) have correlations of 0.85–0.90 with laboratory measurements in healthy adults. They are sufficient for tracking changes over time and categorising fitness level. Sources of inaccuracy include: motivation on the day, prior fatigue, running efficiency, and environmental conditions. For clinical precision (cardiac rehabilitation, elite sport), laboratory measurement remains the standard." },
          ].map(({ q, a }) => (
            <div key={q} className="space-y-1 rounded-xl border border-zinc-100 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-semibold text-zinc-800 dark:text-zinc-200">{q}</p>
              <p>{a}</p>
            </div>
          ))}
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Related calculators</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
              { label: "Interval Calculator", href: "/running/interval-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
