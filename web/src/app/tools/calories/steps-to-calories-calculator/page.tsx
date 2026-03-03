import type { Metadata } from "next";
import StepsToCaloriesClientPage from "./_client";

export const metadata: Metadata = {
  title: "Steps to Calories Calculator | Denstar Fitness",
  description: "Convert daily step count into estimated calories burned based on your weight.",
  openGraph: {
    title: "Steps to Calories Calculator | Denstar Fitness",
    description: "Convert daily step count into estimated calories burned based on your weight.",
    url: "https://tools.denstarfitness.com/tools/calories/steps-to-calories-calculator",
    images: [{ url: "/api/og?tool=steps-to-calories-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steps to Calories Calculator | Denstar Fitness",
    description: "Convert daily step count into estimated calories burned based on your weight.",
    images: ["/api/og?tool=steps-to-calories-calculator"],
  },
};

export default function StepsToCaloriesPage() {
  return <StepsToCaloriesClientPage />;
}
