import type { Metadata } from "next";
import OneRepMaxClientPage from "./_client";

export const metadata: Metadata = {
  title: "1 Rep Max Calculator | Denstar Fitness",
  description: "Estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas.",
  openGraph: {
    title: "1 Rep Max Calculator | Denstar Fitness",
    description: "Estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas.",
    url: "https://denstar.fitness/tools/strength/1-rep-max-calculator",
    images: [{ url: "/api/og?tool=1-rep-max-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "1 Rep Max Calculator | Denstar Fitness",
    description: "Estimate your one-rep max using Epley, Brzycki, Lombardi, O'Conner, and Lander formulas.",
    images: ["/api/og?tool=1-rep-max-calculator"],
  },
};

export default function OneRepMaxPage() {
  return <OneRepMaxClientPage />;
}
