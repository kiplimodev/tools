import type { Metadata } from "next";
import Link from "next/link";
import PlateWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Plate Weight Calculator — Barbell Plate Combinations | Denstar Fitness",
  description: "Use our free plate weight calculator to find the exact plate combination needed to load a barbell to your target weight.",
  openGraph: {
    title: "Plate Weight Calculator — Barbell Plate Combinations | Denstar Fitness",
    description: "Use our free plate weight calculator to find the exact plate combination needed to load a barbell to your target weight.",
    url: "https://tools.denstarfitness.com/strength/plate-weight-calculator",
    images: [{ url: "/api/og?tool=plate-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plate Weight Calculator | Denstar Fitness",
    description: "Find the exact plate combination needed to load a barbell to your target weight.",
    images: ["/api/og?tool=plate-weight-calculator"],
  },
};

export default function PlateWeightPage() {
  return (
    <>
      <PlateWeightClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">How does a plate weight calculator work?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">plate weight calculator</strong> works by subtracting the barbell weight from your target total, dividing the remainder by 2 (for both sides), then selecting the optimal plate combination using the largest available plates first — a greedy algorithm that minimises the number of plates while reaching the exact target weight.
          </p>
          <p>
            If the target weight cannot be reached exactly with standard plates, the calculator shows the closest achievable weight or suggests adding fractional plates (0.5 kg or 1.25 kg increments).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Common barbell weights for popular lifts</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Lift</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Beginner</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intermediate</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Advanced (men)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Squat", "60–80 kg", "100–130 kg", "160–200+ kg"],
                  ["Bench press", "50–70 kg", "80–110 kg", "130–160+ kg"],
                  ["Deadlift", "70–90 kg", "120–150 kg", "180–220+ kg"],
                  ["Overhead press", "30–50 kg", "60–80 kg", "90–110+ kg"],
                ].map(([lift, beg, int_, adv]) => (
                  <tr key={lift} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{lift}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{beg}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{int_}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{adv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            { q: "What if I can't make the exact weight with standard plates?", a: "Standard plate increments (1.25 kg minimum) mean some weights are unreachable without fractional plates. The nearest reachable weight in both directions will be shown. Fractional plates (0.25 kg, 0.5 kg, 1 kg) allow fine-grained loading for linear progression programmes." },
            { q: "Should I count collars in the barbell weight?", a: "Collars vary by type — spring collars weigh approximately 0.1–0.2 kg per pair and are usually ignored. Locking collars (HG collars, etc.) can weigh 0.5–1.5 kg per pair and should be included if precision matters. Competition lifting always uses standardised collar weight." },
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
              { label: "1 Rep Max Calculator", href: "/strength/1-rep-max-calculator" },
              { label: "Powerlifting Calculator", href: "/strength/powerlifting-calculator" },
              { label: "RPE Calculator", href: "/strength/rpe-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
