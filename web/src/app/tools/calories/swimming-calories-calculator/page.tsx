import type { Metadata } from "next";
import SwimmingCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Swimming Calories Calculator | Denstar Fitness",
  description: "Estimate calories burned swimming based on stroke, weight, and duration.",
  openGraph: {
    title: "Swimming Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned swimming based on stroke, weight, and duration.",
    url: "https://denstar.fitness/tools/calories/swimming-calories-calculator",
    images: [{ url: "/api/og?tool=swimming-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swimming Calories Calculator | Denstar Fitness",
    description: "Estimate calories burned swimming based on stroke, weight, and duration.",
    images: ["/api/og?tool=swimming-calories-calculator"],
  },
};

export default function SwimmingCaloriesPage() {
  return <SwimmingCaloriesClientPage />;
}
