import type { Metadata } from "next";
import LeanBodyMassClientPage from "./_client";

export const metadata: Metadata = {
  title: "Lean Body Mass Calculator | Denstar Fitness",
  description: "Calculate your lean body mass using the Boer formula from weight and height.",
  openGraph: {
    title: "Lean Body Mass Calculator | Denstar Fitness",
    description: "Calculate your lean body mass using the Boer formula from weight and height.",
    url: "https://tools.denstarfitness.com/tools/body-composition/lean-body-mass-calculator",
    images: [{ url: "/api/og?tool=lean-body-mass-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Body Mass Calculator | Denstar Fitness",
    description: "Calculate your lean body mass using the Boer formula from weight and height.",
    images: ["/api/og?tool=lean-body-mass-calculator"],
  },
};

export default function LeanBodyMassPage() {
  return <LeanBodyMassClientPage />;
}
