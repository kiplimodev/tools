import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Body Measurement Calculator | Denstar Fitness",
  description: "Estimate body composition from girth measurements using established formulas.",
};

export default function BodyMeasurementPage() {
  return <ComingSoon title="Body Measurement Calculator" />;
}
