import type { Metadata } from "next";
import Link from "next/link";
import StepsPerDayClientPage from "./_client";

export const metadata: Metadata = {
  title: "Steps Per Day Calculator — Find Your Daily Step Goal | Denstar Fitness",
  description: "Use our free steps per day calculator to find a personalised daily step goal based on your activity level and health targets.",
  openGraph: {
    title: "Steps Per Day Calculator — Find Your Daily Step Goal | Denstar Fitness",
    description: "Use our free steps per day calculator to find a personalised daily step goal based on your activity level and health targets.",
    url: "https://tools.denstarfitness.com/activity/steps-per-day-calculator",
    images: [{ url: "/api/og?tool=steps-per-day-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steps Per Day Calculator | Denstar Fitness",
    description: "Find your personalised daily step goal based on activity level and health targets.",
    images: ["/api/og?tool=steps-per-day-calculator"],
  },
};

export default function StepsPerDayPage() {
  return (
    <>
      <StepsPerDayClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How many steps per day should you walk?</h2>
          <p>
            The widely cited <strong className="text-zinc-800 dark:text-zinc-200">10,000 steps per day</strong> target originated from a 1960s Japanese marketing campaign — not clinical research. Modern research suggests significant health benefits begin at much lower step counts and continue improving beyond 10,000. The optimal daily step goal depends on your current activity level, age, and health objectives.
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">steps per day calculator</strong> provides a personalised target based on your current baseline, making the goal achievable and progressive rather than arbitrary.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Step count and health outcomes</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Daily steps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Activity level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Health impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["< 5,000", "Sedentary", "Associated with increased metabolic risk"],
                  ["5,000–7,499", "Low active", "Below recommended minimum"],
                  ["7,500–9,999", "Somewhat active", "Meaningful health benefits — good starting target"],
                  ["10,000–12,499", "Active", "Strong cardiovascular and metabolic benefits"],
                  ["≥ 12,500", "Highly active", "Maximum benefit plateau — returns diminish"],
                ].map(([steps, level, impact]) => (
                  <tr key={steps} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-medium text-zinc-800 dark:text-zinc-200">{steps}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{level}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Is 10,000 steps a day enough exercise?", a: "10,000 steps provides excellent general health benefits but is not a substitute for structured exercise. Steps primarily address cardiovascular health and daily energy expenditure. For muscle strength, bone density, and higher fitness performance, resistance training and higher-intensity cardio are still necessary in addition to daily step targets." },
            { q: "How do I increase my step count without a dedicated walk?", a: "Incidental movement is highly effective: take stairs instead of lifts, park further away, walk during phone calls, get off public transport one stop early, walk during lunch breaks, and stand/walk during work breaks. These habits can add 2,000–4,000 steps per day without dedicated walking sessions." },
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
              { label: "Walking Calorie Calculator", href: "/calories/walking-calorie-calculator" },
              { label: "Move Goal Calculator", href: "/activity/move-goal-calculator" },
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
