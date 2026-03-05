import type { Metadata } from "next";
import PowerliftingClientPage from "./_client";

export const metadata: Metadata = {
  title: "Powerlifting Calculator | Denstar Fitness",
  description: "Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
  openGraph: {
    title: "Powerlifting Calculator | Denstar Fitness",
    description: "Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
    url: "https://tools.denstarfitness.com/tools/strength/powerlifting-calculator",
    images: [{ url: "/api/og?tool=powerlifting-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Powerlifting Calculator | Denstar Fitness",
    description: "Calculate your Wilks, DOTS, and IPF GL scores to compare strength across weight classes.",
    images: ["/api/og?tool=powerlifting-calculator"],
  },
};

export default function PowerliftingPage() {
  return <PowerliftingClientPage />;
}
