import type { Metadata } from "next";
import HomeWorkoutClientPage from "./_client";

export const metadata: Metadata = {
  title: "Home Workout Generator | Denstar Fitness",
  description: "Generate a structured bodyweight workout plan based on your goal and available equipment.",
  openGraph: {
    title: "Home Workout Generator | Denstar Fitness",
    description: "Generate a structured bodyweight workout plan based on your goal and available equipment.",
    url: "https://denstarfitness.com/tools/calisthenics/home-workout-generator",
    images: [{ url: "/api/og?tool=home-workout-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Workout Generator | Denstar Fitness",
    description: "Generate a structured bodyweight workout plan based on your goal and available equipment.",
    images: ["/api/og?tool=home-workout-generator"],
  },
};

export default function HomeWorkoutGeneratorPage() {
  return <HomeWorkoutClientPage />;
}
