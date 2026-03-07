import type { Metadata } from "next";
import Link from "next/link";
import PullUpClientPage from "./_client";

export const metadata: Metadata = {
  title: "Pull-Up Calculator — Volume, Weighted Equivalents & Milestones | Denstar Fitness",
  description: "Use our free pull-up calculator to track pull-up volume, calculate weighted equivalents, and set progression milestones for your training.",
  openGraph: {
    title: "Pull-Up Calculator — Volume, Weighted Equivalents & Milestones | Denstar Fitness",
    description: "Use our free pull-up calculator to track pull-up volume, calculate weighted equivalents, and set progression milestones for your training.",
    url: "https://tools.denstarfitness.com/calisthenics/pull-up-calculator",
    images: [{ url: "/api/og?tool=pull-up-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pull-Up Calculator | Denstar Fitness",
    description: "Track pull-up volume, weighted equivalents, and progression milestones.",
    images: ["/api/og?tool=pull-up-calculator"],
  },
};

export default function PullUpPage() {
  return (
    <>
      <PullUpClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What does a pull-up calculator measure?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">pull-up calculator</strong> converts your bodyweight and rep count into meaningful training metrics: total volume lifted, an estimated weighted equivalent (useful for comparing to lat pulldown loads), and a progression milestone. Pull-ups load approximately 100% of your bodyweight through the lats, biceps, and rear delts — making rep count a direct measure of relative pulling strength.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Pull-up standards by training level</h2>
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
                  ["Beginner", "0–3", "0–1", "Use band-assisted or negative reps to build strength"],
                  ["Intermediate", "4–8", "2–5", "Solid pulling base; begin adding volume"],
                  ["Advanced", "9–15", "6–10", "Progress to weighted or ring pull-ups"],
                  ["Elite", "15+", "10+", "Weighted pull-ups and advanced calisthenics skills"],
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
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How do I get my first pull-up?", a: "Use band-assisted pull-ups to practice the movement pattern, combined with slow negatives — lower yourself over 3–5 seconds from the top position. Negatives are particularly effective because you are strongest in the eccentric phase. Aim for 3 sets of 3–5 negatives, 3 times per week until you can complete 1–2 full reps unassisted." },
            { q: "Should I do pull-ups or lat pulldowns?", a: "Both are highly effective for lat development. Pull-ups are superior for functional strength, core stability, and scapular control. Lat pulldowns allow precise load selection, making them better for beginners who cannot yet do full pull-ups and for high-rep hypertrophy work. The best programmes include both." },
            { q: "When should I add weight to pull-ups?", a: "Add weight when you can comfortably complete 10–12 clean reps with a full range of motion and controlled descent. Begin with 2.5–5 kg using a dip belt or weighted vest. Use the same double progression principle: work up to 8–10 reps at the new weight before adding more load." },
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
              { label: "Push-Up Calculator", href: "/calisthenics/push-up-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "Strength Ratio Calculator", href: "/strength/strength-ratio-calculator" },
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
