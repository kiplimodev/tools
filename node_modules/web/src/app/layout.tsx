import type { Metadata } from "next";
import localFont from "next/font/local";
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
  title: "Denstar Fitness Tools",
  description: "Modern fitness, health, and nutrition calculators built with Next.js 16.",
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
                <a
                  href="https://vercel.com/new"
                  className="hidden items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-2 text-sm font-semibold text-zinc-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-100 dark:hover:border-zinc-700 md:inline-flex"
                  rel="noreferrer"
                  target="_blank"
                >
                  Deploy to Vercel
                </a>
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
              <span>Built with Next.js 16, React 18, TypeScript, and Tailwind CSS.</span>
            </div>
            <p className="text-zinc-400 dark:text-zinc-500">Ready for more tools? Strength, body composition, and cycling are up next.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
