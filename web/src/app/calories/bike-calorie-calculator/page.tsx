import type { Metadata } from "next";
import Link from "next/link";
import BikeCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Bike Calorie Calculator — Calories Burned Cycling | Denstar Fitness",
  description: "Use our free bike calorie calculator to estimate calories burned cycling based on your weight, duration, and effort level.",
  openGraph: {
    title: "Bike Calorie Calculator — Calories Burned Cycling | Denstar Fitness",
    description: "Use our free bike calorie calculator to estimate calories burned cycling based on your weight, duration, and effort level.",
    url: "https://tools.denstarfitness.com/calories/bike-calorie-calculator",
    images: [{ url: "/api/og?tool=bike-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bike Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned cycling based on weight, duration, and effort level.",
    images: ["/api/og?tool=bike-calorie-calculator"],
  },
};

export default function BikeCaloriePage() {
  return (
    <>
      <BikeCalorieClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many calories does cycling burn?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">bike calorie calculator</strong> uses MET values for different cycling intensities to estimate energy expenditure. Cycling is highly efficient — meaning it burns fewer calories per minute than running at similar heart rates — but can be sustained for much longer durations, making total caloric expenditure comparable or greater for long rides.
          </p>
          <p>
            A 75 kg person cycling at moderate intensity burns approximately 400–500 kcal per hour. At vigorous effort (racing pace), this rises to 700–900 kcal/hour.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Cycling calories by intensity (75 kg, 60 min)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intensity</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Speed (approx)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">MET</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Est. calories/hr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Very light", "< 16 km/h", "4.0", "~300 kcal"],
                  ["Light", "16–19 km/h", "6.0", "~450 kcal"],
                  ["Moderate", "19–22 km/h", "8.0", "~600 kcal"],
                  ["Vigorous", "22–26 km/h", "10.0", "~750 kcal"],
                  ["Racing / HIIT", "> 32 km/h", "12.0+", "~900+ kcal"],
                ].map(([int_, speed, met, cal]) => (
                  <tr key={int_} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{int_}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{speed}</td>
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
            { q: "Does stationary bike burn as many calories as outdoor cycling?", a: "At equivalent intensities, calorie burn is similar. However, outdoor cycling involves more variable effort — hills, wind resistance, and stops — while stationary bikes maintain constant resistance. For consistent caloric tracking, stationary bikes are more predictable. Spin class / indoor cycling classes typically burn 400–600 kcal/hour." },
            { q: "Is cycling or running better for burning calories?", a: "Running burns approximately 30–40% more calories per hour than cycling at similar perceived effort, because running requires supporting full body weight. However, cycling allows longer durations with less joint stress. For overall caloric expenditure per week, regular cyclists often match or exceed runners due to volume." },
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
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Treadmill Calorie Calculator", href: "/calories/treadmill-calorie-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
