import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://denstar.fitness"),
  title: "Denstar Fitness — Precision Calculators for Athletes and Coaches",
  description: "Science-backed running, strength, and nutrition calculators with instant results. Built for athletes and coaches.",
  openGraph: {
    siteName: "Denstar Fitness",
    type: "website",
    url: "https://denstar.fitness",
    title: "Denstar Fitness — Precision Calculators for Athletes and Coaches",
    description: "Science-backed running, strength, and nutrition calculators with instant results. Built for athletes and coaches.",
    images: [{ url: "/api/og", width: 1200, height: 630, alt: "Denstar Fitness Tools" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denstar Fitness — Precision Calculators for Athletes and Coaches",
    description: "Science-backed running, strength, and nutrition calculators with instant results.",
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
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Premium fitness tools, ready for race day.</p>
              </div>
              <div className="flex items-center gap-3">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 sm:px-6 lg:px-8">{children}</main>

          <footer className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 pb-10 text-sm text-zinc-500 sm:px-6 lg:px-8 dark:text-zinc-400">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-700 shadow-sm ring-1 ring-zinc-200 backdrop-blur dark:bg-zinc-900/70 dark:text-zinc-200 dark:ring-zinc-700">
                Fast · Accurate · Minimal
              </span>
              <span>Built with Next.js 16, React 19, TypeScript, and Tailwind CSS.</span>
            </div>
            <p className="text-zinc-400 dark:text-zinc-500">More tools coming: saved results, AI-powered plans, and device integrations.</p>
          </footer>
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
