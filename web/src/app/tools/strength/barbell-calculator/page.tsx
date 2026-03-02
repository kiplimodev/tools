import type { Metadata } from "next";
import BarbellClientPage from "./_client";

export const metadata: Metadata = {
  title: "Barbell Calculator | Denstar Fitness",
  description: "Calculate the weight plates needed on each side of a barbell for any target load.",
  openGraph: {
    title: "Barbell Calculator | Denstar Fitness",
    description: "Calculate the weight plates needed on each side of a barbell for any target load.",
    url: "https://denstar.fitness/tools/strength/barbell-calculator",
    images: [{ url: "/api/og?tool=barbell-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbell Calculator | Denstar Fitness",
    description: "Calculate the weight plates needed on each side of a barbell for any target load.",
    images: ["/api/og?tool=barbell-calculator"],
  },
};

export default function BarbellPage() {
  return <BarbellClientPage />;
}
