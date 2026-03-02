import type { Metadata } from "next";
import FatIntakeClientPage from "./_client";

export const metadata: Metadata = {
  title: "Fat Intake Calculator | Denstar Fitness",
  description: "Calculate your optimal daily fat intake in grams based on total calorie targets.",
  openGraph: {
    title: "Fat Intake Calculator | Denstar Fitness",
    description: "Calculate your optimal daily fat intake in grams based on total calorie targets.",
    url: "https://denstar.fitness/tools/nutrition/fat-intake-calculator",
    images: [{ url: "/api/og?tool=fat-intake-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fat Intake Calculator | Denstar Fitness",
    description: "Calculate your optimal daily fat intake in grams based on total calorie targets.",
    images: ["/api/og?tool=fat-intake-calculator"],
  },
};

export default function FatIntakeCalculatorPage() {
  return <FatIntakeClientPage />;
}
