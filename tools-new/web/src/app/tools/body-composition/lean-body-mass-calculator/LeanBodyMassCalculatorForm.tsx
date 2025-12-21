"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultBodyFatPercentage: number;
};

export default function LeanBodyMassCalculatorForm({
  defaultWeightKg,
  defaultBodyFatPercentage,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [bodyFatPercentage, setBodyFatPercentage] = useState(
    defaultBodyFatPercentage
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/lean-body-mass-calculator?weightKg=${weightKg}&bodyFatPercentage=${bodyFatPercentage}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Body Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Body Fat Percentage (%)</label>
        <input
          type="number"
          step="0.1"
          value={bodyFatPercentage}
          onChange={(e) =>
            setBodyFatPercentage(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
