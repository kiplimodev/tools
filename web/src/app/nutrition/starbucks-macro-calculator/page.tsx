import type { Metadata } from "next";
import Link from "next/link";
import StarbucksClientPage from "./_client";

export const metadata: Metadata = {
  title: "Starbucks Macro Calculator — Calories, Protein, Carbs & Fat | Denstar Fitness",
  description: "Use our free Starbucks macro calculator to look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
  openGraph: {
    title: "Starbucks Macro Calculator — Calories, Protein, Carbs & Fat | Denstar Fitness",
    description: "Use our free Starbucks macro calculator to look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
    url: "https://tools.denstarfitness.com/nutrition/starbucks-macro-calculator",
    images: [{ url: "/api/og?tool=starbucks-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starbucks Macro Calculator | Denstar Fitness",
    description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food.",
    images: ["/api/og?tool=starbucks-macro-calculator"],
  },
};

export default function StarbucksPage() {
  return (
    <>
      <StarbucksClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why use a Starbucks macro calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">Starbucks macro calculator</strong> lets you look up the exact nutritional content of your Starbucks order — calories, protein, carbohydrates, and fat — so you can fit it accurately into your daily macro targets. Starbucks calories vary dramatically by drink size, milk type, syrups, and toppings, making it easy to underestimate intake without checking the numbers.
          </p>
          <p>
            A standard Starbucks grande Pumpkin Spice Latte with 2% milk contains approximately 380 kcal, 14 g protein, 52 g carbs, and 14 g fat — equivalent to a full meal for many calorie targets.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Lower-calorie Starbucks options for fitness goals</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Drink (Grande)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Calories</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protein</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Cold brew (black)", "~5 kcal", "0 g", "Zero sugar; highest caffeine per calorie"],
                  ["Americano", "~15 kcal", "1 g", "Espresso + water; minimal calories"],
                  ["Latte (non-fat milk)", "~130 kcal", "13 g", "Good protein-to-calorie ratio"],
                  ["Cappuccino (non-fat)", "~80 kcal", "8 g", "Lower calorie than latte; high foam"],
                  ["Flat white (oat milk)", "~170 kcal", "5 g", "Popular dairy-free; moderate calories"],
                ].map(([drink, cal, protein, note]) => (
                  <tr key={drink} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{drink}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{cal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{protein}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Values are approximate. Exact macros vary by region, barista preparation, and customisations.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How do I make my Starbucks order lower in calories?", a: "Three high-impact swaps: (1) Request non-fat or skimmed milk instead of whole milk — saves 50–80 kcal in a grande. (2) Ask for half the syrups or sugar-free syrup — each pump of standard syrup adds approximately 20 kcal and 5 g sugar. (3) Skip whipped cream — saves approximately 80–100 kcal. Collectively, these changes can reduce a 400+ kcal drink to under 150 kcal." },
            { q: "Does Starbucks coffee break intermittent fasting?", a: "Black coffee, cold brew, and Americano contain fewer than 5 kcal and are generally considered fast-compatible by most IF practitioners. Drinks containing milk, syrups, or cream (even small amounts) technically break a strict fast. For dietary tracking purposes, drinks under 50 kcal are typically acceptable; for purist fasting protocols, stick to black coffee or water." },
            { q: "What is the highest-protein Starbucks drink?", a: "Protein-rich choices include lattes made with dairy milk (approximately 13 g per grande), Starbucks Protein Boxes (typically 20–25 g protein), and egg-based food items. Adding a scoop of vanilla sweet cream (made with heavy cream) is calorie-dense but not high in protein. For maximum protein, pair a latte with a high-protein food item." },
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
              { label: "Subway Macro Calculator", href: "/nutrition/subway-macro-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Intermittent Fasting Calculator", href: "/nutrition/intermittent-fasting-calculator" },
              { label: "Fat Intake Calculator", href: "/nutrition/fat-intake-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
