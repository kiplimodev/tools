import type { Metadata } from "next";
import PullUpClientPage from "./_client";

export const metadata: Metadata = {
  title: "Pull-Up Calculator | Denstar Fitness",
  description: "Calculate pull-up volume, weighted equivalents, and progression milestones.",
  openGraph: {
    title: "Pull-Up Calculator | Denstar Fitness",
    description: "Calculate pull-up volume, weighted equivalents, and progression milestones.",
    url: "https://denstarfitness.com/tools/calisthenics/pull-up-calculator",
    images: [{ url: "/api/og?tool=pull-up-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pull-Up Calculator | Denstar Fitness",
    description: "Calculate pull-up volume, weighted equivalents, and progression milestones.",
    images: ["/api/og?tool=pull-up-calculator"],
  },
};

export default function PullUpPage() {
  return <PullUpClientPage />;
}
