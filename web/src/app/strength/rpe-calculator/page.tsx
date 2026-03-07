import type { Metadata } from "next";
import Link from "next/link";
import RpeClientPage from "./_client";

export const metadata: Metadata = {
  title: "RPE Calculator — Rate of Perceived Exertion for Strength Training | Denstar Fitness",
  description: "Use our free RPE calculator to find your working weight or reps at any RPE based on your training max. Programme by feel, not just percentage.",
  openGraph: {
    title: "RPE Calculator — Rate of Perceived Exertion for Strength Training | Denstar Fitness",
    description: "Use our free RPE calculator to find your working weight or reps at any RPE based on your training max. Programme by feel, not just percentage.",
    url: "https://tools.denstarfitness.com/strength/rpe-calculator",
    images: [{ url: "/api/og?tool=rpe-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPE Calculator | Denstar Fitness",
    description: "Find your working weight at any RPE based on your training max.",
    images: ["/api/og?tool=rpe-calculator"],
  },
};

export default function RpePage() {
  return (
    <>
      <RpeClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is RPE in strength training?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">RPE (Rate of Perceived Exertion)</strong> in strength training is a 1–10 scale representing how many reps you had left in reserve at the end of a set. RPE 10 = maximum effort, no reps left. RPE 8 = 2 reps left in reserve. RPE 6 = 4 reps left. An <strong className="text-zinc-800 dark:text-zinc-200">RPE calculator</strong> converts your training max into the appropriate working weight for any target RPE and rep count.
          </p>
          <p>
            RPE-based programming adapts to daily readiness — on days when you feel strong, you lift heavier; on fatigued days, you autoregulate downward. This makes it superior to fixed-percentage programming for advanced lifters.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">RPE to percentage of 1RM reference table</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">RPE</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">1 rep</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">3 reps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">5 reps</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">8 reps</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["10", "100%", "94%", "89%", "82%"],
                  ["9.5", "98%", "92%", "87%", "80%"],
                  ["9", "96%", "91%", "85%", "78%"],
                  ["8.5", "94%", "89%", "83%", "76%"],
                  ["8", "92%", "87%", "81%", "75%"],
                  ["7", "88%", "83%", "77%", "70%"],
                ].map(([rpe, r1, r3, r5, r8]) => (
                  <tr key={rpe} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{rpe}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{r1}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{r3}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{r5}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{r8}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How accurate is RPE for beginners?", a: "RPE requires experience to use accurately. Beginners consistently underestimate RPE — they think they are at RPE 8 when they actually have 4–5 reps left. RPE-based programming is most valuable for intermediate and advanced lifters who have trained consistently for 1–2+ years and can accurately gauge their proximity to failure." },
            { q: "What is the difference between RPE and RIR?", a: "RIR (Reps in Reserve) is essentially the inverse of RPE. RPE 10 = 0 RIR (no reps left). RPE 8 = 2 RIR. RPE 6 = 4 RIR. Many coaches prefer RIR because it is more intuitive: 'I have 2 reps left' is easier to assess than 'this is an RPE 8'." },
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
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "Barbell Calculator", href: "/strength/barbell-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
