import type { Metadata } from "next";
import LeanBulkClientPage from "./_client";

export const metadata: Metadata = {
  title: "Lean Bulk Calculator | Denstar Fitness",
  description: "Calculate calories for a lean bulk with capped surplus to minimise fat gain.",
  openGraph: {
    title: "Lean Bulk Calculator | Denstar Fitness",
    description: "Calculate calories for a lean bulk with capped surplus to minimise fat gain.",
    url: "https://denstarfitness.com/tools/nutrition/lean-bulk-calculator",
    images: [{ url: "/api/og?tool=lean-bulk-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lean Bulk Calculator | Denstar Fitness",
    description: "Calculate calories for a lean bulk with capped surplus to minimise fat gain.",
    images: ["/api/og?tool=lean-bulk-calculator"],
  },
};

export default function LeanBulkCalculatorPage() {
  return <LeanBulkClientPage />;
}
