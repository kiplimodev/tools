import type { Metadata } from "next";
import Link from "next/link";
import DumbbellWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Dumbbell Weight Calculator — Volume & Load Across Sets | Denstar Fitness",
  description: "Use our free dumbbell weight calculator to compute total volume lifted with dumbbells across multiple sets and exercises in your workout.",
  openGraph: {
    title: "Dumbbell Weight Calculator — Volume & Load Across Sets | Denstar Fitness",
    description: "Use our free dumbbell weight calculator to compute total volume lifted with dumbbells across multiple sets and exercises in your workout.",
    url: "https://tools.denstarfitness.com/equipment/dumbbell-weight-calculator",
    images: [{ url: "/api/og?tool=dumbbell-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumbbell Weight Calculator | Denstar Fitness",
    description: "Calculate total volume lifted with dumbbells across sets and exercises.",
    images: ["/api/og?tool=dumbbell-weight-calculator"],
  },
};

export default function DumbbellWeightPage() {
  return (
    <>
      <DumbbellWeightClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What does a dumbbell weight calculator compute?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">dumbbell weight calculator</strong> computes total training volume — the sum of weight × sets × reps across all dumbbell exercises in a session. Unlike barbell training where load is a single value, dumbbell volume accounts for both dumbbells (the load per hand is multiplied by 2 for bilateral exercises). Tracking total session tonnage is the most objective measure of progressive overload over time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Standard dumbbell weight progressions</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Exercise</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Beginner</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intermediate</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Dumbbell press", "10–15 kg/hand", "20–30 kg/hand", "35–50 kg/hand"],
                  ["Dumbbell row", "12–18 kg/hand", "24–34 kg/hand", "38–55 kg/hand"],
                  ["Lateral raise", "5–8 kg/hand", "10–14 kg/hand", "16–22 kg/hand"],
                  ["Bicep curl", "8–12 kg/hand", "14–20 kg/hand", "22–30 kg/hand"],
                  ["Dumbbell RDL", "15–20 kg/hand", "25–35 kg/hand", "40–55 kg/hand"],
                ].map(([exercise, beg, int_, adv]) => (
                  <tr key={exercise} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{exercise}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{beg}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{int_}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Weights shown are per hand for bilateral exercises. Values for men; women's working weights are typically 50–70% of listed values.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "Are dumbbells as effective as a barbell for building muscle?", a: "Yes, for most muscle groups. Dumbbells offer greater range of motion and unilateral training — which corrects strength imbalances between sides and recruits more stabiliser muscles. Barbell exercises allow heavier absolute loads (useful for maximum strength development) and are mechanically superior for squats, deadlifts, and Olympic lifts. The best approach uses both." },
            { q: "How do I progress dumbbell weights without a gym?", a: "Without access to incremental dumbbell sets, use rep range progression: start at the lower end of your target rep range (e.g., 3×8) and work up to the top (3×12) before moving to the next heavier dumbbell. Alternatively, use tempo manipulation (slower eccentric phase), pause reps, or reduce rest periods to increase difficulty before the next weight is available." },
            { q: "Should I count dumbbell volume separately from barbell volume?", a: "For the purpose of tracking weekly volume per muscle group, count all sets regardless of implement. A dumbbell chest press set counts toward weekly chest volume the same as a barbell bench press set. When tracking progressive overload of a specific exercise, compare like-for-like: dumbbell press tonnage over time, not mixed with barbell press." },
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
              { label: "Barbell Calculator", href: "/strength/barbell-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "Plate Weight Calculator", href: "/strength/plate-weight-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
