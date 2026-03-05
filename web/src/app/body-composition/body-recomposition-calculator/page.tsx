import type { Metadata } from "next";
import BodyRecompositionClientPage from "./_client";

export const metadata: Metadata = {
  title: "Body Recomposition Calculator | Denstar Fitness",
  description: "Project changes to fat mass and lean mass over time with a recomposition plan.",
  openGraph: {
    title: "Body Recomposition Calculator | Denstar Fitness",
    description: "Project changes to fat mass and lean mass over time with a recomposition plan.",
    url: "https://tools.denstarfitness.com/tools/body-composition/body-recomposition-calculator",
    images: [{ url: "/api/og?tool=body-recomposition-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Recomposition Calculator | Denstar Fitness",
    description: "Project changes to fat mass and lean mass over time with a recomposition plan.",
    images: ["/api/og?tool=body-recomposition-calculator"],
  },
};

export default function BodyRecompositionPage() {
  return <BodyRecompositionClientPage />;
}
