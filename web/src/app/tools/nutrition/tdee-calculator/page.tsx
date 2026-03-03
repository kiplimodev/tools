import type { Metadata } from "next";
import TDEEClientPage from "./_client";

export const metadata: Metadata = {
  title: "TDEE Calculator | Denstar Fitness",
  description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation.",
  openGraph: {
    title: "TDEE Calculator | Denstar Fitness",
    description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation.",
    url: "https://denstarfitness.com/tools/nutrition/tdee-calculator",
    images: [{ url: "/api/og?tool=tdee-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TDEE Calculator | Denstar Fitness",
    description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation.",
    images: ["/api/og?tool=tdee-calculator"],
  },
};

export default function TDEEPage() {
  return <TDEEClientPage />;
}
