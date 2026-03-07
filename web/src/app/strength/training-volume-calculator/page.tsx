import type { Metadata } from "next";
import Link from "next/link";
import TrainingVolumeClientPage from "./_client";

export const metadata: Metadata = {
  title: "Training Volume Calculator — Sets, Reps & Tonnage | Denstar Fitness",
  description: "Use our free training volume calculator to compute total training volume in sets, reps, and tonnage for any workout or weekly programme.",
  openGraph: {
    title: "Training Volume Calculator — Sets, Reps & Tonnage | Denstar Fitness",
    description: "Use our free training volume calculator to compute total training volume in sets, reps, and tonnage for any workout or weekly programme.",
    url: "https://tools.denstarfitness.com/strength/training-volume-calculator",
    images: [{ url: "/api/og?tool=training-volume-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Volume Calculator | Denstar Fitness",
    description: "Calculate total training volume in sets, reps, and tonnage for any workout.",
    images: ["/api/og?tool=training-volume-calculator"],
  },
};

export default function TrainingVolumePage() {
  return (
    <>
      <TrainingVolumeClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is training volume?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Training volume</strong> is the total amount of work performed in a training session or week. A <strong className="text-zinc-800 dark:text-zinc-200">training volume calculator</strong> computes three key metrics:
          </p>
          <ul className="space-y-2 list-none">
            {[
              ["Total sets", "The number of working sets performed — the most predictive single variable for hypertrophy."],
              ["Total reps", "Sets × reps per set — useful for tracking rep ranges over time."],
              ["Total tonnage", "Sets × reps × weight — total load lifted in kg. The gold standard for tracking progressive overload."],
            ].map(([metric, desc]) => (
              <li key={metric} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{metric}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Weekly volume recommendations per muscle group</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Sets per muscle per week</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Minimum effective volume", "5–10", "Maintenance; prevents detraining"],
                  ["Hypertrophy (beginners)", "10–15", "Strong growth response with minimal recovery demands"],
                  ["Hypertrophy (intermediate)", "15–20", "Typical working range for most lifters"],
                  ["Maximum adaptive volume", "20–30", "High performance athletes; requires excellent recovery"],
                ].map(([goal, sets, note]) => (
                  <tr key={goal} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{sets}</td>
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
            { q: "Is tonnage or sets more important for muscle growth?", a: "Sets (specifically hard sets close to failure) are the primary driver of hypertrophy, not raw tonnage. Tonnage is better for tracking strength progress and ensuring progressive overload over time. For muscle building, prioritise hitting target set counts in the right rep range; use tonnage as a secondary metric." },
            { q: "How much volume is too much?", a: "Volume becomes counterproductive when it exceeds your capacity to recover. Signs of excessive volume: persistent joint pain, declining performance session over session, poor sleep, and motivation loss. Start conservatively (10–12 sets per muscle per week) and increase volume by 2 sets per week until recovery becomes difficult." },
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
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "RPE Calculator", href: "/strength/rpe-calculator" },
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "Strength Ratio Calculator", href: "/strength/strength-ratio-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
