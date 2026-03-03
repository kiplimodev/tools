import type { Metadata } from "next";
import StepsPerDayClientPage from "./_client";

export const metadata: Metadata = {
  title: "Steps Per Day Calculator | Denstar Fitness",
  description: "Calculate a personalised daily step goal based on your activity level and health targets.",
  openGraph: {
    title: "Steps Per Day Calculator | Denstar Fitness",
    description: "Calculate a personalised daily step goal based on your activity level and health targets.",
    url: "https://denstarfitness.com/tools/activity/steps-per-day-calculator",
    images: [{ url: "/api/og?tool=steps-per-day-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Steps Per Day Calculator | Denstar Fitness",
    description: "Calculate a personalised daily step goal based on your activity level and health targets.",
    images: ["/api/og?tool=steps-per-day-calculator"],
  },
};

export default function StepsPerDayPage() {
  return <StepsPerDayClientPage />;
}
