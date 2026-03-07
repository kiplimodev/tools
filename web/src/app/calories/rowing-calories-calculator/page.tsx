import type { Metadata } from "next";
import Link from "next/link";
import RowingCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Rowing Calories Calculator — Calories Burned Rowing | Denstar Fitness",
  description: "Use our free rowing calories calculator to estimate calories burned rowing based on your weight, duration, and intensity level.",
  openGraph: {
    title: "Rowing Calories Calculator — Calories Burned Rowing | Denstar Fitness",
    description: "Use our free rowing calories calculator to estimate calories burned rowing based on your weight, duration, and intensity level.",
    url: "https://tools.denstarfitness.com/calories/rowing-calories-calculator",
    images: [{ url: "/api/og?tool=rowing-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowing Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned rowing based on weight, duration, and intensity.",
    images: ["/api/og?tool=rowing-calories-calculator"],
  },
};

export default function RowingCaloriesPage() {
  return (
    <>
      <RowingCaloriesClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many calories does rowing burn?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">rowing calories calculator</strong> estimates energy expenditure during rowing based on the MET (Metabolic Equivalent of Task) method. MET values range from approximately 4.8 for light recreational rowing to 12.0 for vigorous racing effort. The formula is: calories = MET × weight (kg) × time (hours).
          </p>
          <p>
            Rowing is one of the most calorically efficient exercises because it engages approximately 86% of the body's muscles simultaneously — more than running, cycling, or swimming. A 75 kg person burns roughly 400–700 calories per hour depending on intensity.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Rowing calories burned by intensity</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intensity</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">MET</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">60 kg person (30 min)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">80 kg person (30 min)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Light", "4.8", "~144 kcal", "~192 kcal"],
                  ["Moderate", "7.0", "~210 kcal", "~280 kcal"],
                  ["Vigorous", "8.5", "~255 kcal", "~340 kcal"],
                  ["Racing effort", "12.0", "~360 kcal", "~480 kcal"],
                ].map(([int_, met, c60, c80]) => (
                  <tr key={int_} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{int_}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{met}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{c60}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{c80}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Is rowing good for burning calories?", a: "Rowing is one of the most effective calorie-burning exercises available. It combines cardiovascular conditioning with full-body resistance, making it more efficient than cycling or walking at the same perceived effort. The combination of upper body, lower body, and core engagement maximises caloric expenditure per hour." },
            { q: "Does rowing burn more calories than running?", a: "At similar intensity levels, running burns slightly more calories per hour due to higher body weight support demands. However, rowing burns substantially more than cycling or swimming at equivalent effort, and causes less joint stress than running — making it an excellent alternative for high-volume training." },
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
              { label: "Swimming Calories Calculator", href: "/calories/swimming-calories-calculator" },
              { label: "Bike Calorie Calculator", href: "/calories/bike-calorie-calculator" },
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
