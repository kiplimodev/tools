import type { Metadata } from "next";
import WaistToHipClientPage from "./_client";

export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator | Denstar Fitness",
  description: "Calculate your waist-to-hip ratio and determine health risk classification.",
  openGraph: {
    title: "Waist-to-Hip Ratio Calculator | Denstar Fitness",
    description: "Calculate your waist-to-hip ratio and determine health risk classification.",
    url: "https://denstarfitness.com/tools/body-composition/waist-to-hip-ratio-calculator",
    images: [{ url: "/api/og?tool=waist-to-hip-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waist-to-Hip Ratio Calculator | Denstar Fitness",
    description: "Calculate your waist-to-hip ratio and determine health risk classification.",
    images: ["/api/og?tool=waist-to-hip-ratio-calculator"],
  },
};

export default function WaistToHipPage() {
  return <WaistToHipClientPage />;
}
