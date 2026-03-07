import type { Metadata } from "next";
import Link from "next/link";
import BodyMeasurementClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Measurement Calculator — Track Body Composition Changes | Denstar Fitness",
  description: "Use our free body measurement calculator to estimate body composition from circumference measurements and track changes over time.",
  openGraph: {
    title: "Body Measurement Calculator — Track Body Composition Changes | Denstar Fitness",
    description: "Use our free body measurement calculator to estimate body composition from circumference measurements and track changes over time.",
    url: "https://tools.denstarfitness.com/body-composition/body-measurement-calculator",
    images: [{ url: "/api/og?tool=body-measurement-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Measurement Calculator | Denstar Fitness",
    description: "Use our free body measurement calculator to estimate body composition from girth measurements.",
    images: ["/api/og?tool=body-measurement-calculator"],
  },
};

export default function BodyMeasurementPage() {
  return (
    <>
      <BodyMeasurementClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why track body measurements?</h2>
          <p>
            Body measurements — also called girth measurements or circumference measurements — are one of the most practical ways to track body composition changes over time. Unlike the scale, which measures total mass, body measurements reveal <em>where</em> your body is changing: losing fat around the waist, gaining muscle in the arms and chest, or both simultaneously.
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">body measurement calculator</strong> uses your circumference data to estimate body fat percentage and lean body mass using validated formulas, providing a fuller picture than weight alone.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Key measurement sites</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Chest", "Measure at the nipple line, arms relaxed at sides. Best taken at the end of a normal exhale."],
              ["Waist", "Measure at the narrowest point (above the navel). Exhale gently — do not suck in."],
              ["Hips", "Measure at the widest point across the buttocks, feet together."],
              ["Upper arm (bicep)", "Measure at the midpoint between shoulder and elbow, arm relaxed at side."],
              ["Thigh", "Measure at the midpoint between the hip and knee crease."],
              ["Calf", "Measure at the widest point of the lower leg."],
            ].map(([site, instruction]) => (
              <li key={site} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{site}:</strong> {instruction}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Tips for consistent tracking</h2>
          <p>Measurement accuracy depends on consistency, not perfection. Follow the same protocol every time:</p>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 space-y-2 text-xs dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-700 dark:text-zinc-300">• Measure at the same time of day (morning before food is ideal)</p>
            <p className="text-zinc-700 dark:text-zinc-300">• Use a flexible fabric tape measure, not a metal tape</p>
            <p className="text-zinc-700 dark:text-zinc-300">• Hold the tape parallel to the floor at each site</p>
            <p className="text-zinc-700 dark:text-zinc-300">• Take each measurement twice and average the results</p>
            <p className="text-zinc-700 dark:text-zinc-300">• Measure every 2–4 weeks, not daily — changes take time to register</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "Are body measurements better than weighing yourself?",
              a: "They are complementary. The scale measures total mass — it cannot tell you if you gained muscle or lost fat. Body measurements track dimensional changes in specific body regions, making them better for detecting body recomposition. Using both together gives the most complete picture.",
            },
            {
              q: "How long until I see changes in measurements?",
              a: "Significant changes in body measurements typically take 4–8 weeks of consistent training and nutrition to register. Waist circumference is often the fastest to change with fat loss. Arm and chest measurements change more slowly with muscle gain. Expect to wait 6–12 weeks for clear trends.",
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
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Waist-to-Hip Ratio Calculator", href: "/body-composition/waist-to-hip-ratio-calculator" },
              { label: "Waist-to-Height Ratio Calculator", href: "/body-composition/waist-to-height-ratio-calculator" },
              { label: "Lean Body Mass Calculator", href: "/body-composition/lean-body-mass-calculator" },
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
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
