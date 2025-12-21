// src/app/tools/strength/plate-weight-calculator/PlateWeightCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultTargetWeightKg: number;
  defaultBarbellWeightKg: number;
};

export default function PlateWeightCalculatorForm({
  defaultTargetWeightKg,
  defaultBarbellWeightKg,
}: Props) {
  const router = useRouter();

  const [targetWeightKg, setTargetWeightKg] = useState(
    defaultTargetWeightKg
  );
  const [barbellWeightKg, setBarbellWeightKg] = useState(
    defaultBarbellWeightKg
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/strength/plate-weight-calculator?targetWeightKg=${targetWeightKg}&barbellWeightKg=${barbellWeightKg}`
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
        <label>Barbell Weight (kg)</label>
        <input
          type="number"
          value={barbellWeightKg}
          onChange={(e) =>
            setBarbellWeightKg(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
