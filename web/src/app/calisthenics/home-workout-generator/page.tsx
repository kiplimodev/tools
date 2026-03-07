import type { Metadata } from "next";
import Link from "next/link";
import HomeWorkoutClientPage from "./_client";

export const metadata: Metadata = {
  title: "Home Workout Generator — Bodyweight Plans by Goal | Denstar Fitness",
  description: "Use our free home workout generator to create a structured bodyweight workout plan tailored to your goal and available equipment.",
  openGraph: {
    title: "Home Workout Generator — Bodyweight Plans by Goal | Denstar Fitness",
    description: "Use our free home workout generator to create a structured bodyweight workout plan tailored to your goal and available equipment.",
    url: "https://tools.denstarfitness.com/calisthenics/home-workout-generator",
    images: [{ url: "/api/og?tool=home-workout-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Workout Generator | Denstar Fitness",
    description: "Generate a structured bodyweight workout plan based on your goal and available equipment.",
    images: ["/api/og?tool=home-workout-generator"],
  },
};

export default function HomeWorkoutGeneratorPage() {
  return (
    <>
      <HomeWorkoutClientPage />

      <article className="mx-auto mt-14 max-w-3xl space-y-10 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">What is a home workout generator?</h2>
          <p>
            A <strong className="text-zinc-800 dark:text-zinc-200">home workout generator</strong> creates a structured bodyweight training plan based on your goal (muscle gain, fat loss, or general fitness), experience level, and the equipment you have available. Unlike static workout templates, a generator adapts exercise selection, sets, reps, and rest periods to your specific profile — giving you a personalised starting programme without needing a gym.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">Effective bodyweight exercises by muscle group</h2>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-xs">
              <thead className="bg-zinc-50 dark:bg-zinc-900">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Muscle group</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Beginner</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Intermediate</th>
                  <th className="px-4 py-3 text-left font-semibold text-zinc-700 dark:text-zinc-300">Advanced</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["Chest / Triceps", "Incline push-ups", "Push-ups", "Ring push-ups, archer push-ups"],
                  ["Back / Biceps", "Band rows, dead hangs", "Pull-ups, inverted rows", "Weighted pull-ups, one-arm negatives"],
                  ["Quads", "Squats, step-ups", "Bulgarian split squats", "Pistol squats, jump squats"],
                  ["Glutes / Hamstrings", "Glute bridges", "Single-leg bridges, RDLs", "Nordic curls, single-leg RDLs"],
                  ["Core", "Planks, dead bugs", "Hollow holds, leg raises", "Dragon flags, ab wheel rollouts"],
                ].map(([group, beg, int_, adv]) => (
                  <tr key={group} className="bg-white dark:bg-zinc-950">
                    <td className="px-4 py-3 font-medium text-zinc-800 dark:text-zinc-200">{group}</td>
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
            { q: "Can bodyweight training build muscle?", a: "Yes, bodyweight training can build significant muscle — provided you apply the same principles as barbell training: progressive overload, sufficient volume, and adequate protein intake. The key is to continually progress to harder variations (e.g., push-up → archer push-up → ring push-up) rather than simply doing more reps of the same movement forever." },
            { q: "How often should I train at home?", a: "Three to four sessions per week is optimal for most goals. Full-body sessions on alternating days (Monday, Wednesday, Friday) allow adequate recovery. More advanced trainees can use upper/lower splits across four days. Daily training is possible for lower intensities (light mobility, walking, core work) but is unnecessary for strength development." },
            { q: "What equipment do I need for a home workout?", a: "A pull-up bar (doorframe or wall-mounted) and a set of resistance bands cover 90% of effective home training. Adding gymnastic rings, a dip station, or adjustable dumbbells expands exercise selection significantly. For pure bodyweight work, no equipment is needed — effective programmes exist using only floor space." },
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
              { label: "Push-Up Calculator", href: "/calisthenics/push-up-calculator" },
              { label: "Pull-Up Calculator", href: "/calisthenics/pull-up-calculator" },
              { label: "Training Volume Calculator", href: "/strength/training-volume-calculator" },
              { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-emerald-500 dark:hover:text-emerald-300">{l.label}</Link>
            ))}
          </div>
        </section>

      </article>
    </>
  );
}
