import type { Metadata } from "next";
import Link from "next/link";
import CarnivoreClientPage from "./_client";

export const metadata: Metadata = {
  title: "Carnivore Macro Calculator — Protein & Fat Targets on Carnivore Diet | Denstar Fitness",
  description: "Use our free carnivore macro calculator to find your daily protein and fat targets on a carnivore diet based on your bodyweight and goal.",
  openGraph: {
    title: "Carnivore Macro Calculator — Protein & Fat Targets on Carnivore Diet | Denstar Fitness",
    description: "Use our free carnivore macro calculator to find your daily protein and fat targets on a carnivore diet based on your bodyweight and goal.",
    url: "https://tools.denstarfitness.com/nutrition/carnivore-macro-calculator",
    images: [{ url: "/api/og?tool=carnivore-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnivore Macro Calculator | Denstar Fitness",
    description: "Find your daily protein and fat targets on a carnivore diet.",
    images: ["/api/og?tool=carnivore-macro-calculator"],
  },
};

export default function CarnivorePage() {
  return (
    <>
      <CarnivoreClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a carnivore macro calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">carnivore macro calculator</strong> determines your daily protein and fat gram targets for a carnivore diet — an animal-only eating pattern that eliminates all plant-based foods. Since carnivore is a zero-carbohydrate diet, macros consist entirely of protein and fat. The ratio of protein to fat determines whether you are in a fat-loss, maintenance, or muscle-building configuration.
          </p>
          <p>
            On carnivore, fat serves as the primary energy source replacing carbohydrates, while protein targets remain the same as any other diet: 1.6–2.2 g/kg of bodyweight per day for muscle retention or growth.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Carnivore diet macro ratios by goal</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Protein</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Fat</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Best animal sources</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Fat loss", "2.0–2.5 g/kg", "Reduced (lean meats)", "Chicken breast, lean beef, fish"],
                  ["Maintenance", "1.8–2.2 g/kg", "Moderate", "Ribeye, salmon, eggs, lamb"],
                  ["Muscle gain", "1.8–2.2 g/kg", "Higher (fatty cuts)", "Ribeye, brisket, lamb shoulder, bacon"],
                  ["Therapeutic carnivore", "1.5–2.0 g/kg", "High", "Beef, organ meats, butter, tallow"],
                ].map(([goal, protein, fat, sources]) => (
                  <tr key={goal} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{protein}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{fat}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{sources}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Can you build muscle on a carnivore diet?", a: "Yes. Muscle building requires adequate protein and a calorie surplus — both achievable on a carnivore diet. Animal protein sources (beef, eggs, fish) have high biological value and contain all essential amino acids. The absence of carbohydrates may reduce glycogen-fuelled training performance for high-intensity or high-volume work, but this typically adapts after 4–6 weeks of fat adaptation." },
            { q: "Do you need to count macros on carnivore?", a: "Many carnivore dieters eat to satiety without formal tracking. However, counting macros on carnivore provides important visibility — particularly around protein targets, which can be missed when fat dominates the diet. Athletes and people with specific body composition goals benefit from tracking at least periodically to ensure they are hitting protein minimums." },
            { q: "What is the difference between carnivore and keto?", a: "Ketogenic diet allows up to 20–50 g of net carbohydrates per day and includes plant-based fats (avocado, olive oil, nuts). Carnivore is a strict subset of keto that eliminates all plant foods. Both achieve nutritional ketosis, but carnivore additionally removes all plant compounds, lectins, oxalates, and fibre — which proponents argue reduces inflammation for sensitive individuals." },
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
              { label: "Fat Intake Calculator", href: "/nutrition/fat-intake-calculator" },
              { label: "Protein Powder Calculator", href: "/nutrition/protein-powder-calculator" },
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
