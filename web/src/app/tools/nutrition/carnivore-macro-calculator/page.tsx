import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Carnivore Macro Calculator | Denstar Fitness",
  description: "Calculate your macro targets on a carnivore diet from your weight and goals.",
};

export default function CarnivorePage() {
  return <ComingSoon title="Carnivore Macro Calculator" />;
}
