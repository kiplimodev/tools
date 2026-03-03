import type { Metadata } from "next";
import VO2MaxClientPage from "./_client";

export const metadata: Metadata = {
  title: "VO2 Max Calculator | Denstar Fitness",
  description: "Estimate your VO2 max and fitness category from a timed running performance.",
  openGraph: {
    title: "VO2 Max Calculator | Denstar Fitness",
    description: "Estimate your VO2 max and fitness category from a timed running performance.",
    url: "https://denstarfitness.com/tools/running/vo2max",
    images: [{ url: "/api/og?tool=vo2max", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VO2 Max Calculator | Denstar Fitness",
    description: "Estimate your VO2 max and fitness category from a timed running performance.",
    images: ["/api/og?tool=vo2max"],
  },
};

export default function VO2MaxPage() {
  return <VO2MaxClientPage />;
}
