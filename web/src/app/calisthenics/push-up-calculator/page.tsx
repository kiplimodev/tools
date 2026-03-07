import type { Metadata } from "next";
import Link from "next/link";
import PushUpClientPage from "./_client";

export const metadata: Metadata = {
  title: "Push-Up Calculator — Volume, Strength & Progression | Denstar Fitness",
  description: "Use our free push-up calculator to track push-up volume, estimate relative strength, and set weekly progression targets for your training.",
  openGraph: {
    title: "Push-Up Calculator — Volume, Strength & Progression | Denstar Fitness",
    description: "Use our free push-up calculator to track push-up volume, estimate relative strength, and set weekly progression targets for your training.",
    url: "https://tools.denstarfitness.com/calisthenics/push-up-calculator",
    images: [{ url: "/api/og?tool=push-up-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Push-Up Calculator | Denstar Fitness",
    description: "Track push-up volume, estimate relative strength, and set weekly progression targets.",
    images: ["/api/og?tool=push-up-calculator"],
  },
};

export default function PushUpPage() {
  return (
    <>
      <PushUpClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What does a push-up calculator measure?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">push-up calculator</strong> quantifies your bodyweight pushing strength in three ways: total volume (sets × reps), an estimated strength level relative to bodyweight, and a weekly progression target. Since a push-up loads approximately 69% of your bodyweight, the number of consecutive reps you can perform is a reliable indicator of upper body pushing endurance and relative strength.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Push-up standards by level</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Men (reps)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Women (reps)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Beginner", "< 10", "< 5", "Build with knee push-ups or incline variations"],
                  ["Intermediate", "10–20", "5–15", "Solid baseline for most training programmes"],
                  ["Advanced", "20–40", "15–30", "Indicates good upper body strength endurance"],
                  ["Elite", "40+", "30+", "Typically seen in competitive calisthenics athletes"],
                ].map(([level, men, women, note]) => (
                  <tr key={level} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{level}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{men}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{women}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Standards are approximate and vary by age, body weight, and arm length.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How do I progress my push-ups?", a: "The most reliable method is the double progression model: pick a rep range (e.g., 3×8–12). Once you can complete all sets at the top of the range with perfect form, increase reps or add a fourth set. When volume becomes too high (4×15+), shift to a harder variation — close-grip, archer, ring, or weighted push-ups." },
            { q: "Are push-ups equivalent to a bench press?", a: "A standard push-up loads roughly 69% of bodyweight, while a bench press loads 100% of the barbell load. For an 80 kg person, a bodyweight push-up is roughly equivalent to pressing 55 kg on the bench. They are excellent complementary movements but train slightly different stability demands." },
            { q: "How many push-ups should I do per day?", a: "Three to five working sets, 3–4 days per week, is optimal for most goals. Beginners can start with 50–100 total reps per session split across multiple sets with rest days between. Daily high-volume push-up challenges are possible but require careful management of shoulder joint fatigue." },
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
              { label: "Pull-Up Calculator", href: "/calisthenics/pull-up-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
