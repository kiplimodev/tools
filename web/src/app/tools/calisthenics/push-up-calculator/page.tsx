import type { Metadata } from "next";
import PushUpClientPage from "./_client";

export const metadata: Metadata = {
  title: "Push-Up Calculator | Denstar Fitness",
  description: "Calculate push-up volume, relative strength, and weekly progression targets.",
  openGraph: {
    title: "Push-Up Calculator | Denstar Fitness",
    description: "Calculate push-up volume, relative strength, and weekly progression targets.",
    url: "https://tools.denstarfitness.com/tools/calisthenics/push-up-calculator",
    images: [{ url: "/api/og?tool=push-up-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Push-Up Calculator | Denstar Fitness",
    description: "Calculate push-up volume, relative strength, and weekly progression targets.",
    images: ["/api/og?tool=push-up-calculator"],
  },
};

export default function PushUpPage() {
  return <PushUpClientPage />;
}
