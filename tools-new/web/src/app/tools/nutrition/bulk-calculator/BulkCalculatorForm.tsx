// src/app/tools/nutrition/bulk-calculator/BulkCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultMaintenanceCalories: number;
  defaultSurplusCalories: number;
};

export default function BulkCalculatorForm({
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
      `/tools/nutrition/bulk-calculator?maintenanceCalories=${maintenanceCalories}&surplusCalories=${surplusCalories}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Maintenance Calories"
        value={maintenanceCalories}
        onChange={setMaintenanceCalories}
        min={0}
        step={10}
      />

      <NumberInput
        label="Calorie Surplus"
        value={surplusCalories}
        onChange={setSurplusCalories}
        min={0}
        step={10}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
