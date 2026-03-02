import Link from "next/link";
import { registry, getAllCategories, getToolsByCategory } from "@/registry";

const FEATURED_SLUGS = [
  "running-pace-calculator",
  "tdee-calculator",
  "bmi-calculator",
  "1-rep-max-calculator",
];

const pillars = [
  {
    label: "Accuracy",
    title: "Pure TypeScript formulas",
    copy: "All calculations live in isolated, testable functions for predictable results.",
  },
  {
    label: "Speed",
    title: "Instant URL-based state",
    copy: "Forms sync with URL params so you can bookmark and share calculations effortlessly.",
  },
  {
    label: "Design",
    title: "Minimal, premium UI",
    copy: "Geist type, glassmorphism cards, and motion cues keep the focus on your metrics.",
  },
];

function formatCategory(cat: string): string {
  return cat
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Home() {
  const featured = FEATURED_SLUGS
    .map((slug) => registry.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => t !== undefined);

  const categories = getAllCategories();

  return (
    <div className="space-y-12">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/60 p-8 shadow-glow backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/70 sm:p-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/60 via-white/40 to-indigo-100/50 opacity-60 blur-2xl dark:from-emerald-500/10 dark:via-zinc-900/60 dark:to-indigo-500/10" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700 shadow-sm backdrop-blur dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-200">
              Fitness tools platform
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
                Precision calculators for athletes and coaches.
              </h1>
              <p className="text-lg text-zinc-600 sm:text-xl dark:text-zinc-300">
                Science-backed running, strength, and nutrition utilities with instant results, dark mode, and mobile-first layouts.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 dark:text-zinc-400">
              <span className="rounded-full bg-white/70 px-3 py-1 font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-200 backdrop-blur dark:bg-zinc-900/70 dark:text-zinc-100 dark:ring-zinc-700">
                Next.js 16 · React 19 · Tailwind
              </span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 font-medium text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
                {registry.length}+ tools
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/running/running-pace-calculator"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Open pace calculator
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200/80 bg-white/80 px-5 py-2.5 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-zinc-700"
              >
                Browse all tools
              </Link>
            </div>
          </div>

          {/* Featured tools preview */}
          <div className="relative">
            <div className="pointer-events-none absolute -left-6 top-0 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/20" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/70 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70">
              <div className="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
                <span>Featured tools</span>
                <Link href="/tools" className="text-xs font-semibold text-emerald-700 hover:text-emerald-600 dark:text-emerald-300">
                  View all →
                </Link>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {featured.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.path}
                    className="group flex flex-col gap-2 rounded-xl border border-zinc-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/70"
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:text-emerald-200 dark:ring-emerald-500/40">
                        {formatCategory(tool.category)}
                      </span>
                      <span className="text-xs font-medium text-zinc-500 transition group-hover:text-emerald-600 dark:text-zinc-400 dark:group-hover:text-emerald-300">
                        Open →
                      </span>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{tool.title}</h3>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">{tool.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full toolbox — grouped by category */}
      <section className="space-y-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">Toolbox</p>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">All calculators</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {registry.length} tools across {categories.length} categories.
            </p>
          </div>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-zinc-700"
          >
            Browse by category
          </Link>
        </div>

        {categories.map((category) => {
          const tools = getToolsByCategory(category);
          return (
            <div key={category} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
                {formatCategory(category)}
              </h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {tools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={tool.path}
                    className="group relative overflow-hidden rounded-xl border border-zinc-200/80 bg-white/80 p-4 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950/60"
                  >
                    <div className="absolute -right-8 -top-12 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl transition duration-700 group-hover:scale-110" aria-hidden />
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-snug">{tool.title}</h4>
                      <span className="shrink-0 text-xs text-zinc-400 transition group-hover:text-emerald-500 dark:text-zinc-500 dark:group-hover:text-emerald-400">→</span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">{tool.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Pillars */}
      <section className="grid gap-4 rounded-2xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm backdrop-blur sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-950/70">
        {pillars.map((pillar) => (
          <div key={pillar.label} className="space-y-2 rounded-xl border border-white/40 bg-white/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50">
            <p className="text-xs uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">{pillar.label}</p>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">{pillar.title}</p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{pillar.copy}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
