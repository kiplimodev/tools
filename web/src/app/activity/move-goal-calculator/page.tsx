import type { Metadata } from "next";
import Link from "next/link";
import MoveGoalClientPage from "./_client";

export const metadata: Metadata = {
  title: "Move Goal Calculator — Daily Active Calorie Target | Denstar Fitness",
  description: "Use our free move goal calculator to estimate a daily active calorie burn target based on your TDEE and activity level.",
  openGraph: {
    title: "Move Goal Calculator — Daily Active Calorie Target | Denstar Fitness",
    description: "Use our free move goal calculator to estimate a daily active calorie burn target based on your TDEE and activity level.",
    url: "https://tools.denstarfitness.com/activity/move-goal-calculator",
    images: [{ url: "/api/og?tool=move-goal-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Goal Calculator | Denstar Fitness",
    description: "Estimate your daily active calorie burn target based on TDEE and activity level.",
    images: ["/api/og?tool=move-goal-calculator"],
  },
};

export default function MoveGoalPage() {
  return (
    <>
      <MoveGoalClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a move goal?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">move goal</strong> — popularised by Apple Watch — represents a daily active calorie burn target: the calories burned through intentional movement and exercise, excluding your basal metabolic rate. A <strong className="text-zinc-800 dark:text-zinc-200">move goal calculator</strong> estimates this target based on your TDEE (total daily energy expenditure) and desired activity level.
          </p>
          <p>
            Active calories (move goal) = TDEE − BMR. On a typical moderately active day, this is approximately 20–35% of your TDEE — typically 400–800 calories for most adults.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Move goal by activity level</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Activity level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Typical move goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">What it looks like</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Sedentary", "200–300 kcal", "Desk job, minimal movement"],
                  ["Lightly active", "300–400 kcal", "Daily walks, light activity"],
                  ["Moderately active", "400–600 kcal", "Regular exercise 3–4 days/week"],
                  ["Very active", "600–800 kcal", "Daily training, physically active job"],
                  ["Extremely active", "800–1,000+ kcal", "Twice-daily training or heavy labour"],
                ].map(([level, goal, desc]) => (
                  <tr key={level} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{level}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{goal}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What should my Apple Watch move goal be?", a: "Apple's default move goal starts at 400–600 active calories for most adults. A good starting point is to set it slightly above your current average over the past 2 weeks — making it achievable but challenging. Progress the goal by 50–100 kcal every few weeks as your fitness improves." },
            { q: "Are active calories the same as total calories burned?", a: "No. Total calories burned = BMR (resting metabolic rate) + active calories (move goal). Your watch tracks active calories as the movement component only. For weight management calculations, you need total daily calorie expenditure (TDEE), not just active calories." },
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
              { label: "Steps Per Day Calculator", href: "/activity/steps-per-day-calculator" },
              { label: "Steps to Calories Calculator", href: "/calories/steps-to-calories-calculator" },
              { label: "Walking Calorie Calculator", href: "/calories/walking-calorie-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
