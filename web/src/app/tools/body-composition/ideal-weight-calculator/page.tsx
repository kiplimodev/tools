import type { Metadata } from "next";
import IdealWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator | Denstar Fitness",
  description: "Find your ideal weight range using Devine and Robinson formulas.",
  openGraph: {
    title: "Ideal Weight Calculator | Denstar Fitness",
    description: "Find your ideal weight range using Devine and Robinson formulas.",
    url: "https://tools.denstarfitness.com/tools/body-composition/ideal-weight-calculator",
    images: [{ url: "/api/og?tool=ideal-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ideal Weight Calculator | Denstar Fitness",
    description: "Find your ideal weight range using Devine and Robinson formulas.",
    images: ["/api/og?tool=ideal-weight-calculator"],
  },
};

export default function IdealWeightPage() {
  return <IdealWeightClientPage />;
}
