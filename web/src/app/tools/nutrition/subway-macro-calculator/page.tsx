import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Subway Macro Calculator | Denstar Fitness",
  description: "Find the calories, protein, carbs, and fat in your custom Subway order.",
};

export default function SubwayPage() {
  return <ComingSoon title="Subway Macro Calculator" />;
}
