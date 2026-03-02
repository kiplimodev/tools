import type { Metadata } from "next";
import PlateWeightClientPage from "./_client";

export const metadata: Metadata = {
  title: "Plate Weight Calculator | Denstar Fitness",
  description: "Find the exact plate combination needed to load a barbell to your target weight.",
  openGraph: {
    title: "Plate Weight Calculator | Denstar Fitness",
    description: "Find the exact plate combination needed to load a barbell to your target weight.",
    url: "https://denstar.fitness/tools/strength/plate-weight-calculator",
    images: [{ url: "/api/og?tool=plate-weight-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plate Weight Calculator | Denstar Fitness",
    description: "Find the exact plate combination needed to load a barbell to your target weight.",
    images: ["/api/og?tool=plate-weight-calculator"],
  },
};

export default function PlateWeightPage() {
  return <PlateWeightClientPage />;
}
