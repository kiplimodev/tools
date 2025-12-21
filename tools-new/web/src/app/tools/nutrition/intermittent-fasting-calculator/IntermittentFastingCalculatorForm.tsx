"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
      <div>
        <label>Eating Window Start Hour</label>
        <input
          type="number"
          min={0}
          max={23}
          value={startHour}
          onChange={(e) => setStartHour(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Eating Window End Hour</label>
        <input
          type="number"
          min={0}
          max={23}
          value={endHour}
          onChange={(e) => setEndHour(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
