import type { Metadata } from "next";
import Link from "next/link";
import StrengthRatioClientPage from "./_client";

export const metadata: Metadata = {
  title: "Strength Ratio Calculator — Push, Pull & Leg Ratios | Denstar Fitness",
  description: "Use our free strength ratio calculator to assess your push, pull, and leg strength ratios relative to bodyweight and identify imbalances.",
  openGraph: {
    title: "Strength Ratio Calculator — Push, Pull & Leg Ratios | Denstar Fitness",
    description: "Use our free strength ratio calculator to assess your push, pull, and leg strength ratios relative to bodyweight and identify imbalances.",
    url: "https://tools.denstarfitness.com/strength/strength-ratio-calculator",
    images: [{ url: "/api/og?tool=strength-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strength Ratio Calculator | Denstar Fitness",
    description: "Assess your push, pull, and leg strength ratios relative to bodyweight.",
    images: ["/api/og?tool=strength-ratio-calculator"],
  },
};

export default function StrengthRatioPage() {
  return (
    <>
      <StrengthRatioClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What are strength ratios?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Strength ratios</strong> express your 1RM on a lift relative to your bodyweight (e.g., a 100 kg squat for a 80 kg person = 1.25× bodyweight) and compare ratios between different movements to identify imbalances. A <strong className="text-zinc-800 dark:text-zinc-200">strength ratio calculator</strong> helps you assess whether your pushing, pulling, and leg strength are balanced — a key indicator of injury risk and athletic potential.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Strength standards by bodyweight multiple (men)</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Lift</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Beginner</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intermediate</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Advanced</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Squat", "0.75×", "1.25×", "1.75×", "2.25×"],
                  ["Bench press", "0.5×", "0.75×", "1.25×", "1.75×"],
                  ["Deadlift", "1.0×", "1.5×", "2.0×", "2.5×"],
                  ["Overhead press", "0.35×", "0.5×", "0.75×", "1.0×"],
                ].map(([lift, beg, int_, adv, elite]) => (
                  <tr key={lift} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{lift}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{beg}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{int_}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{adv}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{elite}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Women's standards are typically 60–75% of men's values at equivalent training levels.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is a healthy bench to squat ratio?", a: "A commonly cited target is a bench press of approximately 70–75% of your squat 1RM. If your bench significantly exceeds this (bench > squat), your lower body development may be lagging. If your squat far exceeds your bench, upper body pushing strength may need attention. Ratios shift with individual anatomy and training history." },
            { q: "Why do strength ratios matter for injury prevention?", a: "Significant imbalances between push and pull strength (e.g., strong bench, weak rows) predict injury risk — in this case, anterior shoulder impingement is common. Similarly, quad-dominant athletes with underdeveloped hamstrings are at elevated ACL risk. Balanced ratios distribute load correctly across joints." },
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
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "RPE Calculator", href: "/strength/rpe-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
