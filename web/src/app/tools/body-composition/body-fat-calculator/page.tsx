import type { Metadata } from "next";
import BodyFatClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Fat Calculator | Denstar Fitness",
  description: "Estimate your body fat percentage using the US Navy tape measurement method.",
  openGraph: {
    title: "Body Fat Calculator | Denstar Fitness",
    description: "Estimate your body fat percentage using the US Navy tape measurement method.",
    url: "https://denstar.fitness/tools/body-composition/body-fat-calculator",
    images: [{ url: "/api/og?tool=body-fat-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Fat Calculator | Denstar Fitness",
    description: "Estimate your body fat percentage using the US Navy tape measurement method.",
    images: ["/api/og?tool=body-fat-calculator"],
  },
};

export default function BodyFatPage() {
  return <BodyFatClientPage />;
}
