"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultProtocol: "loading" | "maintenance";
};

export default function CreatineCalculatorForm({
  defaultWeightKg,
  defaultProtocol,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [protocol, setProtocol] = useState<"loading" | "maintenance">(
    defaultProtocol
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/creatine-calculator?weightKg=${weightKg}&protocol=${protocol}`
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
        <label>Creatine Protocol</label>
        <select
          value={protocol}
          onChange={(e) =>
            setProtocol(e.target.value as "loading" | "maintenance")
          }
        >
          <option value="loading">Loading phase</option>
          <option value="maintenance">Maintenance</option>
        </select>
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
