import type { Metadata } from "next";
import Link from "next/link";
import WaistToHeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Waist-to-Height Ratio Calculator — Assess Cardiovascular Health Risk | Denstar Fitness",
  description: "Use our free waist-to-height ratio calculator to assess your cardiovascular and metabolic health risk. Simple, reliable, no BMI required.",
  openGraph: {
    title: "Waist-to-Height Ratio Calculator — Assess Cardiovascular Health Risk | Denstar Fitness",
    description: "Use our free waist-to-height ratio calculator to assess your cardiovascular and metabolic health risk. Simple, reliable, no BMI required.",
    url: "https://tools.denstarfitness.com/body-composition/waist-to-height-ratio-calculator",
    images: [{ url: "/api/og?tool=waist-to-height-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waist-to-Height Ratio Calculator | Denstar Fitness",
    description: "Use our free waist-to-height ratio calculator to assess cardiovascular health risk.",
    images: ["/api/og?tool=waist-to-height-ratio-calculator"],
  },
};

export default function Page() {
  return (
    <>
      <WaistToHeightClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is the waist-to-height ratio?</h2>
          <p>
            The <strong className="text-zinc-800 dark:text-zinc-200">waist-to-height ratio (WHtR)</strong> divides your waist circumference by your height, both in the same unit. A ratio below 0.5 is the universally recommended threshold for good cardiometabolic health — often summarised as <em>"keep your waist circumference to less than half your height."</em>
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">waist-to-height ratio calculator</strong> is one of the strongest single predictors of cardiovascular disease risk — more accurate than BMI and comparable to waist-to-hip ratio, while requiring only two measurements.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">WHtR health risk thresholds</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">WHtR</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Classification</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Risk level</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["< 0.40", "Extremely slim", "Possible underweight risk"],
                  ["0.40 – 0.49", "Healthy", "Low cardiovascular risk"],
                  ["0.50 – 0.59", "Overweight", "Increased risk — action advised"],
                  ["≥ 0.60", "Obese", "High risk — medical review recommended"],
                ].map(([ratio, cls, risk]) => (
                  <tr key={ratio} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-mono font-medium text-zinc-800 dark:text-zinc-200">{ratio}</td>
                    <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400">{cls}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">The 0.5 boundary applies equally to men and women and across all ethnicities — a key advantage over waist-to-hip ratio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">WHtR vs BMI vs waist-to-hip ratio</h2>
          <p>
            Multiple meta-analyses show WHtR outperforms BMI in predicting cardiometabolic risk, hypertension, and type 2 diabetes. The single boundary (0.5) applies regardless of sex, ethnicity, or age — making it far simpler to interpret than BMI tables or sex-specific WHR cutpoints.
          </p>
          <p>
            For the most complete assessment, measure all three: BMI for general weight classification, WHtR for abdominal obesity screening, and body fat percentage for compositional detail.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "How do I measure my waist correctly?",
              a: "Measure at the narrowest point of your torso — typically 1–2 cm above the navel. Stand relaxed, exhale gently, and take the measurement without pulling the tape tight or sucking in your stomach. Consistency in measurement point is more important than the exact anatomical location.",
            },
            {
              q: "Is 0.5 the threshold for all populations?",
              a: "Yes — the WHtR threshold of 0.5 is unique in that it applies consistently across sex, ethnicity, and age groups. This is one of its key advantages over BMI and waist-to-hip ratio, both of which require different cutpoints for different groups.",
            },
            {
              q: "Can improving waist-to-height ratio reduce disease risk?",
              a: "Yes. Reducing visceral (abdominal) fat through a calorie deficit, increased physical activity, and resistance training directly improves WHtR and substantially reduces cardiovascular and metabolic risk. Even modest reductions (2–5 cm in waist circumference) show measurable health improvements.",
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
              { label: "Waist-to-Hip Ratio Calculator", href: "/body-composition/waist-to-hip-ratio-calculator" },
              { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Body Measurement Calculator", href: "/body-composition/body-measurement-calculator" },
              { label: "Ideal Weight Calculator", href: "/body-composition/ideal-weight-calculator" },
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
