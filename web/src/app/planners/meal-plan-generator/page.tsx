import type { Metadata } from "next";
import Link from "next/link";
import MealPlanGeneratorClientPage from "./_client";

export const metadata: Metadata = {
  title: "Meal Plan Generator — Daily Meal Plans by Calorie & Macro Target | Denstar Fitness",
  description: "Use our free meal plan generator to create a structured daily meal plan tailored to your calorie and macro targets.",
  openGraph: {
    title: "Meal Plan Generator — Daily Meal Plans by Calorie & Macro Target | Denstar Fitness",
    description: "Use our free meal plan generator to create a structured daily meal plan tailored to your calorie and macro targets.",
    url: "https://tools.denstarfitness.com/planners/meal-plan-generator",
    images: [{ url: "/api/og?tool=meal-plan-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Plan Generator | Denstar Fitness",
    description: "Generate a structured daily meal plan tailored to your calorie and macro targets.",
    images: ["/api/og?tool=meal-plan-generator"],
  },
};

export default function MealPlanGeneratorPage() {
  return (
    <>
      <MealPlanGeneratorClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a meal plan generator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">meal plan generator</strong> creates a structured daily eating plan based on your calorie target, macro split, number of meals, and food preferences. Rather than deciding what to eat at each meal from scratch, a generator pre-distributes your daily targets across meals — ensuring each meal contributes the right amount of protein, carbohydrates, and fat to your daily totals.
          </p>
          <p>
            Structured meal plans significantly improve diet adherence by removing decision fatigue. Research consistently shows that people who plan meals in advance consume fewer calories, eat more protein, and are more likely to achieve body composition goals than those who eat reactively.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Meal frequency recommendations by goal</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Goal</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Meals per day</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Fat loss", "3–4", "Higher frequency helps manage hunger; protein per meal promotes satiety"],
                  ["Muscle gain", "4–5", "Distributing protein across meals optimises muscle protein synthesis"],
                  ["Maintenance", "3–4", "Flexible — match lifestyle and hunger patterns"],
                  ["Intermittent fasting (16:8)", "2–3 (in window)", "Concentrate daily protein across fewer, larger meals"],
                ].map(([goal, meals, note]) => (
                  <tr key={goal} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{goal}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{meals}</td>
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
            { q: "How much protein should each meal contain?", a: "Research suggests 0.4–0.55 g/kg of bodyweight per meal maximally stimulates muscle protein synthesis in a single sitting. For an 80 kg person, this is approximately 32–44 g of protein per meal. Spreading protein intake across 3–5 meals throughout the day — rather than eating it all in one or two sittings — optimises the total muscle-building signal." },
            { q: "Should I eat the same meals every day?", a: "Consistency makes tracking easier and reduces decision fatigue, but nutritional variety is important for micronutrient coverage. A practical approach: rotate 3–4 meal templates for each eating occasion, keeping macros roughly consistent while varying the specific protein source, vegetables, and carbohydrate choices. This balances simplicity with nutritional breadth." },
            { q: "What is the best meal timing for training?", a: "Consume a protein-containing meal 2–3 hours before training and within 2 hours after training to optimise muscle protein synthesis. Pre-training carbohydrates improve performance for high-intensity or high-volume sessions. Post-training is an elevated anabolic window — prioritise protein here. Exact timing within these windows matters less than hitting total daily protein and calorie targets." },
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
              { label: "Intermittent Fasting Calculator", href: "/nutrition/intermittent-fasting-calculator" },
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
