import type { Metadata } from "next";
import RowingCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Rowing Calories Calculator | Denstar Fitness",
  description: "Estimate calories burned during rowing based on weight, duration, and intensity.",
  openGraph: {
    title: "Rowing Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned during rowing based on weight, duration, and intensity.",
    url: "https://tools.denstarfitness.com/tools/calories/rowing-calories-calculator",
    images: [{ url: "/api/og?tool=rowing-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowing Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned during rowing based on weight, duration, and intensity.",
    images: ["/api/og?tool=rowing-calories-calculator"],
  },
};

export default function RowingCaloriesPage() {
  return <RowingCaloriesClientPage />;
}
