import Link from "next/link";

const tools = [
  {
    title: "Running Pace Calculator",
    href: "/tools/running/running-pace-calculator",
    description: "Dial in race pace, speed, and splits for your runs.",
    badge: "Running",
  },
  {
    title: "TDEE Calculator",
    href: "/tools/nutrition/tdee-calculator",
    description: "Estimate daily calorie needs with the Mifflin-St Jeor equation.",
    badge: "Nutrition",
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <header className="space-y-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
          <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden />
          Denstar Fitness Tools
        </div>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
          Precision calculators for athletes and coaches
        </h1>
        <p className="text-lg text-zinc-600 sm:text-xl">
          Science-backed tools for running, nutrition, and strength. Minimal UI. Fast results.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-zinc-500">
          <span>Next.js 16</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Tailwind</span>
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-500">Tools</p>
            <h2 className="text-2xl font-semibold text-zinc-900">Available calculators</h2>
          </div>
          <Link
            href="https://github.com"
            className="hidden items-center gap-2 rounded-full border border-zinc-200 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-zinc-300 md:inline-flex"
          >
            View roadmap
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                  {tool.badge}
                </span>
                <span className="text-xs font-medium text-zinc-500">Open tool →</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-zinc-900">{tool.title}</h3>
                <p className="text-sm text-zinc-600">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Accuracy</p>
          <p className="text-lg font-semibold text-zinc-900">Pure TypeScript formulas</p>
          <p className="text-sm text-zinc-600">All calculations live in isolated, testable functions.</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Speed</p>
          <p className="text-lg font-semibold text-zinc-900">Instant GET-based updates</p>
          <p className="text-sm text-zinc-600">Forms use URL params so results are shareable.</p>
        </div>
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">Design</p>
          <p className="text-lg font-semibold text-zinc-900">Minimal, premium UI</p>
          <p className="text-sm text-zinc-600">Geist font, generous spacing, and focus on clarity.</p>
        </div>
      </section>
    </div>
  );
}
