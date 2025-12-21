// src/app/tools/strength/barbell-calculator/BarbellCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultTargetWeightKg: number;
  defaultBarWeightKg: number;
};

export default function BarbellCalculatorForm({
  defaultTargetWeightKg,
  defaultBarWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(
    defaultTargetWeightKg
  );
  const [barWeightKg, setBarWeightKg] = useState(defaultBarWeightKg);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/barbell-calculator?targetWeightKg=${targetWeightKg}&barWeightKg=${barWeightKg}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Target Weight (kg)</label>
        <input
          type="number"
          value={targetWeightKg}
          onChange={(e) =>
            setTargetWeightKg(Number(e.target.value))
          }
        />
      </div>

      <div>
        <label>Bar Weight (kg)</label>
        <input
          type="number"
          value={barWeightKg}
          onChange={(e) =>
            setBarWeightKg(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
