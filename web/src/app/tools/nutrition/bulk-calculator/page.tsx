import type { Metadata } from "next";
import BulkClientPage from "./_client";

export const metadata: Metadata = {
  title: "Bulk Calculator | Denstar Fitness",
  description: "Calculate daily calorie intake for a controlled bulk based on TDEE and surplus size.",
  openGraph: {
    title: "Bulk Calculator | Denstar Fitness",
    description: "Calculate daily calorie intake for a controlled bulk based on TDEE and surplus size.",
    url: "https://denstar.fitness/tools/nutrition/bulk-calculator",
    images: [{ url: "/api/og?tool=bulk-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bulk Calculator | Denstar Fitness",
    description: "Calculate daily calorie intake for a controlled bulk based on TDEE and surplus size.",
    images: ["/api/og?tool=bulk-calculator"],
  },
};

export default function BulkCalculatorPage() {
  return <BulkClientPage />;
}
