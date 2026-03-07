import type { Metadata } from "next";
import Link from "next/link";
import PowerliftingClientPage from "./_client";

export const metadata: Metadata = {
  title: "Powerlifting Calculator — Wilks, DOTS & IPF GL Scores | Denstar Fitness",
  description: "Use our free powerlifting calculator to compute your Wilks, DOTS, and IPF GL scores and compare strength across weight classes.",
  openGraph: {
    title: "Powerlifting Calculator — Wilks, DOTS & IPF GL Scores | Denstar Fitness",
    description: "Use our free powerlifting calculator to compute your Wilks, DOTS, and IPF GL scores and compare strength across weight classes.",
    url: "https://tools.denstarfitness.com/strength/powerlifting-calculator",
    images: [{ url: "/api/og?tool=powerlifting-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerlifting Calculator | Denstar Fitness",
    description: "Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
    images: ["/api/og?tool=powerlifting-calculator"],
  },
};

export default function PowerliftingPage() {
  return (
    <>
      <PowerliftingClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a powerlifting strength score?</h2>
          <p>
            Raw total weight lifted cannot fairly compare powerlifters of different body weights — a 120 kg lifter will naturally lift more than a 60 kg lifter. <strong className="text-zinc-800 dark:text-zinc-200">Powerlifting strength scores</strong> normalise total lifted weight relative to body weight, allowing fair cross-class comparison. This <strong className="text-zinc-800 dark:text-zinc-200">powerlifting calculator</strong> computes three major scoring formulas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The three scoring formulas</h2>
          <div className="space-y-3">
            {[
              { name: "Wilks Score", year: "1990s", status: "Legacy — still used by many federations", note: "Developed by Robert Wilks. Used by IPF until 2019. Coefficients derived from polynomial regression of competition data. Still widely referenced." },
              { name: "DOTS Score", year: "2019", status: "Current IPF standard", note: "Developed to replace Wilks. Uses updated regression coefficients and is considered more accurate across all weight classes, particularly for lighter and heavier athletes." },
              { name: "IPF GL Points", year: "2019", status: "IPF competition scoring (equipped & raw)", note: "Used for IPF World Championship rankings. Separate coefficients for equipped and raw lifting. Different from DOTS in coefficient derivation." },
            ].map(({ name, year, status, note }) => (
              <div key={name} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-semibold text-zinc-800 dark:text-zinc-200">{name}</p>
                  <span className="text-xs text-zinc-500 dark:text-zinc-400">{year}</span>
                </div>
                <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">{status}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is a good Wilks score for a recreational lifter?", a: "Wilks scores roughly correlate: 200–300 = recreational, 300–400 = intermediate/competitive, 400–500 = advanced/national level, 500+ = elite/world class. A score above 450 puts you in the top tier of competitive powerlifting. DOTS scores will differ slightly from Wilks for the same total." },
            { q: "Which formula should I use?", a: "For current IPF federation competition, use DOTS (team scoring) or IPF GL Points (individual ranking). For comparing with historical results or athletes from other federations still using Wilks, use Wilks. As a recreational lifter, any formula gives a useful relative benchmark — the key is consistency in which you track." },
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
              { label: "Strength Ratio Calculator", href: "/strength/strength-ratio-calculator" },
              { label: "Barbell Calculator", href: "/strength/barbell-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
