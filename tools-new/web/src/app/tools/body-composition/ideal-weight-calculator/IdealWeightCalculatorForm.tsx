"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultHeightCm: number;
  defaultSex: "male" | "female";
};

export default function IdealWeightCalculatorForm({
  defaultHeightCm,
  defaultSex,
}: Props) {
  const router = useRouter();

  const [heightCm, setHeightCm] = useState(defaultHeightCm);
  const [sex, setSex] = useState<"male" | "female">(defaultSex);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/body-composition/ideal-weight-calculator?heightCm=${heightCm}&sex=${sex}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Height (cm)</label>
        <input
          type="number"
          value={heightCm}
          onChange={(e) => setHeightCm(Number(e.target.value))}
        />
      </div>

      <div>
        <label>Sex</label>
        <select
          value={sex}
          onChange={(e) => setSex(e.target.value as "male" | "female")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
