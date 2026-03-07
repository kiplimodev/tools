import type { Metadata } from "next";
import Link from "next/link";
import IdealWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator — Devine, Hamwi, Robinson & Miller Formulas | Denstar Fitness",
  description: "Use our free ideal weight calculator to find your ideal body weight range using four established formulas: Devine, Hamwi, Robinson, and Miller.",
  openGraph: {
    title: "Ideal Weight Calculator — Devine, Hamwi, Robinson & Miller Formulas | Denstar Fitness",
    description: "Use our free ideal weight calculator to find your ideal body weight range using four established formulas: Devine, Hamwi, Robinson, and Miller.",
    url: "https://tools.denstarfitness.com/body-composition/ideal-weight-calculator",
    images: [{ url: "/api/og?tool=ideal-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Weight Calculator | Denstar Fitness",
    description: "Use our free ideal weight calculator to find your ideal body weight from four formulas.",
    images: ["/api/og?tool=ideal-weight-calculator"],
  },
};

export default function IdealWeightPage() {
  return (
    <>
      <IdealWeightClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is an ideal weight calculator?</h2>
          <p>
            An <strong className="text-zinc-800 dark:text-zinc-200">ideal weight calculator</strong> estimates the body weight considered optimal for a given height based on established clinical formulas. This calculator uses four formulas — <strong className="text-zinc-800 dark:text-zinc-200">Devine</strong>, <strong className="text-zinc-800 dark:text-zinc-200">Hamwi</strong>, <strong className="text-zinc-800 dark:text-zinc-200">Robinson</strong>, and <strong className="text-zinc-800 dark:text-zinc-200">Miller</strong> — and reports the range across all four as your reference window.
          </p>
          <p>
            These formulas were originally developed for clinical drug dosing, not aesthetic goals. They represent a statistical ideal based on population health data, not a target for physical appearance. Use them as a health reference, not a fitness goal.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Ideal weight formulas</h2>
          <div className="space-y-3">
            {[
              { name: "Devine Formula (1974)", male: "50 kg + 2.3 kg per inch over 5 ft", female: "45.5 kg + 2.3 kg per inch over 5 ft", note: "Most widely used in clinical practice for drug dosing." },
              { name: "Hamwi Formula (1964)", male: "48 kg + 2.7 kg per inch over 5 ft", female: "45.5 kg + 2.2 kg per inch over 5 ft", note: "Originally developed for insulin dosing. Gives slightly higher estimates than Devine." },
              { name: "Robinson Formula (1983)", male: "52 kg + 1.9 kg per inch over 5 ft", female: "49 kg + 1.7 kg per inch over 5 ft", note: "Derived from actuarial insurance data. Tends to give moderate estimates." },
              { name: "Miller Formula (1983)", male: "56.2 kg + 1.41 kg per inch over 5 ft", female: "53.1 kg + 1.36 kg per inch over 5 ft", note: "Gives the highest estimates. More appropriate for larger-framed individuals." },
            ].map(({ name, male, female, note }) => (
              <div key={name} className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
                <p className="font-semibold text-zinc-800 dark:text-zinc-200 mb-2">{name}</p>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-1">Male: {male}</p>
                <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 mb-2">Female: {female}</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 italic">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "Should I target the ideal weight from these formulas?",
              a: "These formulas describe a statistical average for a given height — not a personal health target. A muscular person may weigh 10–15 kg above their 'ideal weight' while having excellent health markers. Focus on body fat percentage, fitness level, and metabolic health rather than hitting a specific number on these charts.",
            },
            {
              q: "Why do the four formulas give different results?",
              a: "Each formula was derived from different population datasets and developed for different clinical purposes. The variation across formulas (typically ±5 kg) reflects genuine uncertainty in what constitutes 'ideal' weight. The range across all four gives a more realistic target window than any single formula.",
            },
            {
              q: "What weight should I set as my goal?",
              a: "Rather than targeting a specific weight, focus on body composition goals: a body fat percentage in the fitness category (14–17% for men, 21–24% for women), normal waist circumference, and consistent performance in strength and endurance measures. Weight is an output, not an input.",
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
              { label: "Lean Body Mass Calculator", href: "/body-composition/lean-body-mass-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
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
