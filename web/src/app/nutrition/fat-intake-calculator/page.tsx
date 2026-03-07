import type { Metadata } from "next";
import Link from "next/link";
import FatIntakeClientPage from "./_client";

export const metadata: Metadata = {
  title: "Fat Intake Calculator — Daily Fat in Grams by Goal | Denstar Fitness",
  description: "Use our free fat intake calculator to find your optimal daily dietary fat in grams based on your total calorie target and macro split.",
  openGraph: {
    title: "Fat Intake Calculator — Daily Fat in Grams by Goal | Denstar Fitness",
    description: "Use our free fat intake calculator to find your optimal daily dietary fat in grams based on your total calorie target and macro split.",
    url: "https://tools.denstarfitness.com/nutrition/fat-intake-calculator",
    images: [{ url: "/api/og?tool=fat-intake-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Intake Calculator | Denstar Fitness",
    description: "Find your optimal daily dietary fat in grams based on your calorie target.",
    images: ["/api/og?tool=fat-intake-calculator"],
  },
};

export default function FatIntakeCalculatorPage() {
  return (
    <>
      <FatIntakeClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a fat intake calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">fat intake calculator</strong> converts your daily calorie target and target fat percentage into grams of dietary fat per day. Fat contains 9 kcal per gram — more than double the 4 kcal per gram in protein or carbohydrates — which makes setting fat intake in grams more practical than tracking it by percentage alone.
          </p>
          <p>
            Dietary fat is essential for hormone production (including testosterone and estrogen), fat-soluble vitamin absorption (A, D, E, K), cell membrane integrity, and brain function. Dropping fat intake too low — below 20% of total calories — impairs these processes regardless of other dietary variables.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Recommended fat intake ranges by goal</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Fat % of calories</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Fat loss (high protein)", "20–25%", "Set protein first, fill remaining calories with fat and carbs"],
                  ["Maintenance / recomp", "25–35%", "Balanced approach — good for long-term adherence"],
                  ["Muscle gain (bulking)", "25–30%", "Prioritise carbs for training performance; adequate fat for hormones"],
                  ["Ketogenic / low-carb", "60–75%", "Fat replaces carbohydrates as primary fuel source"],
                ].map(([goal, pct, note]) => (
                  <tr key={goal} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{pct}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Minimum: 0.5–1 g/kg bodyweight per day. Do not go below 15% of total calories as fat regardless of goal.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Does dietary fat make you fat?", a: "Fat does not directly cause body fat gain — excess total calories do. Dietary fat was incorrectly demonised in the low-fat diet era of the 1980s–90s. Current evidence shows fat is not uniquely fattening and plays essential roles in the body. Both low-fat and low-carb diets produce similar weight loss outcomes when protein and calories are matched." },
            { q: "What types of fat should I eat?", a: "Prioritise unsaturated fats: monounsaturated fats (olive oil, avocado, nuts) and omega-3 polyunsaturated fats (oily fish, flaxseed, walnuts). Limit saturated fat to 10% of total calories (primarily from animal products). Eliminate industrial trans fats entirely — these are associated with cardiovascular disease risk." },
            { q: "How does fat intake affect testosterone?", a: "Testosterone is synthesised from cholesterol, which requires adequate dietary fat. Studies consistently show that very low-fat diets (under 15% of calories) reduce total and free testosterone in men by 10–15%. Athletes and lifters benefit from keeping fat intake above 20% of total calories to support optimal hormonal output." },
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
              { label: "Lean Bulk Calculator", href: "/nutrition/lean-bulk-calculator" },
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
