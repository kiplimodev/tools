import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Workout Generator | Denstar Fitness",
  description: "Generate a goal-based weekly workout plan based on your training level and equipment.",
  openGraph: {
    title: "Workout Generator | Denstar Fitness",
    description: "Generate a goal-based weekly workout plan based on your training level and equipment.",
    url: "https://denstar.fitness/tools/planners/workout-generator",
    images: [{ url: "/api/og?tool=workout-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Workout Generator | Denstar Fitness",
    description: "Generate a goal-based weekly workout plan based on your training level and equipment.",
    images: ["/api/og?tool=workout-generator"],
  },
};

export default function WorkoutGeneratorPage() {
  return <ComingSoon title="Workout Generator" />;
}
