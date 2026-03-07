import type { Metadata } from "next";
import Link from "next/link";
import LeanBodyMassClientPage from "./_client";

export const metadata: Metadata = {
  title: "Lean Body Mass Calculator — Find Your Fat-Free Mass | Denstar Fitness",
  description: "Use our free lean body mass calculator to find your fat-free mass from weight and height using the Boer, James, and Hume formulas.",
  openGraph: {
    title: "Lean Body Mass Calculator — Find Your Fat-Free Mass | Denstar Fitness",
    description: "Use our free lean body mass calculator to find your fat-free mass from weight and height using the Boer, James, and Hume formulas.",
    url: "https://tools.denstarfitness.com/body-composition/lean-body-mass-calculator",
    images: [{ url: "/api/og?tool=lean-body-mass-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Body Mass Calculator | Denstar Fitness",
    description: "Use our free lean body mass calculator to find your fat-free mass using the Boer, James, and Hume formulas.",
    images: ["/api/og?tool=lean-body-mass-calculator"],
  },
};

export default function LeanBodyMassPage() {
  return (
    <>
      <LeanBodyMassClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is lean body mass?</h2>
          <p>
            <strong className="text-zinc-800 dark:text-zinc-200">Lean body mass (LBM)</strong> is the weight of everything in your body except fat — your muscles, bones, organs, blood, and water. It is also called fat-free mass. A <strong className="text-zinc-800 dark:text-zinc-200">lean body mass calculator</strong> estimates this figure from your total weight and height without requiring body fat measurement equipment.
          </p>
          <p>
            Knowing your lean body mass is more useful than knowing your total weight for most fitness goals. Protein targets, medication dosing, and athletic performance benchmarks are all based on LBM rather than total body weight.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Lean body mass formulas</h2>
          <p>This calculator uses three established formulas and reports all three results:</p>
          <div className="space-y-3">
            {[
              {
                name: "Boer Formula (most accurate)",
                male: "LBM = 0.407 × weight (kg) + 0.267 × height (cm) − 19.2",
                female: "LBM = 0.252 × weight (kg) + 0.473 × height (cm) − 48.3",
                note: "Best overall accuracy across diverse populations.",
              },
              {
                name: "James Formula",
                male: "LBM = 1.1 × weight − 128 × (weight / height)²",
                female: "LBM = 1.07 × weight − 148 × (weight / height)²",
                note: "Commonly used in clinical pharmacology for drug dosing.",
              },
              {
                name: "Hume Formula",
                male: "LBM = 0.3281 × weight (kg) + 0.33929 × height (cm) − 29.5336",
                female: "LBM = 0.29569 × weight (kg) + 0.41813 × height (cm) − 43.2933",
                note: "Derived from large population studies, good for average-build adults.",
              },
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

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Why lean body mass matters</h2>
          <ul className="space-y-2 list-none">
            {[
              ["Protein targets", "Most sports nutrition guidelines recommend 1.6–2.2g of protein per kg of lean body mass per day for muscle retention and growth."],
              ["Fat loss goals", "Tracking LBM over time confirms you are losing fat — not muscle. A good fat loss phase preserves LBM while reducing total weight."],
              ["Strength standards", "Relative strength benchmarks (e.g. 1.5× bodyweight squat) are more meaningful when adjusted for your LBM."],
              ["Medication dosing", "Certain medications and supplements are dosed by lean body mass for accuracy, not total weight."],
            ].map(([label, desc]) => (
              <li key={label} className="flex gap-3 rounded-lg border border-zinc-100 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950">
                <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                <span><strong className="text-zinc-800 dark:text-zinc-200">{label}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Frequently asked questions</h2>
          {[
            {
              q: "What is the difference between lean body mass and muscle mass?",
              a: "Lean body mass includes all non-fat tissue: muscle, bone, organs, and water. Muscle mass is just the skeletal muscle component. LBM is always higher than muscle mass alone. Most fitness calculators use LBM because it is easier to estimate without a DEXA scan.",
            },
            {
              q: "Is lean body mass the same as fat-free mass?",
              a: "Yes — they are the same thing. Both terms refer to your total weight minus fat mass. Some sources use 'lean body mass' to include a small amount of essential fat (stored in the nervous system and organs), but in practice the two terms are used interchangeably.",
            },
            {
              q: "How can I increase my lean body mass?",
              a: "Progressive resistance training (lifting weights) combined with adequate protein intake (1.6–2.2g per kg LBM) is the most effective approach. Sleep, recovery, and a slight caloric surplus also support LBM growth over time.",
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
              { label: "Body Recomposition Calculator", href: "/body-composition/body-recomposition-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
              { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
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
