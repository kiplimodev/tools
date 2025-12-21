"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  defaultWeightKg: number;
  defaultHeightCm: number;
  defaultAge: number;
  defaultSex: "male" | "female";
  defaultActivityMultiplier: number;
};

export default function TdeeCalculatorForm({
  defaultWeightKg,
  defaultHeightCm,
  defaultAge,
  defaultSex,
  defaultActivityMultiplier,
}: Props) {
  const router = useRouter();

  const [weightKg, setWeightKg] = useState(defaultWeightKg);
  const [heightCm, setHeightCm] = useState(defaultHeightCm);
  const [age, setAge] = useState(defaultAge);
  const [sex, setSex] = useState<"male" | "female">(defaultSex);
  const [activityMultiplier, setActivityMultiplier] = useState(
    defaultActivityMultiplier
  );

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    router.push(
      `/tools/nutrition/tdee-calculator?weightKg=${weightKg}&heightCm=${heightCm}&age=${age}&sex=${sex}&activityMultiplier=${activityMultiplier}`
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-sm">
      <div>
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weightKg}
          onChange={(e) => setWeightKg(Number(e.target.value))}
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

      <div>
        <label>Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
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

      <div>
        <label>Activity Multiplier</label>
        <input
          type="number"
          step="0.05"
          value={activityMultiplier}
          onChange={(e) => setActivityMultiplier(Number(e.target.value))}
        />
      </div>

      <button type="submit">Calculate</button>
    </form>
  );
}
