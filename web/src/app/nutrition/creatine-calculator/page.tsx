import type { Metadata } from "next";
import Link from "next/link";
import CreatineClientPage from "./_client";

export const metadata: Metadata = {
  title: "Creatine Calculator — Daily Dose & Loading Phase by Bodyweight | Denstar Fitness",
  description: "Use our free creatine calculator to find your optimal daily creatine maintenance dose and loading phase amount based on your bodyweight.",
  openGraph: {
    title: "Creatine Calculator — Daily Dose & Loading Phase by Bodyweight | Denstar Fitness",
    description: "Use our free creatine calculator to find your optimal daily creatine maintenance dose and loading phase amount based on your bodyweight.",
    url: "https://tools.denstarfitness.com/nutrition/creatine-calculator",
    images: [{ url: "/api/og?tool=creatine-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatine Calculator | Denstar Fitness",
    description: "Find your optimal daily creatine dose and loading phase amount by bodyweight.",
    images: ["/api/og?tool=creatine-calculator"],
  },
};

export default function CreatineCalculatorPage() {
  return (
    <>
      <CreatineClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How does a creatine calculator work?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">creatine calculator</strong> uses your bodyweight to determine two dosing targets: your maintenance dose (approximately 0.03 g/kg/day) and your loading phase dose (approximately 0.3 g/kg/day split across 4 doses for 5–7 days). Loading phase saturates muscle creatine stores quickly; maintenance phase keeps them topped up.
          </p>
          <p>
            Creatine monohydrate is the most studied sports supplement in existence, with hundreds of peer-reviewed trials confirming its safety and efficacy for increasing strength, power output, lean mass, and high-intensity exercise performance.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Creatine dosing protocols</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protocol</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Daily dose</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Time to saturation</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Loading + maintenance", "20 g (5 g × 4) × 7 days, then 3–5 g/day", "5–7 days", "Fastest saturation; some GI discomfort possible"],
                  ["No-load maintenance", "3–5 g/day", "3–4 weeks", "Same end result; preferred for sensitive stomachs"],
                  ["Bodyweight-based", "0.3 g/kg/day loading, 0.03 g/kg/day maintenance", "5–7 days", "More precise — recommended for accuracy"],
                ].map(([protocol, dose, time, note]) => (
                  <tr key={protocol} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{protocol}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{dose}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{time}</td>
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
            { q: "Is creatine safe long-term?", a: "Yes. Creatine monohydrate has been studied in healthy individuals for over 30 years. Long-term use at standard doses (3–5 g/day) has not been associated with kidney damage, liver toxicity, or adverse effects in healthy individuals. The kidney damage myth originates from a single poorly-controlled case study. Multiple systematic reviews confirm its safety profile." },
            { q: "When should I take creatine?", a: "Timing matters less than consistency. A slight advantage has been observed for post-workout creatine ingestion (taken with a carbohydrate-containing meal), but the effect is small. The most important factor is taking it daily — muscle saturation depends on consistent supplementation over days to weeks, not single-dose timing." },
            { q: "Does creatine cause water retention?", a: "Creatine draws water into muscle cells (intracellular water retention), which is part of the mechanism behind its performance effects. This typically causes a 0.5–2 kg increase in body weight during the first 1–2 weeks of loading. This is not subcutaneous water (bloating) — it is intramuscular water that contributes to the anabolic environment." },
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
              { label: "Protein Powder Calculator", href: "/nutrition/protein-powder-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
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
