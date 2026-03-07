import type { Metadata } from "next";
import Link from "next/link";
import VdotClientPage from "./_client";

export const metadata: Metadata = {
  title: "VDOT Calculator — Training Paces from Race Time | Denstar Fitness",
  description: "Use our free VDOT calculator to estimate your VDOT score and optimal training pace zones from a recent race time.",
  openGraph: {
    title: "VDOT Calculator — Training Paces from Race Time | Denstar Fitness",
    description: "Use our free VDOT calculator to estimate your VDOT score and optimal training pace zones from a recent race time.",
    url: "https://tools.denstarfitness.com/running/vdot-calculator",
    images: [{ url: "/api/og?tool=vdot-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VDOT Calculator | Denstar Fitness",
    description: "Use our free VDOT calculator to estimate your VDOT score and optimal training pace zones from a recent race time.",
    images: ["/api/og?tool=vdot-calculator"],
  },
};

export default function VdotCalculatorPage() {
  return (
    <>
      <VdotClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a VDOT calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">VDOT calculator</strong> converts a recent race result into a VDOT score — a number that represents your current aerobic fitness — and then outputs your optimal training paces for each intensity zone. It was developed by exercise physiologist Jack Daniels and is the foundation of his widely used running training system.
          </p>
          <p>
            VDOT is not a direct measurement of VO2 max. It is a performance-derived equivalent: two runners with the same race time have the same VDOT, regardless of their lab-measured oxygen uptake. This makes it practical — all you need is a recent race time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The five VDOT training zones</h2>
          <p>Jack Daniels defines five training intensities, each with a specific physiological purpose:</p>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Zone</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intensity</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Purpose</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["E", "Easy", "Aerobic base, recovery, injury prevention"],
                  ["M", "Marathon", "Goal marathon pace, aerobic development"],
                  ["T", "Threshold", "Lactate threshold, raising comfortably hard pace"],
                  ["I", "Interval", "VO2 max development, running economy"],
                  ["R", "Repetition", "Speed, neuromuscular power, running form"],
                ].map(([zone, label, purpose]) => (
                  <tr key={zone} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-bold text-emerald-600 dark:text-emerald-400">{zone}</td>
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{label}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Which race time to use</h2>
          <ul className="space-y-2">
            {[
              "Use a race from the last 8–12 weeks where you ran close to maximum effort.",
              "A 5K is ideal for most runners — short enough to be near maximum effort, long enough to reflect true aerobic fitness.",
              "Do not use a training run time. Training runs are intentionally slower than race pace and will underestimate your VDOT.",
              "If you have multiple races, use your most recent result at your best-prepared distance.",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950 list-none">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "How often should I recalculate my VDOT?",
              a: "Recalculate after every race or every 6–8 weeks of consistent training. As your fitness improves, your VDOT rises and your training paces should adjust accordingly. Running at outdated paces — too easy or too hard — reduces the effectiveness of your training.",
            },
            {
              q: "Can I use a half marathon or marathon time?",
              a: "Yes. The VDOT table covers all standard distances from 1500m to the marathon. Longer race results tend to be slightly less precise for calculating short-distance training paces, but still give a solid baseline.",
            },
            {
              q: "What is a good VDOT score?",
              a: "For recreational runners, a VDOT of 30–45 is typical. Competitive age-groupers often sit at 45–55. Elite runners exceed 70. Your VDOT is most useful as a personal benchmark — focus on raising your own number over time, not comparing to others.",
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
              { label: "Running Pace Calculator", href: "/running/running-pace-calculator" },
              { label: "Race Time Predictor", href: "/running/race-time-predictor" },
              { label: "Running Splits Calculator", href: "/running/running-splits-calculator" },
              { label: "Interval Calculator", href: "/running/interval-calculator" },
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
