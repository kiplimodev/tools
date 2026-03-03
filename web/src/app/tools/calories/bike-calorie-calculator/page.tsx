import type { Metadata } from "next";
import BikeCalorieClientPage from "./_client";

export const metadata: Metadata = {
  title: "Bike Calorie Calculator | Denstar Fitness",
  description: "Estimate calories burned cycling based on weight, duration, and effort level.",
  openGraph: {
    title: "Bike Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned cycling based on weight, duration, and effort level.",
    url: "https://denstarfitness.com/tools/calories/bike-calorie-calculator",
    images: [{ url: "/api/og?tool=bike-calorie-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bike Calorie Calculator | Denstar Fitness",
    description: "Estimate calories burned cycling based on weight, duration, and effort level.",
    images: ["/api/og?tool=bike-calorie-calculator"],
  },
};

export default function BikeCaloriePage() {
  return <BikeCalorieClientPage />;
}
