import type { Metadata } from "next";
import CarnivoreClientPage from "./_client";

export const metadata: Metadata = {
  title: "Carnivore Macro Calculator | Denstar Fitness",
  description: "Calculate your macro targets on a carnivore diet from your weight and goals.",
  openGraph: {
    title: "Carnivore Macro Calculator | Denstar Fitness",
    description: "Calculate your macro targets on a carnivore diet from your weight and goals.",
    url: "https://denstar.fitness/tools/nutrition/carnivore-macro-calculator",
    images: [{ url: "/api/og?tool=carnivore-macro-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carnivore Macro Calculator | Denstar Fitness",
    description: "Calculate your macro targets on a carnivore diet from your weight and goals.",
    images: ["/api/og?tool=carnivore-macro-calculator"],
  },
};

export default function CarnivorePage() {
  return <CarnivoreClientPage />;
}
