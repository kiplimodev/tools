import type { Metadata } from "next";
import Link from "next/link";
import BodyFatClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Fat Calculator — US Navy Method Body Fat Percentage | Denstar Fitness",
  description: "Use our free body fat calculator to estimate your body fat percentage using the US Navy tape measurement method. No equipment needed.",
  openGraph: {
    title: "Body Fat Calculator — US Navy Method Body Fat Percentage | Denstar Fitness",
    description: "Use our free body fat calculator to estimate your body fat percentage using the US Navy tape measurement method. No equipment needed.",
    url: "https://tools.denstarfitness.com/body-composition/body-fat-calculator",
    images: [{ url: "/api/og?tool=body-fat-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Fat Calculator | Denstar Fitness",
    description: "Use our free body fat calculator to estimate body fat percentage using the US Navy method.",
    images: ["/api/og?tool=body-fat-calculator"],
  },
};

export default function BodyFatPage() {
  return (
    <>
      <BodyFatClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a body fat calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">body fat calculator</strong> estimates the percentage of your body weight that is fat tissue. This <strong className="text-zinc-800 dark:text-zinc-200">body fat percentage calculator</strong> uses the <strong className="text-zinc-800 dark:text-zinc-200">US Navy circumference method</strong> — a validated tape-measure approach that requires only a measuring tape and body circumference measurements. No expensive equipment needed.
          </p>
          <p>
            Body fat percentage is more informative than BMI because it distinguishes fat from muscle. Two people with identical BMIs can have very different body compositions — one lean and muscular, the other with high fat and low muscle.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Body fat percentage categories</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Category</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Men</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Women</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Essential fat", "2–5%", "10–13%"],
                  ["Athletes", "6–13%", "14–20%"],
                  ["Fitness", "14–17%", "21–24%"],
                  ["Average", "18–24%", "25–31%"],
                  ["Obese", "≥ 25%", "≥ 32%"],
                ].map(([cat, men, women]) => (
                  <tr key={cat} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{cat}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{men}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Source: American Council on Exercise (ACE) body fat percentage classifications.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How to take accurate measurements</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Waist (men)", "Measure at the navel. Stand relaxed, exhale, and measure without sucking in."],
              ["Waist (women)", "Measure at the narrowest point, typically 2–3 cm above the navel."],
              ["Neck", "Measure just below the larynx (Adam's apple) with the tape slightly downward sloping at the front."],
              ["Hips (women only)", "Measure at the widest point across the buttocks with feet together."],
            ].map(([site, inst]) => (
              <li key={site} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{site}:</strong> {inst}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "How accurate is the US Navy body fat method?",
              a: "The US Navy circumference method typically has an accuracy of ±3–4% body fat compared to DEXA scanning (the gold standard). It is less accurate for very lean individuals (below 10% for men, below 18% for women) and may underestimate or overestimate at the extremes. For tracking trends over time, it is reliable and repeatable.",
            },
            {
              q: "What body fat percentage is healthy for fat loss goals?",
              a: "Most fitness professionals target the 'fitness' category as the goal: 14–17% for men and 21–24% for women. Going below 'athlete' levels (6–13% men, 14–20% women) is generally not necessary or sustainable for the general population and may negatively affect hormones, energy, and performance.",
            },
            {
              q: "Can I use body fat percentage to track diet and training progress?",
              a: "Yes — body fat percentage is one of the best metrics for tracking body recomposition. Consistent measurement conditions (same time of day, same hydration level, same measurement technique) are critical for tracking trends accurately. Measure every 2–4 weeks rather than daily.",
            },
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
              { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
              { label: "Lean Body Mass Calculator", href: "/body-composition/lean-body-mass-calculator" },
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
              { label: "Waist-to-Hip Ratio Calculator", href: "/body-composition/waist-to-hip-ratio-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
