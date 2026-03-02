import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Meal Plan Generator | Denstar Fitness",
  description: "Generate a structured daily meal plan tailored to your calorie and macro targets.",
  openGraph: {
    title: "Meal Plan Generator | Denstar Fitness",
    description: "Generate a structured daily meal plan tailored to your calorie and macro targets.",
    url: "https://denstar.fitness/tools/planners/meal-plan-generator",
    images: [{ url: "/api/og?tool=meal-plan-generator", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meal Plan Generator | Denstar Fitness",
    description: "Generate a structured daily meal plan tailored to your calorie and macro targets.",
    images: ["/api/og?tool=meal-plan-generator"],
  },
};

export default function MealPlanGeneratorPage() {
  return <ComingSoon title="Meal Plan Generator" />;
}
