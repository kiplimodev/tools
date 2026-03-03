import type { Metadata } from "next";
import SubwayClientPage from "./_client";

export const metadata: Metadata = {
  title: "Subway Macro Calculator | Denstar Fitness",
  description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
  openGraph: {
    title: "Subway Macro Calculator | Denstar Fitness",
    description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
    url: "https://denstarfitness.com/tools/nutrition/subway-macro-calculator",
    images: [{ url: "/api/og?tool=subway-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subway Macro Calculator | Denstar Fitness",
    description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
    images: ["/api/og?tool=subway-macro-calculator"],
  },
};

export default function SubwayPage() {
  return <SubwayClientPage />;
}
