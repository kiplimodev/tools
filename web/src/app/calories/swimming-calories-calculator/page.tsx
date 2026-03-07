import type { Metadata } from "next";
import Link from "next/link";
import SwimmingCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Swimming Calories Calculator — Calories Burned by Stroke | Denstar Fitness",
  description: "Use our free swimming calories calculator to estimate calories burned swimming based on stroke, weight, and duration.",
  openGraph: {
    title: "Swimming Calories Calculator — Calories Burned by Stroke | Denstar Fitness",
    description: "Use our free swimming calories calculator to estimate calories burned swimming based on stroke, weight, and duration.",
    url: "https://tools.denstarfitness.com/calories/swimming-calories-calculator",
    images: [{ url: "/api/og?tool=swimming-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swimming Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned swimming by stroke, weight, and duration.",
    images: ["/api/og?tool=swimming-calories-calculator"],
  },
};

export default function SwimmingCaloriesPage() {
  return (
    <>
      <SwimmingCaloriesClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many calories does swimming burn?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">swimming calories calculator</strong> uses MET (Metabolic Equivalent of Task) values for different swimming strokes and intensities to estimate your calorie expenditure. Swimming burns between 400 and 700+ calories per hour for most adults, depending on stroke, effort, and body weight.
          </p>
          <p>
            Swimming is unique because water resistance requires more muscular work than air-based activities at the same heart rate — making it highly efficient for calorie burning while being extremely low-impact on joints.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Calories burned by swimming stroke (75 kg, 30 min)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Stroke</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">MET (moderate)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Est. calories (30 min)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Freestyle (moderate)", "7.0", "~263 kcal"],
                  ["Breaststroke", "5.3", "~199 kcal"],
                  ["Backstroke", "4.8", "~180 kcal"],
                  ["Butterfly", "13.8", "~518 kcal"],
                  ["Leisurely / recreational", "6.0", "~225 kcal"],
                ].map(([stroke, met, cal]) => (
                  <tr key={stroke} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{stroke}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{met}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Does swimming burn as many calories as running?", a: "At similar intensity levels, running burns slightly more calories per hour because it requires supporting full body weight against gravity. However, swimming is far easier on the joints and allows for longer workout durations, which can compensate for the slightly lower per-minute caloric output. For injury-prone individuals, swimming is often superior." },
            { q: "Which swimming stroke burns the most calories?", a: "Butterfly is by far the most calorically demanding stroke — its MET value is roughly double that of breaststroke. However, it is technically demanding and most recreational swimmers cannot sustain it for long. For caloric burn per training hour, vigorous freestyle is the most practical choice." },
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
              { label: "Rowing Calories Calculator", href: "/calories/rowing-calories-calculator" },
              { label: "Walking Calorie Calculator", href: "/calories/walking-calorie-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
