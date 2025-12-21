"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultMaintenanceCalories: number;
  defaultSurplusCalories: number;
};

export default function LeanBulkCalculatorForm({
  defaultMaintenanceCalories,
  defaultSurplusCalories,
}: Props) {
  const router = useRouter();

  const [maintenanceCalories, setMaintenanceCalories] = useState(
    defaultMaintenanceCalories
  );
  const [surplusCalories, setSurplusCalories] = useState(
    defaultSurplusCalories
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/lean-bulk-calculator?maintenanceCalories=${maintenanceCalories}&surplusCalories=${surplusCalories}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Maintenance Calories</label>
        <input
          type="number"
          value={maintenanceCalories}
          onChange={(e) =>
            setMaintenanceCalories(Number(e.target.value))
          }
        />
      </div>

      <div>
        <label>Lean Bulk Surplus</label>
        <input
          type="number"
          value={surplusCalories}
          onChange={(e) =>
            setSurplusCalories(Number(e.target.value))
          }
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
