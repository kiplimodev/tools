"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultLiftA: number;
  defaultLiftB: number;
};

export default function StrengthRatioCalculatorForm({
  defaultLiftA,
  defaultLiftB,
}: Props) {
  const router = useRouter();

  const [liftA, setLiftA] = useState(defaultLiftA);
  const [liftB, setLiftB] = useState(defaultLiftB);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/strength-ratio-calculator?liftA=${liftA}&liftB=${liftB}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Primary Lift (kg)</label>
        <input
          type="number"
          value={liftA}
          onChange={(e) => setLiftA(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Secondary Lift (kg)</label>
        <input
          type="number"
          value={liftB}
          onChange={(e) => setLiftB(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
