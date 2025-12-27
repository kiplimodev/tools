// src/app/tools/nutrition/intermittent-fasting-calculator/IntermittentFastingCalculatorForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import NumberInput from "@/components/inputs/NumberInput";

type Props = {
  defaultStartHour: number;
  defaultEndHour: number;
};

export default function IntermittentFastingCalculatorForm({
  defaultStartHour,
  defaultEndHour,
}: Props) {
  const router = useRouter();

  const [startHour, setStartHour] = useState(defaultStartHour);
  const [endHour, setEndHour] = useState(defaultEndHour);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/intermittent-fasting-calculator?startHour=${startHour}&endHour=${endHour}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <NumberInput
        label="Eating Window Start Hour"
        value={startHour}
        onChange={setStartHour}
        min={0}
        max={23}
        step={1}
      />

      <NumberInput
        label="Eating Window End Hour"
        value={endHour}
        onChange={setEndHour}
        min={0}
        max={23}
        step={1}
      />

      <button type="submit">Calculate</button>
    </form>
  );
}
