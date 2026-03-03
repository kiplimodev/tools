import type { Metadata } from "next";
import WalkingCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Walking Calorie Calculator | Denstar Fitness",
  description: "Estimate calories burned walking based on your weight, pace, and distance.",
  openGraph: {
    title: "Walking Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned walking based on your weight, pace, and distance.",
    url: "https://denstarfitness.com/tools/calories/walking-calorie-calculator",
    images: [{ url: "/api/og?tool=walking-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Walking Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned walking based on your weight, pace, and distance.",
    images: ["/api/og?tool=walking-calorie-calculator"],
  },
};

export default function WalkingCaloriePage() {
  return <WalkingCalorieClientPage />;
}
