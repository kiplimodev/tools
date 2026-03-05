"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { maxTest } from "@/lib/calculators/calisthenics/maxTest";

type Input = {
  pushups: number;
};

type Output = {
  level: string;
};

function calculate(input: Input): Output | null {
  if (!input.pushups) return null;
  const result = maxTest(input.pushups, 0);
  return { level: result.pushupLevel };
}

export default function PushUpClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Push-Up Calculator"
      description="Calculate push-up volume, relative strength, and weekly progression targets."
      fields={[
        { name: "pushups", label: "Max push-ups in one set", type: "number", min: 1 },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Push-Up Level</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.level}</strong>
          </div>
        </div>
      )}
    />
  );
}
