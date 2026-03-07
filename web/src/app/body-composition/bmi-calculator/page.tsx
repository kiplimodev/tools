import type { Metadata } from "next";
import Link from "next/link";
import BmiClientPage from "./_client";

export const metadata: Metadata = {
  title: "BMI Calculator — Body Mass Index with Health Classification | Denstar Fitness",
  description: "Use our free BMI calculator to calculate your Body Mass Index from weight and height, with WHO health classification and what your result means.",
  openGraph: {
    title: "BMI Calculator — Body Mass Index with Health Classification | Denstar Fitness",
    description: "Use our free BMI calculator to calculate your Body Mass Index from weight and height, with WHO health classification and what your result means.",
    url: "https://tools.denstarfitness.com/body-composition/bmi-calculator",
    images: [{ url: "/api/og?tool=bmi-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator | Denstar Fitness",
    description: "Use our free BMI calculator to find your Body Mass Index and health classification.",
    images: ["/api/og?tool=bmi-calculator"],
  },
};

export default function Page() {
  return (
    <>
      <BmiClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a BMI calculator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">BMI calculator</strong> computes your Body Mass Index — a ratio of weight to height squared used to classify body weight relative to health risk. The formula is: BMI = weight (kg) ÷ height (m)². It is the most widely used screening tool for identifying potential weight-related health issues in adults.
          </p>
          <p>
            BMI is a population-level tool, not a precise individual health assessment. It does not distinguish between fat and muscle mass, nor does it account for fat distribution, age, or ethnicity. Use it as a starting point alongside other metrics like waist-to-hip ratio and body fat percentage.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">WHO BMI classification</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Classification</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">BMI range</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Health risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Underweight", "< 18.5", "Increased risk of nutritional deficiency"],
                  ["Normal weight", "18.5 – 24.9", "Lowest risk"],
                  ["Overweight", "25.0 – 29.9", "Increased metabolic risk"],
                  ["Obese class I", "30.0 – 34.9", "Moderate risk"],
                  ["Obese class II", "35.0 – 39.9", "High risk"],
                  ["Obese class III", "≥ 40.0", "Very high risk"],
                ].map(([cls, range, risk]) => (
                  <tr key={cls} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{cls}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{range}</td>
                    <td className="px-4 py-3 text-zinc-500 dark:text-zinc-400">{risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Source: World Health Organization (WHO) global BMI classification.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Limitations of BMI</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Athletes and muscular individuals", "High muscle mass raises BMI without elevated fat — many elite athletes are technically 'overweight' by BMI."],
              ["Older adults", "BMI may underestimate fat percentage in older adults who have lost muscle mass (sarcopenia) while maintaining total weight."],
              ["Ethnicity differences", "Health risk thresholds differ by ethnicity. Some guidelines recommend lower cutpoints (e.g. 23 for Asian adults) for the same risk level."],
              ["Fat distribution", "BMI does not capture where fat is stored. Abdominal fat (high waist circumference) carries much higher cardiovascular risk than hip/thigh fat."],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "What is a healthy BMI for adults?",
              a: "The WHO defines 18.5–24.9 as the normal/healthy weight range for adults. However, this is a population guideline. Individual health depends on many factors including body composition, fitness level, age, and genetics. BMI in the 'normal' range does not guarantee health, and BMI in the 'overweight' range does not always indicate poor health.",
            },
            {
              q: "Is BMI accurate for women vs men?",
              a: "BMI uses the same formula for both sexes. Women naturally carry a higher body fat percentage than men at the same BMI. A BMI of 25 corresponds to approximately 25–30% body fat in women and 20–25% in men. For a sex-adjusted assessment, use body fat percentage measurement.",
            },
            {
              q: "Can I use BMI for children?",
              a: "Standard adult BMI charts do not apply to children and teenagers. For those aged 2–19, use age- and sex-specific BMI-for-age percentile charts (CDC or WHO growth charts). A child's BMI is interpreted relative to other children of the same age and sex.",
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
              { label: "Ideal Weight Calculator", href: "/body-composition/ideal-weight-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
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
