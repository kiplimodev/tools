"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultBodyFatPercent: number;
  defaultTargetBodyFatPercent: number;
};

export default function BodyRecompositionCalculatorForm({
  defaultWeightKg,
  defaultBodyFatPercent,
  defaultTargetBodyFatPercent,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [bodyFatPercent, setBodyFatPercent] = useState(defaultBodyFatPercent);
  const [targetBodyFatPercent, setTargetBodyFatPercent] = useState(
    defaultTargetBodyFatPercent
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/body-recomposition-calculator?weightKg=${weightKg}&bodyFatPercent=${bodyFatPercent}&targetBodyFatPercent=${targetBodyFatPercent}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Current Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Current Body Fat (%)</label>
        <input
          type="number"
          value={bodyFatPercent}
          onChange={(e) => setBodyFatPercent(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Target Body Fat (%)</label>
        <input
          type="number"
          value={targetBodyFatPercent}
          onChange={(e) =>
            setTargetBodyFatPercent(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
