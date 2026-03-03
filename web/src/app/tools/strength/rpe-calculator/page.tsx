import type { Metadata } from "next";
import RpeClientPage from "./_client";

export const metadata: Metadata = {
  title: "RPE Calculator | Denstar Fitness",
  description: "Predict your working weight or rep count at any RPE based on your training max.",
  openGraph: {
    title: "RPE Calculator | Denstar Fitness",
    description: "Predict your working weight or rep count at any RPE based on your training max.",
    url: "https://denstarfitness.com/tools/strength/rpe-calculator",
    images: [{ url: "/api/og?tool=rpe-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPE Calculator | Denstar Fitness",
    description: "Predict your working weight or rep count at any RPE based on your training max.",
    images: ["/api/og?tool=rpe-calculator"],
  },
};

export default function RpePage() {
  return <RpeClientPage />;
}
