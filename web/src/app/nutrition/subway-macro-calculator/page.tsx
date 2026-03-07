import type { Metadata } from "next";
import Link from "next/link";
import SubwayClientPage from "./_client";

export const metadata: Metadata = {
  title: "Subway Macro Calculator — Calories, Protein, Carbs & Fat | Denstar Fitness",
  description: "Use our free Subway macro calculator to find the calories, protein, carbs, and fat in your custom Subway sandwich order.",
  openGraph: {
    title: "Subway Macro Calculator — Calories, Protein, Carbs & Fat | Denstar Fitness",
    description: "Use our free Subway macro calculator to find the calories, protein, carbs, and fat in your custom Subway sandwich order.",
    url: "https://tools.denstarfitness.com/nutrition/subway-macro-calculator",
    images: [{ url: "/api/og?tool=subway-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subway Macro Calculator | Denstar Fitness",
    description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
    images: ["/api/og?tool=subway-macro-calculator"],
  },
};

export default function SubwayPage() {
  return (
    <>
      <SubwayClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why use a Subway macro calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">Subway macro calculator</strong> helps you build a Subway order that fits your daily calorie and macro targets. Subway calories vary enormously depending on bread choice, protein, sauces, and toppings — a footlong Meatball Marinara can exceed 900 kcal, while a 6-inch Chicken Teriyaki on Multigrain can come in under 400 kcal with similar macros.
          </p>
          <p>
            For fitness-focused individuals, Subway is one of the more flexible fast food options because you control every component of your order — making it easy to optimise for protein content while managing total calories.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Estimated macros for popular 6-inch Subway subs</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Sub (6-inch)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Calories</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protein</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Carbs</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Turkey Breast", "~280 kcal", "~18 g", "~40 g"],
                  ["Chicken Teriyaki", "~370 kcal", "~26 g", "~48 g"],
                  ["Tuna (with mayo)", "~480 kcal", "~20 g", "~38 g"],
                  ["Steak & Cheese", "~380 kcal", "~24 g", "~42 g"],
                  ["Meatball Marinara", "~480 kcal", "~22 g", "~58 g"],
                ].map(([sub, cal, protein, carbs]) => (
                  <tr key={sub} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{sub}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{cal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{protein}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{carbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Values based on Italian white bread, standard vegetables, no sauces. Exact macros vary by region and formulation changes.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What is the highest-protein Subway order?", a: "For maximum protein, choose a footlong Chicken Teriyaki or Steak sub on multigrain bread with extra protein (+50% or double meat). Add low-fat cheese (swiss or american) for an additional 4–5 g protein per slice. Skip high-calorie sauces (ranch, mayo) and opt for mustard or vinegar to keep calorie density low relative to protein content. A well-optimised footlong can deliver 50–60 g protein." },
            { q: "How do I make Subway lower in calories?", a: "Key strategies: (1) Choose 6-inch over footlong — halves everything. (2) Select hearty multigrain or 9-grain wheat bread for more fibre and slightly lower glycaemic impact versus Italian white. (3) Skip or halve sauces — mayo and ranch add 100–150 kcal per serving. (4) Load up on vegetables (free additions). (5) Skip cheese or choose light cheese to save 50–70 kcal." },
            { q: "Is Subway good for bulking?", a: "Yes — Subway is convenient for meeting high calorie and protein targets while bulking. A footlong sub with double meat, full-fat cheese, and regular sauce can provide 700–900 kcal and 45–60 g protein in a single meal. The high-carbohydrate content of the bread makes it particularly suitable as a post-workout meal when carbohydrate replenishment supports glycogen resynthesis." },
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
              { label: "Starbucks Macro Calculator", href: "/nutrition/starbucks-macro-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
              { label: "Protein Powder Calculator", href: "/nutrition/protein-powder-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
