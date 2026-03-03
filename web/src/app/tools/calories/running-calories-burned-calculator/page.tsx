import type { Metadata } from "next";
import RunningCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Running Calories Burned Calculator | Denstar Fitness",
  description: "Estimate total calories burned running based on weight, distance, and pace.",
  openGraph: {
    title: "Running Calories Burned Calculator | Denstar Fitness",
    description: "Estimate total calories burned running based on weight, distance, and pace.",
    url: "https://denstarfitness.com/tools/calories/running-calories-burned-calculator",
    images: [{ url: "/api/og?tool=running-calories-burned-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Running Calories Burned Calculator | Denstar Fitness",
    description: "Estimate total calories burned running based on weight, distance, and pace.",
    images: ["/api/og?tool=running-calories-burned-calculator"],
  },
};

export default function RunningCaloriesPage() {
  return <RunningCaloriesClientPage />;
}
