import type { Metadata } from "next";
import Link from "next/link";
import WaistToHipClientPage from "./_client";

export const metadata: Metadata = {
  title: "Waist to Hip Ratio Calculator — Health Risk Assessment | Denstar Fitness",
  description: "Use our free waist to hip ratio calculator to measure your body shape and assess cardiovascular and metabolic health risk.",
  openGraph: {
    title: "Waist to Hip Ratio Calculator — Health Risk Assessment | Denstar Fitness",
    description: "Use our free waist to hip ratio calculator to measure your body shape and assess cardiovascular and metabolic health risk.",
    url: "https://tools.denstarfitness.com/body-composition/waist-to-hip-ratio-calculator",
    images: [{ url: "/api/og?tool=waist-to-hip-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waist to Hip Ratio Calculator | Denstar Fitness",
    description: "Use our free waist to hip ratio calculator to measure your body shape and assess cardiovascular and metabolic health risk.",
    images: ["/api/og?tool=waist-to-hip-ratio-calculator"],
  },
};

export default function WaistToHipPage() {
  return (
    <>
      <WaistToHipClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is the waist-to-hip ratio?</h2>
          <p>
            The <strong className="text-zinc-800 dark:text-zinc-200">waist-to-hip ratio (WHR)</strong> is a simple measurement of body fat distribution. It divides your waist circumference by your hip circumference. The result indicates whether you carry more weight around your abdomen (apple shape) or hips (pear shape) — and this distinction is strongly linked to cardiovascular disease and metabolic risk.
          </p>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">waist to hip ratio calculator</strong> is faster and more informative than BMI alone. BMI does not distinguish between muscle and fat, or where fat is stored. WHR does — and where fat is stored matters more than total fat for disease risk.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">The formula</h2>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 font-mono text-xs dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-zinc-900 dark:text-zinc-100">WHR = Waist circumference ÷ Hip circumference</p>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">Both measurements in the same unit (cm or inches).</p>
          </div>
          <p>Measure your waist at the narrowest point (usually just above the navel) and your hips at the widest point across the buttocks.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">WHO health risk classifications</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Risk Level</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Men (WHR)</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Women (WHR)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Low risk", "< 0.90", "< 0.80"],
                  ["Moderate risk", "0.90 – 0.99", "0.80 – 0.85"],
                  ["High risk", "≥ 1.00", "≥ 0.86"],
                ].map(([risk, men, women]) => (
                  <tr key={risk} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{risk}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{men}</td>
                    <td className="px-4 py-3 font-mono text-zinc-600 dark:text-zinc-400">{women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">Source: World Health Organization (WHO) guidelines on waist circumference and waist-hip ratio.</p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">WHR vs BMI — which is better?</h2>
          <p>
            BMI is calculated from weight and height alone and cannot distinguish fat from muscle, or abdominal fat from subcutaneous fat. WHR directly measures the fat distribution that drives metabolic and cardiovascular risk. Studies show WHR is a stronger predictor of heart disease and type 2 diabetes than BMI.
          </p>
          <p>
            For the most complete picture, use both: BMI for a general weight classification and WHR for health risk based on fat distribution.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "Where exactly should I measure my waist?",
              a: "Measure at the narrowest point of your torso, typically 1–2 cm above your navel. Stand relaxed, exhale gently, and take the measurement without pulling the tape tight. Do not suck in your stomach.",
            },
            {
              q: "Can I reduce my waist-to-hip ratio?",
              a: "Yes. A caloric deficit combined with resistance training reduces visceral (abdominal) fat over time, which lowers your waist measurement. Spot reduction does not work, but consistent fat loss preferentially reduces abdominal fat in most people.",
            },
            {
              q: "Is WHR more important than body fat percentage?",
              a: "They measure different things. Body fat percentage tells you how much of your weight is fat. WHR tells you where that fat is stored. Both are useful. Abdominal fat (high WHR) is metabolically active and more dangerous than fat stored in the hips and thighs.",
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
              { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
              { label: "Body Fat Calculator", href: "/body-composition/body-fat-calculator" },
              { label: "Waist-to-Height Ratio Calculator", href: "/body-composition/waist-to-height-ratio-calculator" },
              { label: "Ideal Weight Calculator", href: "/body-composition/ideal-weight-calculator" },
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
