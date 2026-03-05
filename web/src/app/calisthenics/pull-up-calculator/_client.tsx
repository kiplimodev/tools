"use client";

import CalculatorLayout from "@/components/CalculatorLayout";
import { maxTest } from "@/lib/calculators/calisthenics/maxTest";

type Input = {
  pullups: number;
};

type Output = {
  level: string;
};

function calculate(input: Input): Output | null {
  if (input.pullups === undefined || input.pullups === null) return null;
  const result = maxTest(0, input.pullups);
  return { level: result.pullupLevel };
}

export default function PullUpClientPage() {
  return (
    <CalculatorLayout<Input, Output>
      title="Pull-Up Calculator"
      description="Calculate pull-up volume, weighted equivalents, and progression milestones."
      fields={[
        { name: "pullups", label: "Max pull-ups in one set", type: "number", min: 0 },
      ]}
      calculate={calculate}
      renderResult={(result) => (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-zinc-500 dark:text-zinc-400">Pull-Up Level</span>
            <strong className="text-zinc-900 dark:text-zinc-100">{result.level}</strong>
          </div>
        </div>
      )}
    />
  );
}
