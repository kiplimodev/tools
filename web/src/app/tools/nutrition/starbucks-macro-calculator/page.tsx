import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Starbucks Macro Calculator | Denstar Fitness",
  description: "Look up calories, protein, carbs, and fat for popular Starbucks drinks and food items.",
};

export default function StarbucksPage() {
  return <ComingSoon title="Starbucks Macro Calculator" />;
}
