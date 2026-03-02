import type { Metadata } from "next";
import VdotClientPage from "./_client";

export const metadata: Metadata = {
  title: "VDOT Calculator | Denstar Fitness",
  description: "Estimate your VDOT score and training pace zones from a recent race time.",
  openGraph: {
    title: "VDOT Calculator | Denstar Fitness",
    description: "Estimate your VDOT score and training pace zones from a recent race time.",
    url: "https://denstar.fitness/tools/running/vdot-calculator",
    images: [{ url: "/api/og?tool=vdot-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VDOT Calculator | Denstar Fitness",
    description: "Estimate your VDOT score and training pace zones from a recent race time.",
    images: ["/api/og?tool=vdot-calculator"],
  },
};

export default function VdotCalculatorPage() {
  return <VdotClientPage />;
}
