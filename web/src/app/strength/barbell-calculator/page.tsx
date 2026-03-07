import type { Metadata } from "next";
import Link from "next/link";
import BarbellClientPage from "./_client";

export const metadata: Metadata = {
  title: "Barbell Calculator — Weight Plates Per Side | Denstar Fitness",
  description: "Use our free barbell calculator to find the exact weight plates needed on each side of the barbell for any target load.",
  openGraph: {
    title: "Barbell Calculator — Weight Plates Per Side | Denstar Fitness",
    description: "Use our free barbell calculator to find the exact weight plates needed on each side of the barbell for any target load.",
    url: "https://tools.denstarfitness.com/strength/barbell-calculator",
    images: [{ url: "/api/og?tool=barbell-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbell Calculator | Denstar Fitness",
    description: "Find the exact weight plates needed per side for any target barbell load.",
    images: ["/api/og?tool=barbell-calculator"],
  },
};

export default function BarbellPage() {
  return (
    <>
      <BarbellClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How to use a barbell calculator</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">barbell calculator</strong> tells you exactly which weight plates to load on each side of the barbell to reach your target total weight. To use it: enter your target weight and your barbell weight — the calculator subtracts the bar, divides the remainder by 2, then finds the optimal plate combination using the largest plates first.
          </p>
          <p>
            Standard barbells weigh 20 kg (44 lb) for Olympic bars. Women's Olympic bars weigh 15 kg (33 lb). Specialty bars (trap bar, safety squat bar, cambered bar) vary from 20–30 kg.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Standard weight plate sizes</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Metric</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Imperial</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Colour (IPF)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["25 kg", "55 lb", "Red"],
                  ["20 kg", "45 lb", "Blue"],
                  ["15 kg", "35 lb", "Yellow"],
                  ["10 kg", "25 lb", "Green"],
                  ["5 kg", "11 lb", "White"],
                  ["2.5 kg", "5.5 lb", "Black"],
                  ["1.25 kg", "2.75 lb", "Chrome / silver"],
                ].map(([metric, imperial, colour]) => (
                  <tr key={metric} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-medium text-zinc-800 dark:text-zinc-200">{metric}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{imperial}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{colour}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "How much does an Olympic barbell weigh?", a: "A standard men's Olympic barbell (used in powerlifting and weightlifting competition) weighs 20 kg (44 lb). Women's Olympic barbells weigh 15 kg (33 lb). Many commercial gyms use 15 kg bars or non-standard bars — always check the bar weight before calculating plate load." },
            { q: "What is the heaviest barbell setup possible?", a: "A standard Olympic barbell with 4 × 25 kg plates per side = 20 kg (bar) + 200 kg (plates) = 220 kg total. With fractional plates and specialty plates up to 50 kg, loaded barbells in world-record powerlifting exceed 500 kg on specialty equipment." },
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
              { label: "Plate Weight Calculator", href: "/strength/plate-weight-calculator" },
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
