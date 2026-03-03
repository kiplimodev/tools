import type { Metadata } from "next";
import StarbucksClientPage from "./_client";

export const metadata: Metadata = {
  title: "Starbucks Macro Calculator | Denstar Fitness",
  description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
  openGraph: {
    title: "Starbucks Macro Calculator | Denstar Fitness",
    description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
    url: "https://denstarfitness.com/tools/nutrition/starbucks-macro-calculator",
    images: [{ url: "/api/og?tool=starbucks-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Starbucks Macro Calculator | Denstar Fitness",
    description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
    images: ["/api/og?tool=starbucks-macro-calculator"],
  },
};

export default function StarbucksPage() {
  return <StarbucksClientPage />;
}
