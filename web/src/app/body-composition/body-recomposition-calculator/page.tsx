import type { Metadata } from "next";
import Link from "next/link";
import BodyRecompositionClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Recomposition Calculator — Lose Fat & Build Muscle | Denstar Fitness",
  description: "Use our free body recomposition calculator to project changes in fat mass and lean mass over time with a personalised plan.",
  openGraph: {
    title: "Body Recomposition Calculator — Lose Fat & Build Muscle | Denstar Fitness",
    description: "Use our free body recomposition calculator to project changes in fat mass and lean mass over time with a personalised plan.",
    url: "https://tools.denstarfitness.com/body-composition/body-recomposition-calculator",
    images: [{ url: "/api/og?tool=body-recomposition-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Recomposition Calculator | Denstar Fitness",
    description: "Use our free body recomposition calculator to project changes in fat mass and lean mass over time.",
    images: ["/api/og?tool=body-recomposition-calculator"],
  },
};

export default function BodyRecompositionPage() {
  return (
    <>
      <BodyRecompositionClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is body recomposition?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Body recomposition</strong> is the process of simultaneously reducing body fat and increasing lean muscle mass. Unlike a traditional bulk (caloric surplus) or cut (caloric deficit), recomposition aims to change your body composition without a significant change in total body weight.
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">body recomposition calculator</strong> projects your expected fat loss and muscle gain over a set timeframe based on your current body composition, calorie intake, and training status. It helps you set realistic expectations and track whether your approach is working.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Who benefits most from recomposition?</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Beginners", "New to training respond well to recomposition because their muscles are highly sensitive to the training stimulus, even in a slight deficit."],
              ["Returning trainees", "People returning after a long break regain lost muscle quickly due to muscle memory, making recomposition very effective."],
              ["Higher body fat", "Those with more fat to lose can fuel muscle growth from stored fat while in a modest deficit — a genuine metabolic advantage."],
              ["Intermediate trainees", "With precise nutrition and progressive overload, experienced lifters can achieve slow recomposition, though results are more gradual."],
            ].map(([type, desc]) => (
              <li key={type} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{type}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The recomposition formula</h2>
          <p>Successful body recomposition requires three things in precise balance:</p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Variable</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Target</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Calories", "TDEE − 200 to − 300 kcal", "Small deficit burns fat without stalling muscle growth"],
                  ["Protein", "2.0 – 2.4 g per kg body weight", "High protein preserves and builds lean tissue in a deficit"],
                  ["Training", "Progressive overload, 3–5 days/week", "Resistance training is the stimulus for muscle retention and growth"],
                ].map(([v, t, w]) => (
                  <tr key={v} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{v}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{t}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{w}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "How long does body recomposition take?",
              a: "Recomposition is slower than a dedicated bulk or cut. Expect visible changes over 3–6 months of consistent training and nutrition. The scale may barely move while your body composition changes significantly — use photos and body measurements, not just weight, to track progress.",
            },
            {
              q: "Can advanced lifters recompose?",
              a: "Advanced lifters can achieve recomposition, but at a much slower rate. At this stage, a structured bulk/cut cycle is usually more time-efficient. Recomposition is most productive for beginners, returners, and those with higher body fat.",
            },
            {
              q: "Do I need to track calories for recomposition?",
              a: "Calorie tracking significantly improves results. Without it, most people underestimate intake (eating too much for a deficit) or overestimate protein (getting too little to support muscle retention). Even rough tracking — using a food diary for 2–4 weeks — dramatically improves outcomes.",
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
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Lean Body Mass Calculator", href: "/body-composition/lean-body-mass-calculator" },
              { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
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
