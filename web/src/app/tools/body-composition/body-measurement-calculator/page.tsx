import type { Metadata } from "next";
import BodyMeasurementClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Measurement Calculator | Denstar Fitness",
  description: "Estimate body composition from girth measurements using established formulas.",
  openGraph: {
    title: "Body Measurement Calculator | Denstar Fitness",
    description: "Estimate body composition from girth measurements using established formulas.",
    url: "https://denstar.fitness/tools/body-composition/body-measurement-calculator",
    images: [{ url: "/api/og?tool=body-measurement-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Measurement Calculator | Denstar Fitness",
    description: "Estimate body composition from girth measurements using established formulas.",
    images: ["/api/og?tool=body-measurement-calculator"],
  },
};

export default function BodyMeasurementPage() {
  return <BodyMeasurementClientPage />;
}
