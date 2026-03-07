import type { Metadata } from "next";
import Link from "next/link";
import ProteinPowderClientPage from "./_client";

export const metadata: Metadata = {
  title: "Protein Powder Calculator — Scoops to Hit Your Daily Protein Target | Denstar Fitness",
  description: "Use our free protein powder calculator to find out how many scoops per day you need to reach your daily protein target based on food intake.",
  openGraph: {
    title: "Protein Powder Calculator — Scoops to Hit Your Daily Protein Target | Denstar Fitness",
    description: "Use our free protein powder calculator to find out how many scoops per day you need to reach your daily protein target based on food intake.",
    url: "https://tools.denstarfitness.com/nutrition/protein-powder-calculator",
    images: [{ url: "/api/og?tool=protein-powder-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Powder Calculator | Denstar Fitness",
    description: "Find how many protein powder scoops you need to hit your daily protein target.",
    images: ["/api/og?tool=protein-powder-calculator"],
  },
};

export default function ProteinPowderCalculatorPage() {
  return (
    <>
      <ProteinPowderClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How does a protein powder calculator work?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">protein powder calculator</strong> subtracts your estimated protein from food sources from your daily protein target, then divides the gap by the protein content per scoop of your supplement. The result tells you how many scoops you need — and whether a supplement is even necessary given your existing diet.
          </p>
          <p>
            Protein powder is a convenient supplement, not a requirement. Athletes and lifters who eat sufficient whole-food protein sources (meat, fish, dairy, eggs, legumes) often find they need zero to one scoop per day — and sometimes none at all.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Common protein supplements comparison</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Type</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protein / scoop</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Digestion speed</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Whey concentrate", "20–22 g", "Fast", "Post-workout, general use"],
                  ["Whey isolate", "24–26 g", "Fast", "Lactose intolerant, lean bulking"],
                  ["Casein", "24 g", "Slow (6–8 hrs)", "Before bed, prolonged satiety"],
                  ["Pea protein", "20–22 g", "Moderate", "Vegan/plant-based diets"],
                  ["Rice protein", "20–22 g", "Moderate", "Vegan — best combined with pea"],
                ].map(([type, protein, speed, use]) => (
                  <tr key={type} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{type}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{protein}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{speed}</td>
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
            { q: "How much protein do I actually need?", a: "For muscle building, the evidence supports 1.6–2.2 g of protein per kg of bodyweight per day. At the lower end (1.6 g/kg) you capture most of the muscle-building signal; the upper end (2.2 g/kg) provides a buffer for harder training phases. Going higher is not harmful but shows diminishing returns beyond 2.2 g/kg." },
            { q: "Is protein powder better than whole food protein?", a: "Not inherently. Whole food protein sources (chicken, beef, eggs, fish, dairy, legumes) are nutritionally superior because they come packaged with micronutrients, satiety-inducing fibre, and slower digestion. Protein powder is a convenient, affordable supplement for closing gaps — not a replacement for a whole-food diet." },
            { q: "Can I take protein powder on rest days?", a: "Yes. Muscle protein synthesis is elevated for 24–48 hours after training, so adequate protein intake on rest days is equally important. The goal is to hit your daily target consistently across all days, not just training days. Total weekly protein intake matters more than any individual meal or day." },
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
              { label: "Creatine Calculator", href: "/nutrition/creatine-calculator" },
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
              { label: "Lean Bulk Calculator", href: "/nutrition/lean-bulk-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
