import type { Metadata } from "next";
import TrainingVolumeClientPage from "./_client";

export const metadata: Metadata = {
  title: "Training Volume Calculator | Denstar Fitness",
  description: "Calculate total training volume in sets, reps, and tonnage for any workout.",
  openGraph: {
    title: "Training Volume Calculator | Denstar Fitness",
    description: "Calculate total training volume in sets, reps, and tonnage for any workout.",
    url: "https://denstarfitness.com/tools/strength/training-volume-calculator",
    images: [{ url: "/api/og?tool=training-volume-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Training Volume Calculator | Denstar Fitness",
    description: "Calculate total training volume in sets, reps, and tonnage for any workout.",
    images: ["/api/og?tool=training-volume-calculator"],
  },
};

export default function TrainingVolumePage() {
  return <TrainingVolumeClientPage />;
}
