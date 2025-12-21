"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultDurationMinutes: number;
  defaultMets: number;
};

export default function RowingCaloriesCalculatorForm({
  defaultWeightKg,
  defaultDurationMinutes,
  defaultMets,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [durationMinutes, setDurationMinutes] = useState(defaultDurationMinutes);
  const [mets, setMets] = useState(defaultMets);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/calories/rowing-calories-calculator?weightKg=${weightKg}&durationMinutes=${durationMinutes}&mets=${mets}`
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
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={durationMinutes}
          onChange={(e) => setDurationMinutes(Number(e.target.value))}
        />
      </div>

      <div>
        <label>METs</label>
        <input
          type="number"
          value={mets}
          onChange={(e) => setMets(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
