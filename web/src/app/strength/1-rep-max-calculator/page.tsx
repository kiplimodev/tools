import type { Metadata } from "next";
import Link from "next/link";
import OneRepMaxClientPage from "./_client";

export const metadata: Metadata = {
  title: "1 Rep Max Calculator — Estimate Your One Rep Max | Denstar Fitness",
  description: "Use our free 1 rep max calculator to estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas from any rep range.",
  openGraph: {
    title: "1 Rep Max Calculator — Estimate Your One Rep Max | Denstar Fitness",
    description: "Use our free 1 rep max calculator to estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas from any rep range.",
    url: "https://tools.denstarfitness.com/strength/1-rep-max-calculator",
    images: [{ url: "/api/og?tool=1-rep-max-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Rep Max Calculator | Denstar Fitness",
    description: "Estimate your one-rep max using 5 formulas from any rep range.",
    images: ["/api/og?tool=1-rep-max-calculator"],
  },
};

export default function OneRepMaxPage() {
  return (
    <>
      <OneRepMaxClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a 1 rep max (1RM)?</h2>
          <p>
            Your <strong className="text-zinc-800 dark:text-zinc-200">one-rep max (1RM)</strong> is the maximum weight you can lift for a single repetition with proper form. It is the primary measure of absolute strength in powerlifting, strength sports, and serious training. A <strong className="text-zinc-800 dark:text-zinc-200">1 rep max calculator</strong> estimates this number from a submaximal effort — for example, if you perform 5 reps at 100 kg, the calculator predicts what you could lift for 1 rep.
          </p>
          <p>
            Knowing your 1RM allows you to programme training with percentage-based loading (e.g., 70% of 1RM for volume sets, 85% for strength sets), track progress accurately, and set realistic competition goals.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The five 1RM formulas</h2>
          <div className="space-y-3">
            {[
              { name: "Epley (1985)", formula: "1RM = weight × (1 + reps / 30)", note: "Most widely used. Slightly overestimates at high reps." },
              { name: "Brzycki (1993)", formula: "1RM = weight × (36 / (37 − reps))", note: "Most accurate for sets of 2–10 reps. Breaks down above 10." },
              { name: "Lombardi (1989)", formula: "1RM = weight × reps^0.10", note: "Tends to give higher estimates. Better for explosive movements." },
              { name: "O'Conner et al. (1989)", formula: "1RM = weight × (1 + 0.025 × reps)", note: "Conservative estimate. More accurate for higher rep ranges." },
              { name: "Lander (1985)", formula: "1RM = weight / (1.013 − 0.0267123 × reps)", note: "Derived from powerlifting data. Reliable for 1–10 reps." },
            ].map(({ name, formula, note }) => (
              <div key={name} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-1">{name}</p>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-2">{formula}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What rep range gives the most accurate 1RM estimate?", a: "The most accurate 1RM estimates come from 3–5 rep sets. As the rep count increases beyond 5, accuracy declines because factors like endurance, fatigue, and technique variation play a larger role. For best results, test with a weight you can lift for 3–5 clean reps." },
            { q: "Should I actually test my 1RM?", a: "For most people, estimated 1RM from submaximal testing is safer and sufficient. True 1RM testing requires specific warm-up protocols, a spotter, and carries injury risk — especially for new lifters. Use calculated 1RM for programming and only test actual maximums if competing in powerlifting." },
            { q: "How do I use my 1RM for training?", a: "Percentage-based programming works as follows: 65–75% for hypertrophy volume (8–15 reps), 75–85% for strength development (4–7 reps), 85–95% for maximal strength (1–3 reps). Never base training percentages on a 1RM that is more than 8–12 weeks old." },
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
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "RPE Calculator", href: "/strength/rpe-calculator" },
              { label: "Barbell Calculator", href: "/strength/barbell-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
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
