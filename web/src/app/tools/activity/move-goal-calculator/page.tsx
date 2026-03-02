import type { Metadata } from "next";
import MoveGoalClientPage from "./_client";

export const metadata: Metadata = {
  title: "Move Goal Calculator | Denstar Fitness",
  description: "Estimate a daily active calorie burn target based on your TDEE and activity level.",
  openGraph: {
    title: "Move Goal Calculator | Denstar Fitness",
    description: "Estimate a daily active calorie burn target based on your TDEE and activity level.",
    url: "https://denstar.fitness/tools/activity/move-goal-calculator",
    images: [{ url: "/api/og?tool=move-goal-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move Goal Calculator | Denstar Fitness",
    description: "Estimate a daily active calorie burn target based on your TDEE and activity level.",
    images: ["/api/og?tool=move-goal-calculator"],
  },
};

export default function MoveGoalPage() {
  return <MoveGoalClientPage />;
}
