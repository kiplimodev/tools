import type { Metadata } from "next";
import TreadmillCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Treadmill Calorie Calculator | Denstar Fitness",
  description: "Estimate calories burned on the treadmill using speed, incline, weight, and duration.",
  openGraph: {
    title: "Treadmill Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned on the treadmill using speed, incline, weight, and duration.",
    url: "https://denstarfitness.com/tools/calories/treadmill-calorie-calculator",
    images: [{ url: "/api/og?tool=treadmill-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treadmill Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned on the treadmill using speed, incline, weight, and duration.",
    images: ["/api/og?tool=treadmill-calorie-calculator"],
  },
};

export default function TreadmillCaloriePage() {
  return <TreadmillCalorieClientPage />;
}
