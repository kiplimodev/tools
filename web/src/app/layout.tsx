import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeToggle } from "@/components/ThemeToggle";
import "./globals.css";

const geistSans = localFont({
  src: [
    { path: "../../public/fonts/Geist-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Geist-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Geist-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Geist-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tools.denstarfitness.com"),
  title: "Denstar Fitness — Free TDEE, Running Pace & Fitness Calculators",
  description: "Free TDEE calculator, running pace calculator, body fat calculator, and 40+ more science-backed fitness tools. Instant results, no signup needed.",
  openGraph: {
    siteName: "Denstar Fitness",
    type: "website",
    url: "https://tools.denstarfitness.com",
    title: "Denstar Fitness — Free TDEE, Running Pace & Fitness Calculators",
    description: "Free TDEE calculator, running pace calculator, body fat calculator, and 40+ more science-backed fitness tools. Instant results, no signup needed.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Denstar Fitness Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denstar Fitness — Free TDEE, Running Pace & Fitness Calculators",
    description: "Free TDEE calculator, running pace calculator, body fat calculator, and 40+ more. Instant results, no signup needed.",
    images: ["/api/og"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body className="font-sans text-base text-zinc-900 antialiased dark:text-zinc-50">
        <div className="pointer-events-none fixed inset-0 z-0 bg-hero-glow opacity-80 blur-3xl dark:opacity-60" aria-hidden />
        <div className="relative z-10 flex min-h-screen flex-col">
          <header className="sticky top-0 z-20 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200/60 backdrop-blur dark:bg-zinc-900/70 dark:text-emerald-300 dark:ring-emerald-500/40">
                  Denstar
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Free TDEE, running pace &amp; fitness calculators.</p>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 sm:px-6 lg:px-8">{children}</main>

          <footer className="mx-auto w-full max-w-6xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
            <div className="border-t border-zinc-200 pt-10 dark:border-zinc-800">
              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                {/* Brand */}
                <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                  <div className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-200/60 backdrop-blur dark:bg-zinc-900/70 dark:text-emerald-300 dark:ring-emerald-500/40">
                    Denstar
                  </div>
                  <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
                    Precision fitness calculators for athletes and coaches. Fast, accurate, and free.
                  </p>
                  <a
                    href="https://denstarfitness.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    denstarfitness.com →
                  </a>
                </div>

                {/* Tools */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Running</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      { label: "Pace Calculator", href: "/running/running-pace-calculator" },
                      { label: "VDOT Calculator", href: "/running/vdot-calculator" },
                      { label: "Interval Calculator", href: "/running/interval-calculator" },
                      { label: "Race Predictor", href: "/running/race-time-predictor" },
                    ].map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Strength</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      { label: "1 Rep Max", href: "/strength/1-rep-max-calculator" },
                      { label: "Powerlifting", href: "/strength/powerlifting-calculator" },
                      { label: "RPE Calculator", href: "/strength/rpe-calculator" },
                      { label: "Barbell Calculator", href: "/strength/barbell-calculator" },
                    ].map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Nutrition</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      { label: "TDEE Calculator", href: "/nutrition/tdee-calculator" },
                      { label: "Bulk Calculator", href: "/nutrition/bulk-calculator" },
                      { label: "Body Fat", href: "/body-composition/body-fat-calculator" },
                      { label: "BMI Calculator", href: "/body-composition/bmi-calculator" },
                    ].map((l) => (
                      <li key={l.href}>
                        <a href={l.href} className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">Denstar Fitness</p>
                  <ul className="mt-3 space-y-2">
                    {[
                      { label: "Home", href: "https://denstarfitness.com" },
                      { label: "Blog", href: "https://denstarfitness.com/blog" },
                      { label: "Training & Recovery", href: "https://denstarfitness.com/category/training/" },
                      { label: "Nutrition", href: "https://denstarfitness.com/category/nutrition/" },
                      { label: "Lifestyle", href: "https://denstarfitness.com/category/lifestyle/" },
                      { label: "Contact", href: "https://denstarfitness.com/contact" },
                    ].map((l) => (
                      <li key={l.href}>
                        <a href={l.href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100">{l.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
                <p className="text-xs text-zinc-400 dark:text-zinc-500">© {new Date().getFullYear()} Denstar Fitness. All rights reserved.</p>
                <a href="/#toolbox" className="text-xs text-zinc-400 hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300">Browse all tools →</a>
              </div>
            </div>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
