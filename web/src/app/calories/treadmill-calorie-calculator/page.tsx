import type { Metadata } from "next";
import Link from "next/link";
import TreadmillCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Treadmill Calorie Calculator — Calories Burned on Treadmill | Denstar Fitness",
  description: "Use our free treadmill calorie calculator to estimate calories burned on a treadmill using speed, incline, weight, and duration.",
  openGraph: {
    title: "Treadmill Calorie Calculator — Calories Burned on Treadmill | Denstar Fitness",
    description: "Use our free treadmill calorie calculator to estimate calories burned on a treadmill using speed, incline, weight, and duration.",
    url: "https://tools.denstarfitness.com/calories/treadmill-calorie-calculator",
    images: [{ url: "/api/og?tool=treadmill-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treadmill Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned on a treadmill using speed, incline, weight, and duration.",
    images: ["/api/og?tool=treadmill-calorie-calculator"],
  },
};

export default function TreadmillCaloriePage() {
  return (
    <>
      <TreadmillCalorieClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How the treadmill calorie calculator works</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">treadmill calorie calculator</strong> estimates energy expenditure using the American College of Sports Medicine (ACSM) oxygen cost equation, which accounts for both speed and incline. Unlike simpler MET-based calculations, the ACSM formula is more accurate because treadmill incline significantly increases metabolic demand — a 1% incline increases calorie burn by approximately 12% compared to flat running.
          </p>
          <p>
            Note: treadmill console calorie displays are typically 10–15% inaccurate because they use generic equations that ignore individual metabolic variation. This calculator uses a more precise formula but still provides an estimate — actual calorie expenditure varies with individual fitness level.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How incline affects calorie burn</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Incline</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Calorie multiplier vs flat</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["0%", "×1.0 (baseline)", "Flat — no incline effect"],
                  ["1%", "~×1.12", "Compensates for lack of air resistance outdoors"],
                  ["3%", "~×1.20", "Light hill equivalent"],
                  ["6%", "~×1.40", "Moderate incline — significant cardio challenge"],
                  ["10%", "~×1.65", "Steep incline — replaces running with power walking"],
                  ["15%", "~×2.0", "Very steep — elite hiking pace caloric demand"],
                ].map(([inc, mult, note]) => (
                  <tr key={inc} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-medium text-zinc-800 dark:text-zinc-200">{inc}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{mult}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Are treadmill calorie readouts accurate?", a: "Most treadmill displays overestimate calorie burn by 10–20% because they use simplified equations that don't account for your actual fitness level, don't factor in resting metabolic rate correctly, and often use inflated MET values. For better accuracy, use a calculator with your actual body weight and ignore the treadmill's display." },
            { q: "Does holding the treadmill handrails reduce calorie burn?", a: "Yes — significantly. Holding the handrails reduces calorie burn by 20–30% because you transfer some of your body weight to the rails, reducing the work your legs must do. For maximum calorie expenditure, do not hold the handrails except for safety." },
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
              { label: "Running Calories Burned", href: "/calories/running-calories-burned-calculator" },
              { label: "Walking Calorie Calculator", href: "/calories/walking-calorie-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
