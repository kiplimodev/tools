import type { Metadata } from "next";
import BmiClientPage from "./_client";

export const metadata: Metadata = {
  title: "BMI Calculator | Denstar Fitness",
  description: "Calculate your Body Mass Index from weight and height with health classification.",
  openGraph: {
    title: "BMI Calculator | Denstar Fitness",
    description: "Calculate your Body Mass Index from weight and height with health classification.",
    url: "https://denstarfitness.com/tools/body-composition/bmi-calculator",
    images: [{ url: "/api/og?tool=bmi-calculator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BMI Calculator | Denstar Fitness",
    description: "Calculate your Body Mass Index from weight and height with health classification.",
    images: ["/api/og?tool=bmi-calculator"],
  },
};

export default function Page() {
  return <BmiClientPage />;
}
