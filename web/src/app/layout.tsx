import type { Metadata } from "next";
import localFont from "next/font/local";
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
  description: "Modern fitness, health, and nutrition calculators built with Next.js 14.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="min-h-screen bg-white text-black antialiased dark:bg-zinc-950 dark:text-zinc-50">
        <main className="mx-auto max-w-3xl px-4 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
