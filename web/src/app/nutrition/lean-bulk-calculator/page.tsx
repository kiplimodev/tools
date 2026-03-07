import type { Metadata } from "next";
import Link from "next/link";
import LeanBulkClientPage from "./_client";

export const metadata: Metadata = {
  title: "Lean Bulk Calculator — Minimal Fat Gain Muscle Building | Denstar Fitness",
  description: "Use our free lean bulk calculator to calculate calories and macros for a controlled surplus that maximises muscle gain while minimising body fat accumulation.",
  openGraph: {
    title: "Lean Bulk Calculator — Minimal Fat Gain Muscle Building | Denstar Fitness",
    description: "Use our free lean bulk calculator to calculate calories and macros for a controlled surplus that maximises muscle gain while minimising body fat accumulation.",
    url: "https://tools.denstarfitness.com/nutrition/lean-bulk-calculator",
    images: [{ url: "/api/og?tool=lean-bulk-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Bulk Calculator | Denstar Fitness",
    description: "Calculate calories and macros for lean bulking with minimised fat gain.",
    images: ["/api/og?tool=lean-bulk-calculator"],
  },
};

export default function LeanBulkCalculatorPage() {
  return (
    <>
      <LeanBulkClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a lean bulk calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">lean bulk calculator</strong> determines a precision-controlled calorie surplus — typically 100–250 kcal above TDEE — designed to maximise muscle protein synthesis while keeping fat gain to a minimum. Unlike a traditional aggressive bulk, lean bulking accepts a slower rate of muscle gain in exchange for staying leaner throughout the muscle-building phase.
          </p>
          <p>
            The lean bulk approach is most appropriate for intermediate to advanced lifters who have passed the beginner stage and are sensitive to body fat accumulation, or those who want to maintain year-round leanness.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Lean bulk vs. standard bulk comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Variable</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Lean bulk</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Standard bulk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Calorie surplus", "100–250 kcal/day", "300–500+ kcal/day"],
                  ["Expected muscle gain", "0.25–0.5 kg/month", "0.5–1 kg/month (beginners)"],
                  ["Expected fat gain", "Minimal (< 0.5 kg/month)", "0.2–0.5 kg/month"],
                  ["Cut frequency", "Rarely needed", "Required every 12–20 weeks"],
                  ["Best for", "Intermediate/advanced lifters", "Beginners and hardgainers"],
                ].map(([variable, lean, standard]) => (
                  <tr key={variable} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{variable}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{lean}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{standard}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Is lean bulking worth it for beginners?", a: "For true beginners (under 1 year of consistent training), lean bulking is often suboptimal. Beginners have a uniquely high capacity to gain muscle — a larger surplus (250–500 kcal) captures this window more effectively without causing disproportionate fat gain. Lean bulking is best reserved for trainees who have passed the beginner phase and whose muscle gain rate has slowed." },
            { q: "How do I know if my lean bulk is working?", a: "Track your weight weekly (average 7-day weight to smooth daily fluctuations) and aim for 0.25–0.5 kg gain per month. If the scale is not moving at all over 3–4 weeks, you are likely at or below maintenance — increase calories by 100 kcal and reassess. If gaining more than 0.5 kg per week, reduce by 100–150 kcal." },
            { q: "What body fat percentage should I start a lean bulk at?", a: "Aim to start a lean bulk between 10–15% body fat (men) or 18–23% (women). At higher body fat percentages, insulin sensitivity decreases and a greater proportion of the surplus may be stored as fat. Cutting to a leaner starting point before bulking typically yields a better muscle-to-fat gain ratio." },
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
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
