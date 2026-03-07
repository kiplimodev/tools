import type { Metadata } from "next";
import Link from "next/link";
import WalkingCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Walking Calorie Calculator — Calories Burned Walking | Denstar Fitness",
  description: "Use our free walking calorie calculator to estimate calories burned walking based on your weight, pace, and distance.",
  openGraph: {
    title: "Walking Calorie Calculator — Calories Burned Walking | Denstar Fitness",
    description: "Use our free walking calorie calculator to estimate calories burned walking based on your weight, pace, and distance.",
    url: "https://tools.denstarfitness.com/calories/walking-calorie-calculator",
    images: [{ url: "/api/og?tool=walking-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned walking based on weight, pace, and distance.",
    images: ["/api/og?tool=walking-calorie-calculator"],
  },
};

export default function WalkingCaloriePage() {
  return (
    <>
      <WalkingCalorieClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many calories does walking burn?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">walking calorie calculator</strong> estimates energy expenditure based on MET values for different walking paces and your body weight. A useful rule of thumb: walking burns approximately 60–80 calories per kilometer for a 70 kg person, with higher body weight and faster pace both increasing caloric expenditure.
          </p>
          <p>
            Walking is the most accessible form of exercise and one of the best low-impact tools for increasing daily caloric expenditure without the recovery demands of running. For weight management, total weekly step count often matters more than structured exercise sessions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Calories burned walking by pace (70 kg person)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Pace</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Speed</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">MET</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Cal/30 min</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Slow stroll", "< 3.2 km/h", "2.0", "~70 kcal"],
                  ["Casual walk", "3.2–4.0 km/h", "2.8", "~98 kcal"],
                  ["Brisk walk", "4.8–5.6 km/h", "3.5", "~123 kcal"],
                  ["Fast walk", "6.4 km/h", "5.0", "~175 kcal"],
                  ["Race walk / Nordic", "> 7.2 km/h", "6.5–7.0", "~228 kcal"],
                ].map(([pace, speed, met, cal]) => (
                  <tr key={pace} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{pace}</td>
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
            { q: "Does walking help with weight loss?", a: "Yes — walking contributes directly to calorie expenditure and is highly sustainable compared to higher-intensity exercise. 10,000 steps burns roughly 300–500 calories depending on body weight and pace. Over a week, that is a meaningful addition to your energy deficit without the recovery costs of running or intense training." },
            { q: "Is walking on an incline much better for calorie burn?", a: "Incline walking dramatically increases caloric output. A 5% incline adds approximately 30–40% more calories burned at the same pace. A 10% incline nearly doubles calorie burn compared to flat walking. This is why incline treadmill walking (3–4 mph, 10–15% incline) is a popular fat-loss strategy." },
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
              { label: "Steps to Calories Calculator", href: "/calories/steps-to-calories-calculator" },
              { label: "Treadmill Calorie Calculator", href: "/calories/treadmill-calorie-calculator" },
              { label: "Steps Per Day Calculator", href: "/activity/steps-per-day-calculator" },
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
