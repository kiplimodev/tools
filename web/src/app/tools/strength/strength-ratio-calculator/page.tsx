import type { Metadata } from "next";
import StrengthRatioClientPage from "./_client";

export const metadata: Metadata = {
  title: "Strength Ratio Calculator | Denstar Fitness",
  description: "Assess your push, pull, and leg strength ratios relative to your bodyweight.",
  openGraph: {
    title: "Strength Ratio Calculator | Denstar Fitness",
    description: "Assess your push, pull, and leg strength ratios relative to your bodyweight.",
    url: "https://denstar.fitness/tools/strength/strength-ratio-calculator",
    images: [{ url: "/api/og?tool=strength-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strength Ratio Calculator | Denstar Fitness",
    description: "Assess your push, pull, and leg strength ratios relative to your bodyweight.",
    images: ["/api/og?tool=strength-ratio-calculator"],
  },
};

export default function StrengthRatioPage() {
  return <StrengthRatioClientPage />;
}
