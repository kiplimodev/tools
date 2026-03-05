import type { Metadata } from "next";
import IntermittentFastingClientPage from "./_client";

export const metadata: Metadata = {
  title: "Intermittent Fasting Calculator | Denstar Fitness",
  description: "Calculate your eating and fasting windows based on your chosen IF protocol.",
  openGraph: {
    title: "Intermittent Fasting Calculator | Denstar Fitness",
    description: "Calculate your eating and fasting windows based on your chosen IF protocol.",
    url: "https://tools.denstarfitness.com/tools/nutrition/intermittent-fasting-calculator",
    images: [{ url: "/api/og?tool=intermittent-fasting-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intermittent Fasting Calculator | Denstar Fitness",
    description: "Calculate your eating and fasting windows based on your chosen IF protocol.",
    images: ["/api/og?tool=intermittent-fasting-calculator"],
  },
};

export default function IntermittentFastingCalculatorPage() {
  return <IntermittentFastingClientPage />;
}
