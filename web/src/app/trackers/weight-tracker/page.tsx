import type { Metadata } from "next";
import WeightTrackerClientPage from "./_client";

export const metadata: Metadata = {
  title: "Weight Tracker | Denstar Fitness",
  description: "Track your daily weight, view moving averages, and monitor trends over time.",
  openGraph: {
    title: "Weight Tracker | Denstar Fitness",
    description: "Track your daily weight, view moving averages, and monitor trends over time.",
    url: "https://tools.denstarfitness.com/tools/trackers/weight-tracker",
    images: [{ url: "/api/og?tool=weight-tracker", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weight Tracker | Denstar Fitness",
    description: "Track your daily weight, view moving averages, and monitor trends over time.",
    images: ["/api/og?tool=weight-tracker"],
  },
};

export default function WeightTrackerPage() {
  return <WeightTrackerClientPage />;
}
