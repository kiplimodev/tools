"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWaistCm: number;
  defaultHipCm: number;
  defaultChestCm: number;
};

export default function BodyMeasurementCalculatorForm({
  defaultWaistCm,
  defaultHipCm,
  defaultChestCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [hipCm, setHipCm] = useState(defaultHipCm);
  const [chestCm, setChestCm] = useState(defaultChestCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/body-measurement-calculator?waistCm=${waistCm}&hipCm=${hipCm}&chestCm=${chestCm}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Waist (cm)</label>
        <input
          type="number"
          value={waistCm}
          onChange={(e) => setWaistCm(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Hip (cm)</label>
        <input
          type="number"
          value={hipCm}
          onChange={(e) => setHipCm(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Chest (cm)</label>
        <input
          type="number"
          value={chestCm}
          onChange={(e) => setChestCm(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
