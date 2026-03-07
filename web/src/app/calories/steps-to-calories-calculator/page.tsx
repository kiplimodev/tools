import type { Metadata } from "next";
import Link from "next/link";
import StepsToCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Steps to Calories Calculator — Convert Step Count to Calories | Denstar Fitness",
  description: "Use our free steps to calories calculator to convert your daily step count into estimated calories burned based on your weight and stride length.",
  openGraph: {
    title: "Steps to Calories Calculator — Convert Step Count to Calories | Denstar Fitness",
    description: "Use our free steps to calories calculator to convert your daily step count into estimated calories burned based on your weight and stride length.",
    url: "https://tools.denstarfitness.com/calories/steps-to-calories-calculator",
    images: [{ url: "/api/og?tool=steps-to-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steps to Calories Calculator | Denstar Fitness",
    description: "Convert your daily step count into estimated calories burned based on weight.",
    images: ["/api/og?tool=steps-to-calories-calculator"],
  },
};

export default function StepsToCaloriesPage() {
  return (
    <>
      <StepsToCaloriesClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How does steps to calories conversion work?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">steps to calories calculator</strong> converts your daily step count into estimated calories burned using two key variables: your body weight (heavier people burn more calories per step) and your stride length (which determines how far you walked per step). The calculation uses the MET value for walking at your inferred pace.
          </p>
          <p>
            A commonly cited approximation: <strong className="text-zinc-800 dark:text-zinc-200">100 steps ≈ 3–5 calories</strong> for an average adult (70 kg), making 10,000 steps worth approximately 300–500 kcal. This varies considerably with body weight and walking pace.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Calories per 1,000 steps by body weight</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Body weight</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Per 1,000 steps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">10,000 steps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">15,000 steps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["55 kg", "~28 kcal", "~280 kcal", "~420 kcal"],
                  ["70 kg", "~35 kcal", "~350 kcal", "~525 kcal"],
                  ["85 kg", "~43 kcal", "~430 kcal", "~645 kcal"],
                  ["100 kg", "~50 kcal", "~500 kcal", "~750 kcal"],
                ].map(([wt, per1k, per10k, per15k]) => (
                  <tr key={wt} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{wt}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{per1k}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{per10k}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{per15k}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Estimates based on brisk walking pace (~5 km/h). Slower walking reduces calorie burn per step.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How many steps do I need to burn 500 calories?", a: "For a 70 kg person walking at a brisk pace, approximately 14,000–15,000 steps burns around 500 kcal. For a heavier person (85–90 kg), the same 500 kcal requires only 11,000–12,000 steps. For lighter individuals, 17,000–18,000 steps may be needed." },
            { q: "Are step counts from fitness trackers accurate for calorie estimation?", a: "Step count accuracy (the number of steps) is reasonably good — typically within 5–10%. However, calorie estimates from trackers are often 20–30% off because they use simplified equations and cannot measure actual metabolic rate. Use a dedicated calculator with your actual body weight for better estimates." },
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
              { label: "Walking Calorie Calculator", href: "/calories/walking-calorie-calculator" },
              { label: "Steps Per Day Calculator", href: "/activity/steps-per-day-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Move Goal Calculator", href: "/activity/move-goal-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
