import type { Metadata } from "next";
import WaistToHeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Waist-to-Height Ratio Calculator | Denstar Fitness",
  description: "Calculate your waist-to-height ratio and assess cardiovascular health risk.",
  openGraph: {
    title: "Waist-to-Height Ratio Calculator | Denstar Fitness",
    description: "Calculate your waist-to-height ratio and assess cardiovascular health risk.",
    url: "https://denstarfitness.com/tools/body-composition/waist-to-height-ratio-calculator",
    images: [{ url: "/api/og?tool=waist-to-height-ratio-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waist-to-Height Ratio Calculator | Denstar Fitness",
    description: "Calculate your waist-to-height ratio and assess cardiovascular health risk.",
    images: ["/api/og?tool=waist-to-height-ratio-calculator"],
  },
};

export default function Page() {
  return <WaistToHeightClientPage />;
}
