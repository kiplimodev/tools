import type { Metadata } from "next";
import ProteinPowderClientPage from "./_client";

export const metadata: Metadata = {
  title: "Protein Powder Calculator | Denstar Fitness",
  description: "Find out how many protein powder scoops you need to hit your daily protein target.",
  openGraph: {
    title: "Protein Powder Calculator | Denstar Fitness",
    description: "Find out how many protein powder scoops you need to hit your daily protein target.",
    url: "https://denstarfitness.com/tools/nutrition/protein-powder-calculator",
    images: [{ url: "/api/og?tool=protein-powder-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protein Powder Calculator | Denstar Fitness",
    description: "Find out how many protein powder scoops you need to hit your daily protein target.",
    images: ["/api/og?tool=protein-powder-calculator"],
  },
};

export default function ProteinPowderCalculatorPage() {
  return <ProteinPowderClientPage />;
}
