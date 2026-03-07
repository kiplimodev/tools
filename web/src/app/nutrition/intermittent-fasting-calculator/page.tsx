import type { Metadata } from "next";
import Link from "next/link";
import IntermittentFastingClientPage from "./_client";

export const metadata: Metadata = {
  title: "Intermittent Fasting Calculator — Eating & Fasting Windows | Denstar Fitness",
  description: "Use our free intermittent fasting calculator to calculate your eating and fasting windows based on your chosen IF protocol and wake time.",
  openGraph: {
    title: "Intermittent Fasting Calculator — Eating & Fasting Windows | Denstar Fitness",
    description: "Use our free intermittent fasting calculator to calculate your eating and fasting windows based on your chosen IF protocol and wake time.",
    url: "https://tools.denstarfitness.com/nutrition/intermittent-fasting-calculator",
    images: [{ url: "/api/og?tool=intermittent-fasting-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intermittent Fasting Calculator | Denstar Fitness",
    description: "Calculate your eating and fasting windows for your chosen IF protocol.",
    images: ["/api/og?tool=intermittent-fasting-calculator"],
  },
};

export default function IntermittentFastingCalculatorPage() {
  return (
    <>
      <IntermittentFastingClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is intermittent fasting?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Intermittent fasting (IF)</strong> is a structured eating pattern that cycles between defined fasting and eating windows. An <strong className="text-zinc-800 dark:text-zinc-200">intermittent fasting calculator</strong> converts your chosen protocol and preferred meal start time into an exact eating window — telling you when to start and stop eating each day.
          </p>
          <p>
            IF works primarily through calorie restriction (eating in a shorter window naturally reduces overall intake for most people) rather than through any unique metabolic mechanism. Research supports its equivalence to continuous calorie restriction for weight loss when total calorie intake is matched.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Common intermittent fasting protocols</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protocol</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Eating window</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Fasting window</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["16:8 (Leangains)", "8 hours", "16 hours", "Most popular; good adherence for most lifestyles"],
                  ["18:6", "6 hours", "18 hours", "Greater restriction; suits those with smaller appetites"],
                  ["20:4 (Warrior Diet)", "4 hours", "20 hours", "Aggressive restriction; difficult for high volume training"],
                  ["5:2", "Normal 5 days", "~500 kcal 2 days", "Flexible; popular for non-athletes"],
                  ["OMAD (23:1)", "1 hour", "23 hours", "Extreme; not recommended for athletes or active people"],
                ].map(([protocol, eat, fast, use]) => (
                  <tr key={protocol} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{protocol}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{eat}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{fast}</td>
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
            { q: "Does intermittent fasting boost metabolism?", a: "Short-term fasting (up to 72 hours) actually increases metabolic rate slightly due to elevated norepinephrine. However, this effect is small and does not produce fat loss beyond what calorie restriction alone achieves. Extended fasting or chronically under-eating adapts your metabolic rate downward — the same adaptive thermogenesis seen with any prolonged diet." },
            { q: "Can I train fasted with intermittent fasting?", a: "Yes, for moderate-intensity training. Fasted cardio is well-tolerated and does not impair fat oxidation versus fed cardio when total calories are matched. For heavy strength training (high RPE, near-maximal loads), training near the start of your eating window or having a small pre-workout protein source may better support performance and reduce muscle protein breakdown." },
            { q: "Will intermittent fasting help me lose muscle?", a: "IF alone does not cause muscle loss. Adequate daily protein intake (1.6–2.2 g/kg) distributed across your eating window is the most important protective factor. Research comparing IF to continuous calorie restriction with matched protein shows equivalent lean mass preservation. IF becomes problematic for muscle only when protein intake is insufficient or total calories drop too low." },
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
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
              { label: "Fat Intake Calculator", href: "/nutrition/fat-intake-calculator" },
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
