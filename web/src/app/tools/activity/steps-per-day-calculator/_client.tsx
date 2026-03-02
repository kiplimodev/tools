"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { activityLevel: string; goal: string };
type Output = { stepsGoal: number; description: string };

function calculate(input: Input): Output | null {
  if (!input.activityLevel || !input.goal) return null;

  const base =
    input.activityLevel === "sedentary" ? 3000
    : input.activityLevel === "light" ? 5000
    : input.activityLevel === "moderate" ? 7500
    : 10000;

  const bonus =
    input.goal === "maintain" ? 0
    : input.goal === "improve" ? 2000
    : 3500;

  const stepsGoal = base + bonus;
  const description =
    stepsGoal < 5000 ? "Low active"
    : stepsGoal < 7500 ? "Somewhat active"
    : stepsGoal < 10000 ? "Active"
    : "Highly active";

  return { stepsGoal, description };
}

export default function StepsPerDayClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Steps Per Day Calculator"
      description="Get a personalised daily step goal based on your current activity level and health target."
      fields={[
        {
          name: "activityLevel",
          label: "Current activity level",
          type: "select",
          options: [
            { label: "Sedentary (mostly sitting)", value: "sedentary" },
            { label: "Light (occasional walks)", value: "light" },
            { label: "Moderate (regular walks)", value: "moderate" },
            { label: "Active (daily exercise)", value: "active" },
          ],
        },
        {
          name: "goal",
          label: "Goal",
          type: "select",
          options: [
            { label: "Maintain current fitness", value: "maintain" },
            { label: "Improve fitness", value: "improve" },
            { label: "Weight loss", value: "loss" },
          ],
        },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-1.5">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {result.stepsGoal.toLocaleString()} <span className="text-base font-normal text-zinc-500">steps/day</span>
          </p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{result.description}</p>
        </div>
      )}
    />
  );
}
