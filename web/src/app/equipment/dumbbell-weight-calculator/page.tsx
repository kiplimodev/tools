import type { Metadata } from "next";
import DumbbellWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Dumbbell Weight Calculator | Denstar Fitness",
  description: "Calculate total volume lifted with dumbbells across sets and exercises.",
  openGraph: {
    title: "Dumbbell Weight Calculator | Denstar Fitness",
    description: "Calculate total volume lifted with dumbbells across sets and exercises.",
    url: "https://tools.denstarfitness.com/tools/equipment/dumbbell-weight-calculator",
    images: [{ url: "/api/og?tool=dumbbell-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dumbbell Weight Calculator | Denstar Fitness",
    description: "Calculate total volume lifted with dumbbells across sets and exercises.",
    images: ["/api/og?tool=dumbbell-weight-calculator"],
  },
};

export default function DumbbellWeightPage() {
  return <DumbbellWeightClientPage />;
}
