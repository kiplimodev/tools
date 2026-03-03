import type { Metadata } from "next";
import CreatineClientPage from "./_client";

export const metadata: Metadata = {
  title: "Creatine Calculator | Denstar Fitness",
  description: "Calculate your daily creatine maintenance dose and loading phase amounts by bodyweight.",
  openGraph: {
    title: "Creatine Calculator | Denstar Fitness",
    description: "Calculate your daily creatine maintenance dose and loading phase amounts by bodyweight.",
    url: "https://denstarfitness.com/tools/nutrition/creatine-calculator",
    images: [{ url: "/api/og?tool=creatine-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creatine Calculator | Denstar Fitness",
    description: "Calculate your daily creatine maintenance dose and loading phase amounts by bodyweight.",
    images: ["/api/og?tool=creatine-calculator"],
  },
};

export default function CreatineCalculatorPage() {
  return <CreatineClientPage />;
}
