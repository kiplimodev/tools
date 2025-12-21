"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWaistCm: number;
  defaultHipCm: number;
};

export default function WaistToHipRatioCalculatorForm({
  defaultWaistCm,
  defaultHipCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [hipCm, setHipCm] = useState(defaultHipCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/waist-to-hip-ratio-calculator?waistCm=${waistCm}&hipCm=${hipCm}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Waist circumference (cm)</label>
        <input
          type="number"
          value={waistCm}
          onChange={(e) => setWaistCm(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Hip circumference (cm)</label>
        <input
          type="number"
          value={hipCm}
          onChange={(e) => setHipCm(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
