import type { Metadata } from "next";
import Link from "next/link";
import WorkoutGeneratorClientPage from "./_client";

export const metadata: Metadata = {
  title: "Workout Generator — Weekly Training Plans by Goal & Level | Denstar Fitness",
  description: "Use our free workout generator to create a goal-based weekly training plan based on your training level, equipment, and schedule.",
  openGraph: {
    title: "Workout Generator — Weekly Training Plans by Goal & Level | Denstar Fitness",
    description: "Use our free workout generator to create a goal-based weekly training plan based on your training level, equipment, and schedule.",
    url: "https://tools.denstarfitness.com/planners/workout-generator",
    images: [{ url: "/api/og?tool=workout-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workout Generator | Denstar Fitness",
    description: "Generate a goal-based weekly workout plan based on your training level and equipment.",
    images: ["/api/og?tool=workout-generator"],
  },
};

export default function WorkoutGeneratorPage() {
  return (
    <>
      <WorkoutGeneratorClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a workout generator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">workout generator</strong> creates a structured weekly training programme based on your goal (strength, hypertrophy, fat loss, or general fitness), experience level, available equipment, and training frequency. It removes the guesswork from programme design by allocating exercises, sets, reps, and rest periods appropriate to your specific profile.
          </p>
          <p>
            Following a structured programme consistently — even a simple one — outperforms random training by a significant margin because it builds progressive overload systematically and ensures all major muscle groups receive adequate weekly volume.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Training programme structures by frequency</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Days/week</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Programme type</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["2–3", "Full body", "Beginners — high frequency, low per-session volume per muscle"],
                  ["3–4", "Upper / lower split", "Intermediate — 2× per muscle per week frequency"],
                  ["4", "Push / pull / legs (PPL)", "Intermediate to advanced — higher volume per session"],
                  ["5–6", "Bro split or advanced PPL", "Advanced — each muscle group trained 1–2× per week at high volume"],
                ].map(([days, type, use]) => (
                  <tr key={days} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{days}</td>
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{type}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How do I choose between strength and hypertrophy programmes?", a: "Strength programmes (1–6 rep range, 80–95% 1RM, long rest periods) optimise force production and neural efficiency. Hypertrophy programmes (6–20 rep range, 60–80% 1RM, moderate rest) optimise muscle volume and cross-sectional area. For beginners, the distinction matters less — any structured progressive programme builds both. Intermediate lifters benefit from periodising between phases." },
            { q: "How important is exercise selection in a generated programme?", a: "Compound movements (squat, deadlift, bench press, overhead press, rows, pull-ups) should form the foundation of any programme — they train multiple muscle groups simultaneously and allow the greatest progressive overload. Isolation movements (curls, lateral raises, leg curls) are accessories that complement the compound base. A good programme is 70–80% compound, 20–30% isolation." },
            { q: "How long should I follow the same workout programme?", a: "Stick with a programme for a minimum of 8–12 weeks before evaluating results. Programme hopping — switching every 2–4 weeks — prevents the progressive overload and technical skill development that produce results. Change programmes when: you have been on one programme for 3+ months with consistent gains slowing, or when your goal fundamentally changes." },
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
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "RPE Calculator", href: "/strength/rpe-calculator" },
              { label: "Home Workout Generator", href: "/calisthenics/home-workout-generator" },
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
