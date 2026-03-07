import type { Metadata } from "next";
import Link from "next/link";
import BulkClientPage from "./_client";

export const metadata: Metadata = {
  title: "Bulk Calculator — Calories & Macros for Muscle Gain | Denstar Fitness",
  description: "Use our free bulk calculator to calculate daily calorie intake and macros for a controlled muscle-building bulk based on your TDEE and surplus target.",
  openGraph: {
    title: "Bulk Calculator — Calories & Macros for Muscle Gain | Denstar Fitness",
    description: "Use our free bulk calculator to calculate daily calorie intake and macros for a controlled muscle-building bulk based on your TDEE and surplus target.",
    url: "https://tools.denstarfitness.com/nutrition/bulk-calculator",
    images: [{ url: "/api/og?tool=bulk-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Calculator | Denstar Fitness",
    description: "Calculate daily calories and macros for a controlled muscle-building bulk.",
    images: ["/api/og?tool=bulk-calculator"],
  },
};

export default function BulkCalculatorPage() {
  return (
    <>
      <BulkClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a bulk calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">bulk calculator</strong> adds a controlled calorie surplus on top of your TDEE (Total Daily Energy Expenditure) to determine the calorie and macro targets needed to maximise muscle growth. Bulking is a deliberate muscle-building phase where you eat above maintenance to provide the energy substrate required for muscle protein synthesis and to support high-intensity training.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Calorie surplus recommendations by experience level</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Surplus (kcal/day)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Expected gain</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Beginner (< 1 yr)", "250–500", "0.5–1 kg/month", "Higher muscle gain potential; surplus can be larger"],
                  ["Intermediate (1–3 yr)", "200–350", "0.25–0.5 kg/month", "More of surplus becomes fat if exceeded"],
                  ["Advanced (3+ yr)", "100–200", "0.1–0.25 kg/month", "Diminishing returns; precision matters more"],
                ].map(([level, surplus, gain, note]) => (
                  <tr key={level} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{level}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{surplus}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{gain}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Natural muscle gain rate is limited by biology. A surplus beyond your capacity to build muscle simply creates additional fat storage.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How long should a bulk phase last?", a: "Most effective bulk phases run 12–20 weeks. Shorter bulks produce less total muscle gain; longer bulks risk accumulating excess body fat that requires an extended cut to remove. A common approach is to bulk until you reach 15–18% body fat (men), then cut to 10–12% before bulking again." },
            { q: "What macros should I eat while bulking?", a: "Set protein at 1.6–2.2 g/kg of bodyweight first. Fill remaining calories with carbohydrates (prioritise these — they fuel training and glycogen storage) and fat (minimum 0.5–1 g/kg for hormonal health). A typical bulk macro split is 30% protein, 45–50% carbs, 20–25% fat." },
            { q: "Can I build muscle without gaining fat?", a: "To a limited degree, yes — especially for beginners (newbie gains) and in body recomposition. However, for intermediate and advanced lifters, a controlled calorie surplus accelerates muscle growth significantly compared to maintenance calories. The goal is not zero fat gain — it is minimising fat gain relative to muscle gain through controlled surplus and high protein intake." },
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
              { label: "Lean Bulk Calculator", href: "/nutrition/lean-bulk-calculator" },
              { label: "Protein Powder Calculator", href: "/nutrition/protein-powder-calculator" },
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
