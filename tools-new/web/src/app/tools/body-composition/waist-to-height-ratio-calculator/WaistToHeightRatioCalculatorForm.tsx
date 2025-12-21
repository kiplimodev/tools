"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWaistCm: number;
  defaultHeightCm: number;
};

export default function WaistToHeightRatioCalculatorForm({
  defaultWaistCm,
  defaultHeightCm,
}: Props) {
  const router = useRouter();

  const [waistCm, setWaistCm] = useState(defaultWaistCm);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/waist-to-height-ratio-calculator?waistCm=${waistCm}&heightCm=${heightCm}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Waist Circumference (cm)</label>
        <input
          type="number"
          value={waistCm}
          onChange={(e) => setWaistCm(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Height (cm)</label>
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
