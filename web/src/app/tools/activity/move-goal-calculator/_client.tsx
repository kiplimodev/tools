"use client";

import CalculatorLayout from "@/components/CalculatorLayout";

type Input = { sex: "male" | "female"; age: number; weightKg: number; heightCm: number; activityLevel: string };
type Output = { moveGoal: number; tdee: number };

function calculate(input: Input): Output | null {
  if (!input.sex || !input.age || !input.weightKg || !input.heightCm || !input.activityLevel) return null;

  // Mifflin-St Jeor BMR
  const bmr =
    input.sex === "male"
      ? 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age + 5
      : 10 * input.weightKg + 6.25 * input.heightCm - 5 * input.age - 161;

  const factor =
    input.activityLevel === "sedentary" ? 1.2
    : input.activityLevel === "light" ? 1.375
    : input.activityLevel === "moderate" ? 1.55
    : input.activityLevel === "very" ? 1.725
    : 1.9;

  const tdee = Math.round(bmr * factor);
  const moveGoal = Math.round(tdee - bmr);

  return { moveGoal, tdee };
}

export default function MoveGoalClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Move Goal Calculator"
      description="Calculate your daily active calorie target — the calories beyond your resting metabolic rate."
      fields={[
        { name: "sex", label: "Sex", type: "select", options: [{ label: "Male", value: "male" }, { label: "Female", value: "female" }] },
        { name: "age", label: "Age (years)", type: "number", min: 15, max: 100, placeholder: "30" },
        { name: "weightKg", label: "Weight (kg)", type: "number", min: 20, placeholder: "70" },
        { name: "heightCm", label: "Height (cm)", type: "number", min: 100, placeholder: "175" },
        {
          name: "activityLevel",
          label: "Activity level",
          type: "select",
          options: [
            { label: "Sedentary (desk job, no exercise)", value: "sedentary" },
            { label: "Light (1–3 days/week)", value: "light" },
            { label: "Moderate (3–5 days/week)", value: "moderate" },
            { label: "Very active (6–7 days/week)", value: "very" },
            { label: "Extra active (physical job + exercise)", value: "extra" },
          ],
        },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            {result.moveGoal} <span className="text-base font-normal text-zinc-500">active kcal/day</span>
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">TDEE: {result.tdee} kcal/day</p>
        </div>
      )}
    />
  );
}
