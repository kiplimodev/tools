import type { Metadata } from "next";
import Link from "next/link";
import TDEEClientPage from "./_client";

export const metadata: Metadata = {
  title: "TDEE Calculator — Find Your Total Daily Energy Expenditure | Denstar Fitness",
  description: "Use our free TDEE calculator to find your Total Daily Energy Expenditure, BMR, and daily calorie needs using the Mifflin-St Jeor equation.",
  openGraph: {
    title: "TDEE Calculator — Find Your Total Daily Energy Expenditure | Denstar Fitness",
    description: "Use our free TDEE calculator to find your Total Daily Energy Expenditure, BMR, and daily calorie needs using the Mifflin-St Jeor equation.",
    url: "https://tools.denstarfitness.com/nutrition/tdee-calculator",
    images: [{ url: "/api/og?tool=tdee-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDEE Calculator | Denstar Fitness",
    description: "Use our free TDEE calculator to find your Total Daily Energy Expenditure, BMR, and daily calorie needs.",
    images: ["/api/og?tool=tdee-calculator"],
  },
};

export default function TDEEPage() {
  return (
    <>
      <TDEEClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a TDEE calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">TDEE calculator</strong> estimates the total number of calories your body burns in a day — including your basal metabolic rate (BMR) plus all activity. TDEE stands for Total Daily Energy Expenditure, and it is the single most important number for any nutrition goal, whether you want to lose fat, build muscle, or maintain your current weight.
          </p>
          <p>
            Eating below your TDEE creates a caloric deficit (fat loss). Eating above it creates a surplus (muscle gain). Matching it keeps your weight stable. Without knowing your TDEE, calorie targets are guesswork.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The Mifflin-St Jeor formula</h2>
          <p>
            This calculator uses the <strong className="text-zinc-800 dark:text-zinc-200">Mifflin-St Jeor equation</strong>, which is the most validated BMR formula for general populations and the one preferred by most registered dietitians.
          </p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-500 dark:text-zinc-400 mb-1">Men:</p>
            <p className="text-zinc-900 dark:text-zinc-100">BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age + 5</p>
            <p className="text-zinc-500 dark:text-zinc-400 mt-3 mb-1">Women:</p>
            <p className="text-zinc-900 dark:text-zinc-100">BMR = 10 × weight (kg) + 6.25 × height (cm) − 5 × age − 161</p>
          </div>
          <p>
            Your BMR is then multiplied by an activity factor to get TDEE:
          </p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Activity Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Description</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Multiplier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Sedentary", "Desk job, little or no exercise", "1.2"],
                  ["Light", "Light exercise 1–3 days/week", "1.375"],
                  ["Moderate", "Moderate exercise 3–5 days/week", "1.55"],
                  ["Very Active", "Hard exercise 6–7 days/week", "1.725"],
                  ["Extra Active", "Physical job + hard training", "1.9"],
                ].map(([level, desc, mult]) => (
                  <tr key={level} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{level}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{desc}</td>
                    <td className="px-4 py-3 font-mono text-zinc-800 dark:text-zinc-200">{mult}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How to use your TDEE</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Fat loss", "Eat 300–500 kcal below your TDEE. Aim to lose 0.5–1% of bodyweight per week."],
              ["Lean bulk", "Eat 200–300 kcal above your TDEE to build muscle with minimal fat gain."],
              ["Maintenance", "Match your TDEE intake to hold your current weight steady."],
              ["Recomposition", "Eat at or slightly below TDEE with high protein (2g/kg) and resistance training."],
            ].map(([goal, tip]) => (
              <li key={goal} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{goal}:</strong> {tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "How accurate is a TDEE calculator?",
              a: "TDEE calculators are accurate to within 10–15% for most people. They are a starting point, not a guarantee. Track your weight for 2–3 weeks and adjust your intake by 100–200 kcal if you are not seeing the expected change.",
            },
            {
              q: "What is the difference between BMR and TDEE?",
              a: "BMR (Basal Metabolic Rate) is the calories your body burns at complete rest — just to keep your heart beating and organs functioning. TDEE includes BMR plus the energy burned through all movement and exercise. TDEE is always higher than BMR.",
            },
            {
              q: "Does TDEE change over time?",
              a: "Yes. As your weight, muscle mass, age, or activity level change, your TDEE changes too. Recalculate it every 4–8 weeks or whenever your weight changes by more than 5 kg.",
            },
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
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
              { label: "Intermittent Fasting Calculator", href: "/nutrition/intermittent-fasting-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
              { label: "Lean Bulk Calculator", href: "/nutrition/lean-bulk-calculator" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
