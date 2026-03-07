import type { Metadata } from "next";
import Link from "next/link";
import RunningCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Running Calories Burned Calculator — Calories Burned Running | Denstar Fitness",
  description: "Use our free running calories burned calculator to estimate total calories burned running based on your weight, distance, and pace.",
  openGraph: {
    title: "Running Calories Burned Calculator — Calories Burned Running | Denstar Fitness",
    description: "Use our free running calories burned calculator to estimate total calories burned running based on your weight, distance, and pace.",
    url: "https://tools.denstarfitness.com/calories/running-calories-burned-calculator",
    images: [{ url: "/api/og?tool=running-calories-burned-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Calories Burned Calculator | Denstar Fitness",
    description: "Estimate total calories burned running based on weight, distance, and pace.",
    images: ["/api/og?tool=running-calories-burned-calculator"],
  },
};

export default function RunningCaloriesPage() {
  return (
    <>
      <RunningCaloriesClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many calories does running burn?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">running calories calculator</strong> estimates caloric expenditure based on your body weight and distance. A widely used approximation is: <strong className="text-zinc-800 dark:text-zinc-200">running burns approximately 1.0 kcal per kg of body weight per kilometer</strong>. A 70 kg person running 10 km burns approximately 700 kcal, regardless of pace — because going faster means finishing sooner, with similar total energy expended per unit distance.
          </p>
          <p>
            This distance-based rule holds well at moderate paces (5:00–8:00/km). At very fast paces, calorie burn per km is slightly higher due to the metabolic cost of speed. At walking speeds, the formula overestimates.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Calories burned running by distance (per kg of body weight)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Distance</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">60 kg person</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">75 kg person</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">90 kg person</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["5K", "~300 kcal", "~375 kcal", "~450 kcal"],
                  ["10K", "~600 kcal", "~750 kcal", "~900 kcal"],
                  ["Half marathon", "~1,265 kcal", "~1,580 kcal", "~1,900 kcal"],
                  ["Marathon", "~2,520 kcal", "~3,150 kcal", "~3,780 kcal"],
                ].map(([dist, c60, c75, c90]) => (
                  <tr key={dist} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{dist}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{c60}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{c75}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{c90}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Does running pace affect calorie burn per km?", a: "At moderate paces (5:00–7:30/km), calories burned per kilometer are roughly constant regardless of pace — you use the same energy to cover the distance whether you run faster or slower. However, running at very high speeds increases caloric cost per km slightly due to the metabolic demands of speed. Walking uses fewer calories per km than running." },
            { q: "How much do I need to run to burn 500 calories?", a: "A 70 kg person burns approximately 500 kcal running 7.1 km. An 80 kg person reaches 500 kcal at around 6.25 km. A 60 kg person needs approximately 8.3 km. At a 6:00/km pace, this equates to 38–50 minutes of running depending on body weight." },
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
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
              { label: "Treadmill Calorie Calculator", href: "/calories/treadmill-calorie-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "VDOT Calculator", href: "/running/vdot-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
