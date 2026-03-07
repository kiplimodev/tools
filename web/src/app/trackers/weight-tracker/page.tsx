import type { Metadata } from "next";
import Link from "next/link";
import WeightTrackerClientPage from "./_client";

export const metadata: Metadata = {
  title: "Weight Tracker — Daily Weight Log & Moving Average Trends | Denstar Fitness",
  description: "Use our free weight tracker to log your daily weight, view 7-day moving averages, and identify body weight trends over time.",
  openGraph: {
    title: "Weight Tracker — Daily Weight Log & Moving Average Trends | Denstar Fitness",
    description: "Use our free weight tracker to log your daily weight, view 7-day moving averages, and identify body weight trends over time.",
    url: "https://tools.denstarfitness.com/trackers/weight-tracker",
    images: [{ url: "/api/og?tool=weight-tracker", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Tracker | Denstar Fitness",
    description: "Log your daily weight, view moving averages, and monitor body weight trends.",
    images: ["/api/og?tool=weight-tracker"],
  },
};

export default function WeightTrackerPage() {
  return (
    <>
      <WeightTrackerClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why track your weight daily?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">weight tracker</strong> records your daily body weight and computes a moving average to filter out normal day-to-day fluctuations — revealing your true underlying trend. Body weight fluctuates by 1–3 kg daily due to water retention, glycogen stores, food volume in transit, and hormonal cycles. A single daily reading tells you nothing; the 7-day average tells you everything.
          </p>
          <p>
            Research consistently shows that people who weigh themselves daily and track the data lose more weight and maintain weight loss better than those who weigh weekly or not at all — due to earlier detection of upward trends and faster corrective response.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Expected weight change rates by goal</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Target weekly change</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Monthly</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Fat loss (aggressive)", "−0.75 to −1.0 kg", "−3 to −4 kg", "Higher muscle loss risk; reserve for short periods"],
                  ["Fat loss (moderate)", "−0.5 to −0.75 kg", "−2 to −3 kg", "Optimal balance of fat loss and muscle retention"],
                  ["Lean bulk", "+0.1 to +0.25 kg", "+0.5 to +1 kg", "Slow scale movement is expected and normal"],
                  ["Standard bulk", "+0.25 to +0.5 kg", "+1 to +2 kg", "Faster progress; monitor fat gain"],
                ].map(([goal, weekly, monthly, note]) => (
                  <tr key={goal} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{weekly}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{monthly}</td>
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
            { q: "Why does my weight fluctuate so much day to day?", a: "Body weight fluctuates 1–3 kg daily due to: water retention (carbohydrate consumption causes ~3–4 g of water storage per gram of glycogen), sodium intake (high-sodium meals temporarily increase water retention), food weight in the digestive system, hormonal cycles (particularly in women, where weight can vary 2–4 kg across a menstrual cycle), and hydration status. None of these fluctuations represent fat changes." },
            { q: "When is the best time to weigh myself?", a: "Weigh yourself first thing in the morning, after using the bathroom, and before eating or drinking. This minimises the impact of food and fluid variables. Consistency in timing and conditions matters more than the specific time. Weighing at the same time daily and averaging weekly readings filters out normal fluctuations and reveals your actual trend." },
            { q: "How do I know if my diet is working from the scale?", a: "Look at the 7-day moving average, not individual readings. If you are cutting and the 7-day average is decreasing by 0.3–0.75 kg per week, your deficit is working. If the average has not moved in 3+ weeks despite consistent calorie tracking, you are likely at a maintenance deficit — reduce intake by 100–200 kcal per day and reassess after another 2 weeks." },
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
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
